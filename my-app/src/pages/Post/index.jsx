import style from './post.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Post = () => {
    const posts = useSelector((state) => state.rootReducer.postsReducer.posts)
    const {id} = useParams();
    
    useEffect(()=>{
        console.log(id)
    }, [])
    
    return (
        <Layout>
        <div className={style.postWrap}>
            {posts.map((item)=>{
                if (item.id == id) {
                    console.log(item)
                    return (
                        <div className={style.postWrap}>
                            <h2 className={style.postTitle}>{item.title}</h2>
                            <p className={style.postDescription}>{item.description}</p>
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                            <p className={style.postText}>{item.text}</p>
                            <div className={style.nav}>
                                <button>Last<FontAwesomeIcon icon={faArrowLeft} /></button>
                                <button><FontAwesomeIcon icon={faArrowRight} />Next</button>
                            </div>
                        </div>    
                    )
                } 
               
            })}
      
        </div>
        </Layout>
        )
}

export default Post;
