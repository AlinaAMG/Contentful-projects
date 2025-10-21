import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Dynamische portfolio website gebouwd met React en Contentful CMS.
            Alle projectgegevens, zoals titels, afbeeldingen en live links,
            worden automatisch opgehaald en weergegeven. Hierdoor blijft mijn
            portfolio altijd up-to-date, overzichtelijk en professioneel, zonder
            dat ik de code handmatig hoef aan te passen.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
