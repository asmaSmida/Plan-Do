import { useState } from "react";
import ShowItem from "./ShowItem";
//import Pagination from 'react-bootstrap/Pagination';

const ShowList = ({ places, type, title }) => {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (places) => {
      setFavorites([...favorites, places])
      console.log("its work?")
    }
  return (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
        {/* <h2>{title}</h2> */}
        {places.filter(place => place.type.includes(type)).map(place =>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <ShowItem place={place}/>
          </div>
        )}
         {/* <Pagination>
              <Pagination.Prev />
              <Pagination.Ellipsis />
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Next />
            </Pagination> */}
      </div>
    </div>
  );
}

export default ShowList;
