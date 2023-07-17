import { useEffect, useState } from 'react';
import './App.css'
import Header from './assets/components/header'
import Counter from './assets/components/counter/counter'
import Input from './assets/components/input';
import Card from './assets/components/products/card';


function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);
  const inputclass = `container ${active ? 'active' : ''}`
  const [cart, setCart] = useState([]);
 

  const isValidCounter = counter > 0;

  const incrementCounter = () =>  {
    setCounter(prevCounter => prevCounter +1);
  };

  const decrementCounter = () => {
   if (isValidCounter) {  
    setCounter(prevCounter => prevCounter -1);
  } };

  const OnChange = (event) =>  {
    const value = (event.target.value);
    setInput(value);
}

const onFocus = () =>  {
  setActive(true);
}

const onBlur = () =>  {
  setActive(false);
}



useEffect(() => {
  const getProductos = async () => {
    const response = await fetch('https://64af4ab6c85640541d4e4000.mockapi.io/Products',{
      method: 'GET',
      headers:  {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    const data = await response.json()
    setProducts(data)
  }

  getProductos()
}, [])



  return (
    <div>
    <Header logo="Shop"/>
    <Counter isValidCounter={isValidCounter} counter={counter} onDecrementCounter={decrementCounter} onIncrementCounter={incrementCounter} />
      <Input placeholder={"Find your Product"} type={"text"}
      onChange={OnChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={inputclass}
      />

<div className='contenedor'>
      {
        products.map((element) => {
        return(<Card {...element}/>)
        })
      }
      </div>
      </div>


)};

export default App


