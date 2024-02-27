import {categories, items} from './App';
import Item from './Item';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function NewItemForm() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('vehicle');

    function CreateNewItem() {
        items.push(new Item(name, category));
        setName('');
    }

    return (
        <>
            <div className="form-group">
                <label>
                    Item:
                    <input
                        onChange={event => setName(event.target.value)}
                        value={name}
                        type="text"
                        id="inputName"
                        name="name"
                        className="form-control"/>
                </label>

                <label>
                    Category:
                    <select
                        onChange={event => setCategory(event.target.value)}
                        defaultValue={category}
                        id="inputCategory"
                        className="form-control">
                        {
                            categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>))
                        }
                    </select>
                </label>
            </div>
            <button className="btn btn-primary m-2" onClick={CreateNewItem}>Create</button>
        </>
    );
}

export default NewItemForm;