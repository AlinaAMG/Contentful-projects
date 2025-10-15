import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
            quos id aperiam pariatur perferendis, amet exercitationem ipsum
            deleniti assumenda error vero atque. A illum nostrum totam deserunt
            ipsa et. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas, ex possimus! Laboriosam quibusdam atque quidem culpa magnam
            molestias vero reiciendis voluptates beatae?
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
