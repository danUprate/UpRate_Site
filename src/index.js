import './styles/main.scss';
import React from "react";
import ReactDOM from 'react-dom';
import { Navbar }  from './components/navbar';
import { Footerbar }  from './components/footerbar';
import { WelcomeScreen }  from './pages/welcome-screen';
import { JobDetails }  from './pages/job-details';
import { JobsBoard }  from './pages/jobs-board';
import { JobsBoardGlobal }  from './pages/jobs-board-global';
import { UprateProfile }  from './pages/my-uprate';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

const Welcome = () =>{
  return(
    <>
      <WelcomeScreen/>
    </>
  )
}

const MyUprate = () =>{
  return(
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, type: "tween" }}
        >
          <UprateProfile/>
        </motion.div>

        <div className='my-uprate'>
          <Footerbar/>
        </div>
      

    </>
  )
}

const JobsGlobal = () =>{
  return(
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, type: "tween" }}
        >
        <Navbar/>
        <JobsBoardGlobal/>
      </motion.div>
        <div className='jobs-board'>
          <Footerbar/>
        </div>
    </>
  )
}

const JobsCategory = () =>{
  return(
    <>
      <motion.div 
          initial={{ x: 375 }}
          animate={{ x: 0 }}
          exit={{ x: 375 }}
          transition={{ duration: 0.2, type: "tween" }}
          >
        <Navbar/>
        <JobsBoard/>
      </motion.div>
    </>
  )
}

const JobDetailed = () =>{
  return(
    <>
      <motion.div 
          initial={{ x: 375 }}
          animate={{ x: 0 }}
          exit={{ x: 375 }}
          transition={{ duration: 0.2, type: "tween" }}
          >
        <Navbar/>
        <JobDetails/>
      </motion.div>
    
    </>
  )
}


const App = () => {
    const location = useLocation();
  
  return (
      <AnimatePresence exitBeforeEnter initial={true} >
        <Router location={location} key={location.pathname}>
          <Routes>
            <Route path="/dist" element={<Welcome />}></Route>
            <Route path="/alljobs" element={<JobsGlobal />}></Route>
            <Route path="/jobsCategory" element={<JobsCategory />}></Route>
            <Route path="/jobDetailed" element={<JobDetailed />}></Route>
            <Route path="/myUprate" element={<MyUprate />}></Route>
            <Route path="/" element={<Welcome />}></Route>
          </Routes>
        </Router>
      </AnimatePresence>
  );
}


ReactDOM.render(<App/>, document.getElementById("App"))






