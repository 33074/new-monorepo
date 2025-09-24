import React, { useEffect, useState } from 'react';
import { getFoodItems, addFoodItem } from '../services/foodService';

const FoodList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await getFoodItems();
        setItems(data);
    };

    const handleAdd = async () => {
        await addFoodItem({ name, quantity: parseInt(quantity) });
        fetchItems();
        setName('');
        setQuantity('');
    };

    return (
        <div>
            <h1>Food Items</h1>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name} - {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default FoodList;
