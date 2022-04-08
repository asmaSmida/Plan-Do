import useFetch from "./useFetch";
import ShowList from "./ShowList"; 
import Footer from "../footer/Footer";
const PlacesList = ({ type }) => {
  const { data: places, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <> 
      <div className="container"> 
        <div>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {places && <ShowList places={places} type={type} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlacesList;