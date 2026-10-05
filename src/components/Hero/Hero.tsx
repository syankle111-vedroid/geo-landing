import './Hero.scss';
import { COUNTRIES } from '../../constants/methods';

export const Hero = () => {
  const scrollToCountries = () => {
    document.querySelector('.countries')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="hero">
      <div className="hero__background">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <div className="blob b4"></div>
      </div>
      <div className="hero__content">
        <header className="hero__header">
          <div className="hero__logo">
            <img src="/img/logo-mark.png" alt="SP" height={30} className="hero__logo-img" />
            SecurePay
          </div>
        </header>

        <main className="hero__main">
          <h1 className="hero__title">
            БЕЗОПАСНОСТЬ - {' '}
            <br className="hero__desktop-br" />
            Превыше всего
          </h1>
          <p className="hero__subtitle">
            Secure предоставляет платежные решения, в более чем <br className="hero__desktop-br" /> 20-ти
            странах земного шара. «Запроцессим даже в<br className="hero__desktop-br" /> Северной Корее» -
            Founder
          </p>
          <button className="hero__button" onClick={scrollToCountries}>
            Перейти к офферам
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </main>

        <div className="hero__footer">
          <span className="hero__scroll-text">ЛИСТАЙ ВНИЗ</span>
          <img src="/img/mouse.png" alt="Скролл вниз" className="hero__mouse" />
        </div>
      </div>
      <div className="hero__marquee">
        <div className="hero__marquee-content">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="hero__marquee-group">
              {COUNTRIES.map((country, index) => (
                <span key={index} className="hero__marquee-item">
                  {country.title}
                  <span className="hero__marquee-dot">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
