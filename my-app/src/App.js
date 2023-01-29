import './App.css';
import Header from './components/Header';
import BlogContent from './components/BlogContent';
import Footer from './components/Footer';

// import React, { useEffect, useState } from 'react'
// import AppRouters from './components/AppRouters';

function App() {
  



  return (
    
    <div className='App'>
      <Header/>

      <main>
        <BlogContent />
      </main>
      
      <Footer year ={new Date().getFullYear()} />
    </div>

);
}
  


export default App;
