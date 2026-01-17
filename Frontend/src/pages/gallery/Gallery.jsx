import "./gallery.css"

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c8",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
  ]

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h2>Gallery</h2>
        <p>Moments captured at Aurora Grand Hotel</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt="Hotel Gallery" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
