import { Link, useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import HeroPages from "../components/HeroPages";
import FormContainer from "../components/ui/FormContainer";
import AdoptionForm from "../components/AdoptionForm";

const AdoptionFormPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <main>
      <HeroPages title="Adopt a friend" />
      <section className="adoption-form-page size">
        <Link onClick={() => navigate(-1)} className="go-back"><FaArrowLeft /></Link>
        <FormContainer>
          <AdoptionForm id={id} />
        </FormContainer>
      </section>
    </main>
  )
}

export default AdoptionFormPage;