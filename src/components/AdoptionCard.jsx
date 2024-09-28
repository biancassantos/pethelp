/* eslint-disable react/prop-types */
import RoundButton from "./ui/RoundButton";
import ReadMore from "./ui/ReadMore";

const AdoptionCard = ({ id, name, species, gender, age, img, description }) => {
  return (
    <section className="adoption-card">
      <section className="adoption-card-top">
        <div className="pet-info">
          <img src={img} alt="" />
          <div>
            <h2>{name}</h2>
            <ul>
              <li>{species}</li>
              <li>{gender}</li>
              <li>{age}</li>
            </ul>
          </div>
        </div>
        <RoundButton text="send an application" src={`${id}`} variant="yellow-btn" />
      </section>
      <ReadMore text={description} limit={65} />
    </section>
  )
}

export default AdoptionCard;