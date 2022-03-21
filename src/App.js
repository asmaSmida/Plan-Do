import Navbar from './components/navbar/Navbar';
import PlacesList from './components/PlacesList';
import Acceuil from './pages/Acceuil/Acceuil';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  return (  
      <BrowserRouter>
    <div className="App"> 
    <Navbar />
      <div> 
        <Routes>
           <Route exact path="/" element={<Acceuil type =" " />}  /> 
           <Route exact path="/annif" element={<PlacesList type ="lorem" />}  />
           <Route exact path="/teambuilding" element={<PlacesList type ="teambuilding" />}  />
           <Route exact path="/shoot" element={<PlacesList type ="shoot" />}  />
           {/* <Route exact path="/projects/:id" element={<ShowPlaces/>}  />  */}
        </Routes>
      </div>
    </div>
    </BrowserRouter>  
  );
}


export default App;