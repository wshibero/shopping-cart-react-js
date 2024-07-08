import './Card.css'
export default function Card({name, stock, imglink, imgname, category, cost}){
  return (
    <div className="Card">
      {/* <img src={imglink} alt={imgname} width={90} height={90}/> */}
      <div className='imgPos'></div>
      <div className="CardHeader">
        <h1>{name}</h1>
      </div>
      <div className="CardBody">
        <ul>
          <li>{category}</li>
          <li>cost ${cost}</li>
          <li>availiabilty: {stock > 0 ? `${stock} available` : "out of stock"}</li>
        </ul>
      </div>
    </div>
  )
}