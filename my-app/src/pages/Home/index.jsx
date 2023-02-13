import style from './home.module.css';
import React, { useEffect } from "react";
import BlogContent from '../../components/BlogContent';
import Footer from '../../components/Footer';
import { useDispatch } from "react-redux";
import { fetchPostById } from '../../appSlices'; 
import Layout from '../../components/Layout';


function Home() {

  const dispatch = useDispatch();
  
  useEffect( ()=> {
    dispatch(fetchPostById())
  }, [])

  return (
      <Layout>
        <BlogContent />
      </Layout>  
    
    

);
}
  


export default Home;