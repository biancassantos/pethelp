import HeroPages from "../components/HeroPages";
import FormContainer from "../components/ui/FormContainer";
import DonateForm from "../components/DonateForm";

const DonatePage = () => {
  return (
    <main>
      <HeroPages title="Donate" />
      <section className="donate-page-body size">
        <p>Your donations help us with the cost of rescues, medical care, food and shelter for the pets. Any amount is valid and appreciated! You can see more on how the profits are redirected to the well-being of the pets on our Instagram page. Help us keep making a difference!</p>
        <FormContainer>
          <DonateForm />
        </FormContainer>
      </section>
    </main>
  )
}

export default DonatePage