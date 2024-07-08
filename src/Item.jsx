import './Item.css'
import {useState} from 'react'

export default function Item({name, stock, cost, imgname, imglink, category, manufacturer}){
  const [selected, setSelected] = useState(0)
  const [curStock, setStock] = useState(stock)
  return (
    <div className="Item item-container" id={name.split(" ").join("")}>
      <img src={imglink} height={180} width={180} alt={imgname}/>
      <table>
        <tbody>
          <tr>
            <td>item:</td><td>{name}</td>
          </tr>
          <tr>
            <td>Category:</td><td>{category}</td>
          </tr>
          <tr>
            <td>Manufacturer:</td><td>{manufacturer}</td>
          </tr>
          <tr>
            <td>cost:</td><td>${cost}</td>
          </tr>
          <tr>
            <td>remaining stock:</td><td>{curStock}</td>
          </tr>
          <tr>
            <td>Availability:</td><td>{curStock > 0? "available": "soldout"}</td>
          </tr>
          <tr>
            <td>Buy:</td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <button 
                        onClick={()=>{
                          if (selected < stock){
                            setSelected(selected+1)
                            setStock(curStock-1)
                          }
                        }}>+</button>
                      </td>
                      <td>
                      <span className='itemsel'>{selected} </span>
                      </td>
                      <td>
                      <button
                        onClick={()=>{
                          if (selected > 0){
                            setSelected(selected-1)
                            setStock(curStock+1)
                          }
                        }}>-</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={()=>{stock = curStock}}>Buy</button>
            </td>
            <td>
              <button>Cart</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}