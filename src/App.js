 
import Acceuil from './pages/Acceuil/Acceuil';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import SingleEstablish from './components/singleEstablishement/SingleEstablish';  
import LoginForm from './pages/authForms/LoginForm';
import LoginHostForm from './pages/authForms/LoginHostForm';
import RegisterForm from './pages/authForms/RegisterForm';
import PlacesList from './components/places/PlacesList';
import RegisterOwnerForm from './pages/authForms/RegisterOwnerForm';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavbarComp from './components/navbar/NavbarComp';
import FormEstate from './components/formEstate/formEstate';
import ContactUs from './pages/contactUs/ContactUs';
import Profil from './components/profil/Profil';

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
            <Route exact path="/login-host" element={<LoginHostForm   />}  /> 
            <Route exact path="/register" element={<RegisterForm />}  />  
            <Route exact path="/register-owner" element={<RegisterOwnerForm />}  />  
            <Route exact path="/estates" element={<PlacesList type ="" />}  />
            <Route exact path="/mariage" element={<PlacesList type ="mariage" />}  />
            <Route exact path="/annif" element={<PlacesList type ="anniversaire" />}  />
            <Route exact path="/teambuilding" element={<PlacesList type ="team building" />}  />
            <Route exact path="/shoot" element={<PlacesList type ="photoshoot" />}  />
            <Route exact path="/host-profile" element={<Profil />}  />
            <Route exact path="/estates/:id" element={<SingleEstablish />}  /> 
         </Routes>
       </ >
     </div>
     </BrowserRouter>   
  );
}


export default App;