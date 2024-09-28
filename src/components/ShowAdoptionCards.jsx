/* eslint-disable react/prop-types */
import AdoptionCard from "./AdoptionCard";
import pets from "../pets";

const ShowAdoptionCards = ({ search }) => {
  const keys = ["name", "species", "gender", "age"]

  return (
    <>
      {pets.filter((item) => {
        return keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase()))
      }).map((pet) => {
        return (<AdoptionCard 
          key={pet.id}
          id={pet.id}
          name={pet.name}
          species={pet.species}
          gender={pet.gender}
          age={pet.age}
          img={pet.img}
          description={pet.description}
        />)
      })}
    </>
  )
}

export default ShowAdoptionCards;