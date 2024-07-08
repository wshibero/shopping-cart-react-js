import './App.css'
import Item from "./Item"

const items = [
  {name: "dell latitude 7290", stock: 5, cost: 500.99, imgname: "dell latitude 7290", category: "computers and accessories", manufacturer: "dell", imglink: ""}
]

export default function App() {
  return (
    <main>
      {items.map((item, index)=>(
      <Item 
        key={index}
        name={item.name}
        stock={item.stock}
        cost={item.cost}
        manufacturer={item.manufacturer}
        category={item.category}
        imgname={item.imgname}
        imglink={item.imglink}/>
      ))}
    </main>
  )
}
