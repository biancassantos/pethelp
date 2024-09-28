import HeroPages from "../components/HeroPages";

const ContactPage = () => {
  return (
    <main>
      <HeroPages title="Contact" />
      <section className="contact-text size">
        <p className="important">*For rescues, please give preference to the “Request a rescue” page.</p>
        <section>
          <h2>E-mail:</h2>
          <p>For sponsors: ph@sponsor.com</p>
          <p>General e-mail: pethelp@email.com</p>
        </section>
        <section>
          <h2>Phone:</h2>
          <p>(00) 0000-0000</p>
          <p>(00) 0000-0000</p>
        </section>
        <section>
          <h2>Office hours</h2>
          <p><strong>Monday - Friday:</strong> 9am-6pm</p>
          <p><strong>Saturday:</strong> 9am-3pm</p>
        </section>
      </section>
    </main>
  )
}

export default ContactPage;