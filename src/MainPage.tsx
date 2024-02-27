import {categories, items} from './App';
import ListItem from './ListItem';
import Item from './Item';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function MainPage() {
    const [currentItems, setCurrentItems] = useState(items);
    const [categoryFilter, setCategoryFilter] = useState(categories);
    const [search, setSearch] = useState('');

    function onDelete(item: Item) {
        const updatedItems = currentItems.filter(it => it !== item);
        setCurrentItems(updatedItems);
    }

    function setFilter(category: string) {
        const filtered = categories.filter(it => it === category);
        setCategoryFilter(filtered);
    }

    return <div className="container-fluid">
        <h4>Kategóriák</h4>
        <div className="row">
            {
                categories.map((category, index) =>
                    (<button
                        key={index}
                        onClick={() => setFilter(category)}
                        className="col m-2 btn btn-dark"
                    >{category}</button>))
            }
        </div>

        <div className="form-group">
            <label>
                Keresés:
                <input
                    className="form-control"
                    type="text" id="inputSearch"
                    onChange={event => setSearch(event.target.value)}
                />
            </label>
        </div>

        <ul className="list-group">
            {currentItems
                .filter(item => item.name.startsWith(search))
                .filter(item => categoryFilter.includes(item.category))
                .map((item, index) => (<ListItem key={index} item={item} onDelete={() => onDelete(item)}/>))}
        </ul>
    </div>;
}

export default MainPage;