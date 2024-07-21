import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Диван',
                    img: './Sofa.jpeg',
                    desc: 'Суперский диван для всей семьи',
                    category: 'sofa',
                    price: '30000'
                },
                {
                    id: 2,
                    title: 'Стул',
                    img: './chair.jpeg',
                    desc: 'Суперский стул для работы за компьютером',
                    category: 'chair',
                    price: '4000'
                },
                {
                    id: 3,
                    title: 'Стол',
                    img: './table.jpg',
                    desc: 'Суперский стол для всей семьи',
                    category: 'table',
                    price: '10000'
                },
                {
                    id: 4,
                    title: 'Табуретка',
                    img: './stool.jpg',
                    desc: 'Удобная табуретка с подушкой',
                    category: 'stool',
                    price: '1000'
                },
                {
                    id: 5,
                    title: 'Шкаф',
                    img: './wordrobe.jpg',
                    desc: 'Суперский шкаф для всей семьи',
                    category: 'wordrobe',
                    price: '20000'
                },
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }
  render() {
  return (
    <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer/>
    </div>
  )
}

deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !==id) })
}

addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
        if(el.id === item.id)
            isInArray = true
    })
    if(!isInArray)

    this.setState({ orders: [...this.state.orders, item]})
    }
}

export default App