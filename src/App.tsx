import React, {useState} from 'react';
import './App.css';
import NewItemForm from './NewItemForm';
import MainPage from './MainPage';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.css';

export const categories: string[] = ['vehicle','electronics','other'];
export const items: Item[] = [];

function App() {
  const [page, setPage] = useState(true);

  function handleClick() {
      if (page) {
          setPage(false);
      } else {
          setPage(true);
      }
  }

  return (
      <>
        { page ? <MainPage/> : <NewItemForm/> }
        <button className="btn btn-primary m-2" onClick={handleClick}>{page ? 'New Item' : 'Back'}</button>
      </>
  );
}

export default App;
