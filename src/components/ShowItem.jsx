const ShowItem = ({ place }) => {
    return (
        <div key={place.id} className="card mt-4">
            <div className="card-body">
                <h4 className="card-title">{place.title}</h4>
                <div className="card-text mb-2">{place.body} </div>
                {/* <Link to={`/places/${place.id}`} className="btn btn-primary">
          Plus de Dspanetails
        </Link> <></span>  */}
            </div>
        </div>
    );
}

export default ShowItem;