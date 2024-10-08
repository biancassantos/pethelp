import RoundButton from "./ui/RoundButton";
import adoptImg from "../assets/adopt.png";

const AdoptSection = () => {
  return (
    <section className="adopt size">
      <img src={adoptImg} alt="Illustration of three kids holding pets" />
      <article className="adopt-text">
        <h2>Adopt a friend!</h2>
        <p>Our rescued animals are also looking for a new loving and safe home.</p>
        <RoundButton text="adopt" src="/pethelp/adopt" variant="yellow-btn" />
      </article>
    </section>
  )
}

export default AdoptSection;