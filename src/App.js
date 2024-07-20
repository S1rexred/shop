import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    title: 'Диван',
                    img: './Sofa.jpeg',
                    desc: 'Суперский диван для всей семьи',
                    category: 'sofa',
                    price: '30.000'
                },
                {
                    id: 2,
                    title: 'Стул',
                    img: './chair.jpeg',
                    desc: 'Суперский стул для работы за компьютером',
                    category: 'chair',
                    price: '4.000'
                },
                {
                    id: 3,
                    title: 'Стол',
                    img: './table.jpg',
                    desc: 'Суперский стол для всей семьи',
                    category: 'table',
                    price: '10.000'
                },
                {
                    id: 4,
                    title: 'Табуретка',
                    img: './stool.jpg',
                    desc: 'Удобная табуретка с подушкой',
                    category: 'stool',
                    price: '1.000'
                },
                {
                    id: 5,
                    title: 'Шкаф',
                    img: './wordrobe.jpg',
                    desc: 'Суперский шкаф для всей семьи',
                    category: 'wordrobe',
                    price: '20.000'
                },
            ]
        }
    }
  render() {
  return (
    <div className="wrapper">
        <Header/>
        <Items items={this.state.items}/>
        <Footer/>
    </div>
  )
}
}

export default App