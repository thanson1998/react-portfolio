import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar className="nav"/>
     <Home/>
     <ContactForm/>
     <Footer/>
    </div>
  );
}

export default App;
