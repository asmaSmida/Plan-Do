import ShowItem from "./ShowItem";

const ShowList = ({ places, type, title }) => {
  return (
    <div className="place-list">
      <h2>{title}</h2>
      {places.filter(place => place.body.includes(type)).map(place =>
        <ShowItem place={place} />
      )}
    </div>
  );
}

export default ShowList;