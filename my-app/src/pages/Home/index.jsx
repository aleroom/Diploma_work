import style from './home.module.css';
import React, { useEffect, useState } from "react";
import BlogContent from '../../components/BlogContent';
import Pagination from "../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {fetchPostById, renderPages} from '../../appSlices';
import Layout from '../../components/Layout';
import ModalSignIn from '../ModalPageSignIn';

function Home() {

  const currentPage = useSelector(state => state.rootReducer.postsReducer.currentPage)
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  
  useEffect(()=> {
    dispatch(fetchPostById())
  }, [])

    useEffect(() => {
        dispatch(renderPages())
    }, [currentPage])



  return (
      <Layout>
      
        <ModalSignIn active={modalActive} setActive={setModalActive}/>
        <BlogContent />
          {/* <Pagination /> */}
      </Layout>
    
    

);
}
  


export default Home;