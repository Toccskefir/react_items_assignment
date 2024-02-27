import Item from './Item';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface ItemProps {
    item: Item,
    onDelete: () => void;
}

function ListItem(props: ItemProps) {
    const [view, setView] = useState(true)

    return (
        <>
            <li className="list-group-item">{props.item.name}
            {view ?
                <button className="btn" onClick={() => setView(false)}><i className="fa fa-trash-o"></i></button>
                :
                <div>
                    <button className="btn" onClick={props.onDelete}>&#10004;</button>
                    <button className="btn" onClick={() => setView(true)}>&#10006;</button>
                </div>}
            </li>
        </>
    );
}

export default ListItem;