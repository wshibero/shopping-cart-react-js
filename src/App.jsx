import './App.css'
import Item from "./Item"
import Card from "./Card"

const items = [
  {name: "dell latitude 7290", stock: 5, cost: 500.99, imgname: "dell latitude 7290", category: "computers and accessories", manufacturer: "dell", imglink: ""},
  {name: "alienware m17", stock: 3, cost: 999.99, imgname: "alienware m17", manufacturer: "dell", imglink: "", category: "computers and accessories"},
  {name: "macbook air pro", stock: 10, cost: 699.50, imgname: "macbook air pro", manufacturer: "apple", imglink: "", category: "computers and accessories"}
]

export default function App() {
  return (
    <main>
      <div className='AllCards'>
        {items.map((item, index)=>(
          <Card 
            key={index}
            name={item.name}
            category={item.category}/>
        ))}
      </div>
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
