import './App.css'
import Header from './assets/components/header'
import CartWidget from './assets/components/cartWidget/cartWidget'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div>
    <Header logo="Blank"/>
    <div>
      <CartWidget/>
    </div>

    <div>
      <ItemListContainer greeting="Blank"/>
    </div>
    </div>
  )
}

export default App
