import './App.css'
import Item from "./Item"
import Card from "./Card"

const items = [
	{name: "dell latitude 7290", stock: 5, cost: 500.99, imgname: "dell latitude 7290", category: "computers and accessories", manufacturer: "dell", imglink: ""},
	{name: "alienware m17", stock: 3, cost: 999.99, imgname: "alienware m17", manufacturer: "dell", imglink: "", category: "computers and accessories"},
	{name: "macbook air pro", stock: 10, cost: 699.50, imgname: "macbook air pro", manufacturer: "apple", imglink: "", category: "computers and accessories"},
	{name: "iphone 7", stock: 40, cost: 499.99, imgname: "iphone 7", manufacturer: "apple", imglink: "", category: "computers and accessories"},
	{name: "iphone 7 pro", stock: 40, cost: 499.99, imgname: "iphone 7", manufacturer: "apple", imglink: "", category: "computers and accessories"},
{name: "iphone 8", stock: 40, cost: 499.99, imgname: "iphone 8", manufacturer: "apple", imglink: "", category: "computers and accessories"},
	{name: "samsung a3", stock: 40, cost: 499.99, imgname: "samsung", manufacturer: "samsung", imglink: "", category: "computers and accessories"},
{name: "iphone 10", stock: 40, cost: 499.99, imgname: "iphone 10", manufacturer: "apple", imglink: "", category: "computers and accessories"},
{name: "iphone 11", stock: 40, cost: 499.99, imgname: "iphone 11", manufacturer: "apple", imglink: "", category: "computers and accessories"},
	{name: "iphone 11 pro", stock: 40, cost: 499.99, imgname: "iphone 11", manufacturer: "apple", imglink: "", category: "computers and accessories"},
	{name: "iphone 13", stock: 40, cost: 499.99, imgname: "iphone 13", manufacturer: "apple", imglink: "", category: "computers and accessories"},
	{name: "iphone 12", stock: 40, cost: 499.99, imgname: "iphone 12", manufacturer: "apple", imglink: "", category: "computers and accessories"}
]

export default function App() {
	return (
		<main>
			<div className='AllCards'>
				{items.reduce((groups, item, index) => {
					if (index % 4 === 0) {
						groups.push([]);
					}
					groups[groups.length - 1].push(
						<Card
							key={index}
							name={item.name}
							category={item.category}
							cost={item.cost}
							stock={item.stock}
							imglink={item.imglink}
							imgname={item.imgname}
						/>
					);
					return groups;
				}, []).map((group, groupIndex) => (
					<div key={groupIndex} className="CardGroup">
						{group}
					</div>
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
