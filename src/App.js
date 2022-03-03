import Navbar from './components/Navbar';
import PlacesList from './components/PlacesList';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  return (  
      <BrowserRouter>
    <div className="App"> 
    <Navbar />
      <div className="content"> 
        <Routes>
           <Route exact path="/" element={<PlacesList/>}  />
           {/* <Route exact path="/projects/:id" element={<ShowPlaces/>}  />  */}
        </Routes>
      </div>
    </div>
    </BrowserRouter>  
  );
}


export default App;