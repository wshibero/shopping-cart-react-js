import {useState} from 'react'

export default function Item({name, stock}){
  const [selected, setSelected] = useState(0)
  const [curStock, setStock] = useState(stock)
  return (
    <div>
      <p>
        item: {name}<br/>
        cost: <br/>
        remaining stock: {curStock}<br/>
        availability: <br/>
        <button 
          onClick={()=>{
            if (selected < stock){
              setSelected(selected+1)
              setStock(curStock-1)
            }
          }}>+</button> <span className='itemsel'>{selected} </span>
        <button
          onClick={()=>{
            if (selected > 0){
              setSelected(selected-1)
              setStock(curStock+1)
            }
          }}>-</button>
      </p>
    </div>
  )
}