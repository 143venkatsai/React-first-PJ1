import './index.css'

const CardList = props => {
  const {item} = props
  const {title, description, imgUrl, className} = item

  return (
    <li className={`${className} card-container`}>
      <h1 className="heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} className="img-sizing" alt={title} />
    </li>
  )
}

export default CardList
