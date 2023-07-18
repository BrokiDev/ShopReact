import { useEffect, useState } from 'react';
import './App.css'
import Header from './assets/components/header'
import Counter from './assets/components/counter/counter'
import Input from './assets/components/input';
import Card from './assets/components/products/card';
import Details from './assets/components/products/details';


function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);
  const inputclass = `container ${active ? 'active' : ''}`
  const [cart, setCart] = useState([]);
  const [details, setDetails] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState(null);
  const [productsFiltered, setProductsFiltered] = useState([]);

  const filterBySearch = (q) => {
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter((item) => {
      return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    setProductsFiltered(filteredProducts);

}
const onShowDetails = (id) =>  {
    setDetails(true);
    const findProduct = products.find((element) => element.id === id);
    setDetailsProduct(findProduct);
  }
 

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
    filterBySearch(value);
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
      {details ?(

        <>
        <div className='btn'>
        <button className='close-btn' onClick={() => setDetails(false)}>X</button>
        </div>
      <Details {...detailsProduct} onShowDetails={onShowDetails}/>
      </>
      ):
        (<div className='contenedor'>
        {
          input.length > 0 ? productsFiltered.map((element) => {
          (<Card {...element} onShowDetails={onShowDetails}/>)
          }

          ):
         products.map((element) => {
          return(<Card {...element} onShowDetails={onShowDetails}/>)
          })
        }

      { 
        input.length > 0 ? 
        (productsFiltered.map((element) => (
          <Card {...element} onShowDetails={onShowDetails}/>
        )

        )): (

        products.map((element) => {
          <Card {...element} onShowDetails={onShowDetails}/>
        }))}
      
        </div>
        )}
      


      </div>


)};

export default App


