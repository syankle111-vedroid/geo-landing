import './Hero.scss'

export const Hero = () => {
  const scrollToCountries = () => {
    document.querySelector('.countries')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="hero">
      <div className="hero__background"></div>
      <div className="hero__content">
        <header className="hero__header">
          <div className="hero__logo">
            <img src="/img/logo-mark.png" alt="SP" height={30} className="hero__logo-img" />
            SecurePay
          </div>
        </header>

        <main className="hero__main">
          <h1 className="hero__title">
            БЕЗОПАСНОСТЬ -
            <br />
            Превыше всего
          </h1>
          <p className="hero__subtitle">
            Secure предоставляет платежные решения, в более чем <br /> 20-ти
            странах земного шара. «Запроцессим даже в<br /> Северной Корее» -
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
    </section>
  )
}
