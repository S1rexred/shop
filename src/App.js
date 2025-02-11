import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import ShowFullItem from "./components/ShowFullItem"
import Categories from "./components/Categories"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Диван',
                    img: './Sofa.jpeg',
                    desc: 'Суперский диван для всей семьи',
                    category: 'sofa',
                    price: '30000',
                    alt: 'Диван'
                },
                {
                    id: 2,
                    title: 'Стул',
                    img: './chair.jpeg',
                    desc: 'Суперский стул для работы за компьютером',
                    category: 'chair',
                    price: '4000',
                    alt: 'стул'
                },
                {
                    id: 3,
                    title: 'Стол',
                    img: './table1.jpg',
                    desc: 'Суперский стол для всей семьи',
                    category: 'table',
                    price: '10000',
                    alt: 'стол'
                },
                {
                    id: 4,
                    title: 'Табуретка',
                    img: './stool.jpg',
                    desc: 'Удобная табуретка с подушкой',
                    category: 'stool',
                    price: '1300',
                    alt: 'табуретка'
                },
                {
                    id: 5,
                    title: 'Шкаф',
                    img: './wordrobe.jpg',
                    desc: 'Суперский шкаф для всей семьи',
                    category: 'wordrobe',
                    price: '20000',
                    alt: 'шкаф'
                },
                {
                    id: 6,
                    title: 'Лампа настольная',
                    img: './light.jpg',
                    desc: 'Лучшая лампа для вашего стола',
                    category: 'light',
                    price: '2500',
                    alt: 'лампа настольная'
                },
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
        
    }
  render() {
  return (
    <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem = {this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem = {this.onShowItem} item = {this.state.fullItem} />}
        <Footer/>
    </div>
  )
}

onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem })
}

chooseCategory(category) {
    if(category === 'all') {
        this.setState({ currentItems: this.state.items })
        return
    }

    this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
    })
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