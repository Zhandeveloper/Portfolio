import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './styles/main.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import ScrolltoTop from './utils/ScrollToTop'

//This site was made with React and React Router,March 4 of 2024
function App() {
  return (
    <div className="App">
     <Router>
      <ScrolltoTop/>
     <Navbar />

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/project/:id' element={<Project/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
     </Routes>
      
      <Footer />
     </Router>
      

    </div>
  );
}

export default App;

