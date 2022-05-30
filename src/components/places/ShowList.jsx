import ShowItem from "./ShowItem";

const ShowList = ({ places, type, title }) => {
  return (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
        <h2>{title}</h2>
        {places.filter(place => place.body.includes(type)).map(place =>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <ShowItem place={place} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowList;