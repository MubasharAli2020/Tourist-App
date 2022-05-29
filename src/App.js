import React, { Component }  from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
     <Routes>
     <Route exact path='/' element={< Home />}></Route>
<Route  path='/about' element={< About />}></Route>
<Route  path='/contact' element={< Contact />}></Route>
</Routes>
<Footer />
    </div>
    </Router>

  );
}

export default App;
