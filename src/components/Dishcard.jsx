import React from 'react'
import "../components/Dishcard.css"

const Dishcard= ({project})=> {
  return (
    <div className="card">
  <img src={project.image} alt={project.title} className="card_img" />
  <div className="description">
    <h3 className="card_title">{project.title}</h3>
    <p className="card_description">{project.description}</p>
    <div className="card_footer">
      <span className="card_price">Rs{project.price}</span>
      <button className="card_button">Add to Cart</button>
    </div>
  </div>
</div>

  )
}

export default Dishcard