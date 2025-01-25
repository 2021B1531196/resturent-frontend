import React from 'react'
import { ReviewCard } from './ReviewCard'
import "./Results.css"



function Results() {
  const REVIEWS = [
    {
      name: "Kabir",
      description: "The tasting menu was an absolute delight! Each course was thoughtfully crafted and the wine pairing was perfect. The service was impeccable and the ambiance made our anniversary celebration truly special.",
      time:"Just Now",
    },
    {
      
      name: "Goku",
      description: "A culinary masterpiece! The chef's innovative approach to traditional dishes creates an unforgettable dining experience. The attention to detail in presentation and flavor combinations is remarkable.",
      time:"2 days ago",
    },
    {
      name: "Jhon Wick",
      description: "Exceptional service and amazing food. The atmosphere was perfect for our business dinner. Will definitely return!",
      time:"3 days ago",
    },
  ]
  return (
    <div className="results_section" id="reviews">
        <h2>What Our Guest Say</h2>
        <h4>Authentic reviews from our valued customers</h4>
        <div className="review_comment">
          <div className="review_grid">
              {REVIEWS.map((project,index)=>(
              <ReviewCard key={index} project={project}/>
            ))}
          </div>

        </div>
        <div className="stats-section">
      <div className="stats-wrapper">
        <div className="stats-grid">
          <div className="stats-card">
            <h3 className="stats-number">4.9/5</h3>
        
            <p className="stats-text">Average Rating</p>
          </div>
          <div className="stats-card">
            <h3 className="stats-number">1,000+</h3>
            <p className="stats-text">Reviews</p>
          </div>
          <div className="stats-card">
            <h3 className="stats-number">98%</h3>
            <p className="stats-text">Would Recommend</p>
          </div>
          <div className="stats-card">
            <h3 className="stats-number">15K+</h3>
            <p className="stats-text">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
        


    </div>
  )
}

export default Results