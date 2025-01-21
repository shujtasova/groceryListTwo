import './App.css'
import shopping from './assets/shopping.jpg'
import man from './assets/man.jpg'
import { GroceryList } from './GroceryList'

function App() {

  return (
    <div className="app">
      <div className="container">
        <img src={shopping} width="300px" alt="shopping" />
      </div>

      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={man} width="300px" alt="man" />
      </div>
    </div>
  )
}

export default App
