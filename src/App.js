 
import Acceuil from './pages/Acceuil/Acceuil';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import SingleEstablish from './components/singleEstablishement/SingleEstablish';  
import Navbar from './components/navbar/Navbar';
import LoginForm from './pages/authForms/LoginForm';
import RegisterForm from './pages/authForms/RegisterForm';
import PlacesList from './components/places/PlacesList';
import RegisterOwnerForm from './pages/authForms/RegisterOwnerForm';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavbarComp from './components/navbar/NavbarComp';
import LoginComponent from './pages/authForms/LoginComponent';
import FormEstate from './components/formEstate/formEstate';
function App() {
  return (   
     <BrowserRouter>
     <div className="App">  
     <NavbarComp/>
       < >  
         <Routes>
            <Route exact path="/add-estate" element={<FormEstate />}  /> 
            <Route exact path="/" element={<Acceuil   />}  /> 
            <Route exact path="/login" element={<LoginForm   />}  /> 
            <Route exact path="/register" element={<RegisterForm />}  />  
            <Route exact path="/register-owner" element={<RegisterOwnerForm />}  />  
            <Route exact path="/single" element={<SingleEstablish type =" " />}  />
            <Route exact path="/annif" element={<PlacesList type ="lorem" />}  />
            <Route exact path="/teambuilding" element={<PlacesList type ="molli" />}  />
            <Route exact path="/shoot" element={<PlacesList type ="ipsum" />}  />
            {/* <Route exact path="/projects/:id" element={<ShowPlaces/>}  />  */}
         </Routes>
       </ >
     </div>
     </BrowserRouter>   
  );
}


export default App;