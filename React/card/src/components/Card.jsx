import './Card.css'

function Card(props) {
  return (
  <div className="card-container">
    <div className="card">
      <div className="card-header">
        <img src={props.image} className="logo vite" alt="Example" />
        <h2>{props.title}</h2>
      </div>
    </div>
  </div>
  )
}

export default Card
