import usePetImages from "../hooks/usePetImages";

const PhotoGalleryPage = () => {
  const { data: petImages, error, isLoading } = usePetImages();

  return (
    <section className="photo-gallery size">
      {error && <p>Something went wrong! Please try again.</p>}
      {isLoading && <p>Loading images...</p>}
      {petImages?.map((image, index) => {
        return (
        <div key={index} className="img-container">
          <img src={image} />
        </div>
      )})}
    </section>
  )
}

export default PhotoGalleryPage;