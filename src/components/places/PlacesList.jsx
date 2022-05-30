import useFetch from "./useFetch";
import ShowList from "./ShowList";
import Footer from "../footer/Footer";
import { useState } from "react";
import './SearchBar.css';
import SearchIcon from "@material-ui/icons/Search";

const PlacesList = ({ type }) => {
  const { data: places, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [changedName, setChangedName] = useState("");
  function search(places) {
    return places.filter((place) => place.title.toLowerCase().indexOf(changedName) > -1);
  }
  return (
    <>
      <div  >
        <div className="search">
            <input type='text' placeholder='Enter the Estate Name' value={changedName} onChange={(e) => setChangedName(e.target.value)} /> 
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div>
          <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {places && <ShowList places={search(places)} type={type} />}
          </div>
        </div>
        <Footer />
      </>
      );
}

      export default PlacesList;