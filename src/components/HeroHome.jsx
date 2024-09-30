import RoundButton from "./ui/RoundButton";
import heroImg from "../assets/hero.jpg";

const HeroHome = () => {
  return (
    <div className="pink-bg">
        <section className="hero size">
          <section className="hero-top">
            <article className="hero-text">
              <h1>Help pets get a better life</h1>
              <p>We rescue pets living in bad conditions and give them all the care needed for free. Join us on this journey!</p>
              <div>
                <RoundButton text="request a rescue" src="/pethelp/request-rescue" />
                <RoundButton text="donate" src="/pethelp/donate" variant="hero-btn-outline" />
              </div>
            </article>
            <img src={heroImg} alt="Illustration of two people and three pets" />
          </section>
          <div className="hero-bottom">
            <section className="span-card">
              <span className="span-number">+100</span>
              <span>rescues</span>
            </section>
            <section className="span-card">
              <span className="span-number">+70</span>
              <span>adoptions</span>
            </section>
          </div>
        </section>
      </div>
  )
}

export default HeroHome