import { ReactNode } from 'react'
import './Card.css'

interface CardProps {
  title: string
  description?: string
  image?: string
  children?: ReactNode
}

function Card({ title, description, image, children }: CardProps) {
  return (
    <div className="card">
      {image && (
        <div className="card__image-wrapper">
          <img src={image} alt={title} className="card__image" />
        </div>
      )}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
        {children && <div className="card__children">{children}</div>}
      </div>
    </div>
  )
}

export default Card
