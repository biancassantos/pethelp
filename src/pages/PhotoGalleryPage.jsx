import { useEffect, useState } from "react";
import axios from "axios";

const PhotoGalleryPage = () => {
  const [petImages, setPetImages] = useState(null);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random/20')
      .then((res) => setPetImages(res.data.message))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className="photo-gallery size">
      {!petImages ? (<p>Loading images...</p>) : 
      (petImages.map((image, index) => {
        return (
        <div key={index} className="img-container">
          <img src={image} />
        </div>
      )
      }))}
    </section>
  )
}

export default PhotoGalleryPage;