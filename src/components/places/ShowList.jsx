import ShowItem from "./ShowItem";
import classes from './places.module.css';

const ShowList = ({ places, type, title }) => {
  return (
    <div className={classes.container}>

<div className={classes.placeLists}>
      <h2>{title}</h2>
      <div className={classes.placeList}>
      {places.filter(place => place.body.includes(type)).map(place =>
        <ShowItem place={place} />
      )}
      </div>
    </div>
    </div>
  );
}

export default ShowList;