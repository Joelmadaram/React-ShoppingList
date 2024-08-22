import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({items}) {
    return (
    <ul>
        {items.map(i => 
            <ShoppingListItem 
            key={i.id} 
            item={i.item} 
            quantity={i.quantity} 
            completed={i.completed}/>
        )}
    </ul>
    );
}

// In the world of react each element has to have a unique identifier in a list to keep track of elements;

