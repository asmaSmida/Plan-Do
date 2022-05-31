import './showItem.css';
import image from './home.jpg';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-scroll';

const ShowItem = ({ place }) => {
    return (
        <div key={place.id} className="card text-center shadow">
            <div className="overflow">
                <img src={image} alt="home" className='card-img-top' />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{place.title}</h4>
                <p className="card-text text-secondary">{place.body} </p>
            </div>
            <div className='card-footer'>
                <Link to={`/places/${place.id}`} className="btn  btn-outline-info">
                    Plus de Details
                </Link>
            </div>

        </div>
    );
}

export default ShowItem;