import useFetch from "./useFetch";
import ShowList from "./ShowList";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import './SearchBar.css';
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Search from "./Search";

const PlacesList = ({ type }) => {
  // const [places,setPlaces]=useState([]);
  // const [changedName, setChangedName] = useState("");
//   useEffect(() => {
//     console.log('hhhh');
//     axios.get('http://localhost:5000/plando/estate')
//         .then(response => {
//             setPlaces(response.data);
//             console.log("hey", places);
//         }
//         )
//         .catch(err => console.log(err+"lool")); 

// },[] );
  const { data: places, isPending, error } = useFetch('http://localhost:5000/plando/estate');
  const [changedName, setChangedName] = useState("");
  function search(places) {
    return places.filter((place) => place.name.toLowerCase().indexOf(changedName.toLowerCase()) > -1);
  }
  return (
    <>
      <div  >
        <div>
        <Search style={{borderTop:"solid" ,margin:"20px",position:"fixed",right:"20px"}} name={changedName} setName={setChangedName} />
        
          <h1 className="titleSearch">Les Espaces {type}</h1>
        </div>{/* <div className="search">
            <input type='text' placeholder="Entrer le Nom de l'espace" value={changedName} onChange={(e) => setChangedName(e.target.value)} /> 
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div> */}
          <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {places && 
            <ShowList places={search(places)} type={type.toLowerCase()} />
            }
          </div>
        </div>
        <Footer />
      </>
      );
}

      export default PlacesList;