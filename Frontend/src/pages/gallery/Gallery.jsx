import "./gallery.css"

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <div className="gallery-item"  data-aos="zoom-in" data-aos-delay="200" key={index}>
            <img src={img} alt="Hotel Gallery" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
