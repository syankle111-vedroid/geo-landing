import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CountryPanel } from './CountryPanel/CountryPanel';
import './Countries.scss';

import { COUNTRIES, type Region } from '../../constants/methods';

const REGIONS_KEYS: Record<string, string> = {
  'Все': 'all',
  'СНГ': 'cis',
  'Азия': 'asia',
  'Америка': 'america',
  'Африка': 'africa'
};

const REGIONS: (Region | 'Все')[] = ['Все', 'СНГ', 'Азия', 'Америка', 'Африка'];

export const Countries = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeRegion, setActiveRegion] = useState<Region | 'Все'>('Все');
  const containerRef = useRef<HTMLElement>(null);

  const filteredCountries = activeRegion === 'Все' 
    ? COUNTRIES 
    : COUNTRIES.filter(c => c.region === activeRegion);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If mostly vertical scrolling, intercept it
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const isAtRightEdge = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 1;
        const isAtLeftEdge = container.scrollLeft <= 0;

        // If scrolling down and not at right edge, OR scrolling up and not at left edge
        if ((e.deltaY > 0 && !isAtRightEdge) || (e.deltaY < 0 && !isAtLeftEdge)) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    
    if (containerRef.current) {
      const isMobile = window.innerWidth <= 767;
      const visibleCards = isMobile ? 4 : (window.innerWidth <= 1024 ? 3 : 4);
      const units = visibleCards === 4 ? 8 : 5; // 4 cards -> 8 units (3*1 + 5), 3 cards -> 5 units (2*1 + 3)
      
      const containerSize = isMobile ? window.innerHeight : window.innerWidth;
      const closedSize = isMobile ? 66 : containerSize / units;
      
      const currentScroll = isMobile ? containerRef.current.scrollTop : containerRef.current.scrollLeft;
      const currentFirstIndex = Math.round(currentScroll / closedSize);
      
      // Calculate allowed range for the first visible index so the active card is fully in view
      const minIndex = index - visibleCards + 2;
      const maxIndex = index - 1;
      
      let targetFirstIndex = currentFirstIndex;
      if (targetFirstIndex < minIndex) {
        targetFirstIndex = minIndex;
      } else if (targetFirstIndex > maxIndex) {
        targetFirstIndex = maxIndex;
      }
      
      const targetScroll = Math.max(0, targetFirstIndex * closedSize);
      
      if (isMobile) {
        containerRef.current.scrollTo({ top: targetScroll, behavior: 'smooth' });
      } else {
        containerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="countries-wrapper">
      <div className="countries__filters">
        {REGIONS.map(region => (
          <button
            key={region}
            className={`countries__filter-btn ${activeRegion === region ? 'active' : ''}`}
            onClick={() => {
              setActiveRegion(region);
              setActiveIndex(0);
              if (containerRef.current) {
                containerRef.current.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
              }
            }}
          >
            {t(`regions.${REGIONS_KEYS[region]}`)}
          </button>
        ))}
      </div>
      
      <section className="countries" ref={containerRef}>
        {filteredCountries.map((country, index) => (
          <CountryPanel 
            key={country.id}
            country={country}
            isActive={index === activeIndex}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </section>
    </div>
  );
};
