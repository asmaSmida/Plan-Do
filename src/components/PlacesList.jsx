import useFetch from "./useFetch";
import ShowList from "./ShowList";
const PlacesList = () => {
  const {data:places,isPending,error}=useFetch('https://jsonplaceholder.typicode.com/posts');
 
  return (
    <>
      <div className="container">
 
        <div>
        {error && <div>{error}</div> }
        {isPending && <div>Loading...</div>     }
        {places &&  <ShowList places={places}  title="All places" /> }
         
        
        </div>
      </div>
    </>
  );
}

export default PlacesList;