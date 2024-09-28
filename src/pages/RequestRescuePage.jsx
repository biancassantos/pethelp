import HeroPages from "../components/HeroPages";
import FormContainer from "../components/ui/FormContainer";
import RequestRescueForm from "../components/RequestRescueForm";

const RequestRescuePage = () => {
  return (
    <main>
      <HeroPages title="Request a rescue" />
      <section className="size">
        <article className="request-rescue-text">
          <h2>How does it work?</h2>
          <p>You send us the information about where the rescue is needed, then we evaluate the situation and send you an email back, informing when the rescue is taking place and the next steps.</p>
          <p className="important">*If the rescue concerns animal abuse, you don&#39;t need to worry, your name will be kept anonymous to ensure your security.</p>
        </article>
        
        <FormContainer>
          <RequestRescueForm />
        </FormContainer>
      </section>
    </main>
  )
}

export default RequestRescuePage;