import './Card.css'
export default function Card({name, stock, imglink, imgname, category, price}){
  return (
    <div className="Card">
      <img/>
      <div className="CardHeader">
        <h1>{name}</h1>
      </div>
      <div className="CardBody">
        <ul>
          <li>{category}</li>
        </ul>
      </div>
    </div>
  )
}