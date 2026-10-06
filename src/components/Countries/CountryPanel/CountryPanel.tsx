import { useTranslation } from 'react-i18next';
import { Methods } from '../Methods/Methods';
import './CountryPanel.scss';

export interface CountryProps {
  id: string;
  title: string;
  code: string;
  bgText: string;
  color: string;
  flag: string;
  president: string;
}

interface CountryPanelProps {
  country: CountryProps;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const CountryPanel = ({ country, isActive, onClick }: CountryPanelProps) => {
  const { t } = useTranslation();
  
  return (
    <div 
      className={`country-panel ${isActive ? 'active' : ''}`}
      style={{ 
        '--main-color': country.color,
        '--char-count': country.title.length
      } as React.CSSProperties}
      onClick={onClick}
    >
      {/* Background huge code only in active */}
      <div className="country-panel__bg-code">{country.bgText}</div>

      <div className="country-panel__top">
        <div className="country-panel__badge">
           <img src={country.flag} alt={country.title} className="country-panel__flag" />
           {country.code}
        </div>
        
        <h2 className="country-panel__title">{t(`countries.${country.id}`, { defaultValue: country.title })}</h2>
        
        {isActive && (
          <div className="country-panel__active-content">
            <Methods countryId={country.id} />
          </div>
        )}
      </div>

      <img 
        src={country.president} 
        alt={`President of ${country.title}`} 
        className="country-panel__president" 
      />
    </div>
  );
};
