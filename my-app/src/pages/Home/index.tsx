import style from './home.module.css';
import React, { useEffect, useState } from "react";
import BlogContent from '../../components/BlogContent';
import Pagination from "../../components/Pagination";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {fetchPostById} from '../../appSlices';
import Layout from '../../components/Layout';
import ModalSignIn from '../ModalPageSignIn';
import ModalCreatePost from "../../components/ModalCreatePost";

function Home() {

  const currentPage = useAppSelector(state => state.rootReducer.postsReducer.currentPage)
  const dispatch = useAppDispatch();



  useEffect(()=> {
    // @ts-ignore
      dispatch(fetchPostById())
  }, [currentPage])




  return (
      <Layout>
        <ModalCreatePost/>
        <ModalSignIn/>
        <BlogContent />
           <Pagination />
      </Layout>
    
    

);
}
  


export default Home;