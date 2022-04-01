import PlacesList from './components/PlacesList';
import Acceuil from './pages/Acceuil/Acceuil';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import SingleEstablish from './components/singleEstablishement/SingleEstablish';
function App() {
  return (  
      <BrowserRouter>
    <div className="App"> 
      <div> 
        <Routes>
           <Route exact path="/" element={<Acceuil type =" " />}  /> 
           <Route exact path="/single" element={<SingleEstablish type =" " />}  />
           <Route exact path="/annif" element={<PlacesList type ="lorem" />}  />
           <Route exact path="/teambuilding" element={<PlacesList type ="molli" />}  />
           <Route exact path="/shoot" element={<PlacesList type ="ipsum" />}  />
           {/* <Route exact path="/projects/:id" element={<ShowPlaces/>}  />  */}
        </Routes>
      </div>
    </div>
    </BrowserRouter>  
  );
}


export default App;