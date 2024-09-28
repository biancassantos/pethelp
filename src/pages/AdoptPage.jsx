import { useState } from "react";
import HeroPages from "../components/HeroPages";
import ShowAdoptionCards from "../components/ShowAdoptionCards";

const AdoptPage = () => {
  const [search, setSearch] = useState('');

  return (
    <main>
      <HeroPages title="Adopt a friend" />
      <section className="adoption-page size">
        <input 
        type="search" 
        name="search-pet" 
        id="search-pet" 
        placeholder="Search a species" 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        />
        <section className="adoption-cards-container">
          <ShowAdoptionCards search={search} />
        </section>
      </section>
    </main>
  )
}

export default AdoptPage;