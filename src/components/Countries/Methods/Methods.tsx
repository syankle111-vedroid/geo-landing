import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { METHODS_DATA } from '../../../constants/methods';
import './Methods.scss';

interface MethodsProps {
  countryId: string;
}

export const Methods = ({ countryId }: MethodsProps) => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);
  const methods = METHODS_DATA[countryId] || [];

  if (methods.length === 0) return null;

  return (
    <div className="methods" onClick={(e) => e.stopPropagation()}>
      {methods.map((method) => {
        const isOpen = openId === method.id;
        
        return (
          <div 
            key={method.id} 
            className={`methods__item ${isOpen ? 'active' : ''}`}
            onClick={() => setOpenId(isOpen ? null : method.id)}
          >
            <div className="methods__header">
              <span className="methods__title">
                {t(`methodsData.${countryId}.${method.id}.title`, { defaultValue: method.title })}
              </span>
              <img 
                src="/img/arrow-bottom.png" 
                alt="arrow" 
                className={`methods__arrow ${isOpen ? 'methods__arrow--up' : ''}`} 
              />
            </div>
            
            <div className="methods__content-wrapper">
              <div 
                className="methods__content"
                dangerouslySetInnerHTML={{ __html: t(`methodsData.${countryId}.${method.id}.content`, { defaultValue: method.content }) }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
