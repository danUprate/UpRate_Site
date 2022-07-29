import './styles/main.scss';
import React from "react";
import ReactDOM from 'react-dom';
import { Navbar }  from './components/navbar';
import { HomeScreen }  from './pages/home';
import { ForWorkers }  from './pages/for-workers';
import { ForHiringCompanies }  from './pages/for-hiring-companies';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";


const pageTrans = 0.8,
      transType = "tween";

const Home = () =>{
  return(
    <>
    <Navbar/>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: pageTrans, type: transType }}
        >
          <HomeScreen/>
        </motion.div>
    </>
  )
}

const Workers = () =>{
  return(
    <>
    <Navbar/>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: pageTrans, type: transType }}
        >
          <ForWorkers/>
        </motion.div>
    </>
  )
}

const HiringCompanies = () =>{
  return(
    <>
    <Navbar/>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: pageTrans, type: transType }}
        >
          <ForHiringCompanies/>
        </motion.div>
    </>
  )
}


const App = () => {
  
  return (
      <AnimatePresence exitBeforeEnter initial={true} >
        <Router location={location} key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/workers" element={<Workers />}></Route>
            <Route path="/hiring-companies" element={<HiringCompanies />}></Route>
          </Routes>
        </Router>
      </AnimatePresence>
  );
}


ReactDOM.render(<App/>, document.getElementById("App"))






