import HeroPages from "../components/HeroPages"

const AboutPage = () => {
  return (
    <main>
      <HeroPages title="About us" />
      <article className="about-page-text size">
        <p>At Pethelp, we believe every animal deserves a loving home. Founded with a deep passion for animal welfare, we are a dedicated team of volunteers working tirelessly to rescue, rehabilitate, and rehome pets in need. Our mission is to give animals a second chance at life, providing them with the care, love, and attention they need to thrive.</p>
        <p>We are committed to making a difference in the lives of both animals and the families who welcome them. Through our adoption programs, educational initiatives, and community outreach, we aim to create a compassionate world where no pet is left behind.</p>
        <p>
        We work closely with local shelters, veterinarians, and animal lovers to ensure that every animal we save is placed in a forever home that suits their needs and personality. Our ultimate goal is not only to find homes for these animals but also to raise awareness about responsible pet ownership and the importance of spaying and neutering.</p>
        <p>
        Thank you for supporting our mission and helping us make the world a better place for our furry friends. Together, we can change lives—one paw at a time.</p>
      </article>
      <section className="about-page-img pink-bg">
        <img src="./imgs/about.jpg" alt="Illustration of two people and two pets" />
      </section>
    </main>
  )
}

export default AboutPage;