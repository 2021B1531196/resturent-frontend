import React from 'react'
import "./ReviewCard.css"

export const ReviewCard = ({project}) => {
  return (
    <div className="Review_card">
        <div className="Review_description">
            <h3 className="Review_name">{project.name}</h3>
            <p className="card_Review">{project.description}</p>
            <div className="review_footer">
            <span className="card_time">~{project.time}</span>
            
            </div>
        </div>
    </div>
    
  )
}
