import './App.css'
import ShoppingList from './ShoppingList';

const data = [
  { id:1, item: 'eggs', quantity: 12, completed: false},
  { id:2, item: 'milk', quantity: 2, completed: true},
  { id:3, item: 'bread', quantity: 3, completed: false},
  { id:4, item: 'cheese', quantity: 1, completed: true},
]

function App() {
  return (
    <div>
      <ShoppingList items={data}/>
    </div>
  );
  
}

export default App
