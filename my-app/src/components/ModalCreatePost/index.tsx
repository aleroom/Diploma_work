import React, {useState} from "react";
import Login from "../../components/SignIn";
import style from "../../pages/ModalPageSignIn/modalSignIn.module.css";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { setModalCreate} from "../../appSlices";
import {Simulate} from "react-dom/test-utils";
import {PutPost, fetchPostById} from "../../appSlices";
import submit = Simulate.submit;

export interface CreatePostTypeProp {
    id?: string,
    title?: string,
    src?: string,
    description?: string,
    likeCount?: number,
    dislikeCount?: number,
    favorite?: boolean,
    date?: string,
    text?: string,
}



const ModalCreatePost:React.FC =() => {
    const [createPost, setCreatePost] = useState<CreatePostTypeProp >({
        favorite: false
    })

    const handleSubmit =  async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        await dispatch(PutPost(createPost))
        // @ts-ignore
        await dispatch(fetchPostById())

    }

    const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name == 'favorite') {
            setCreatePost({
                ...createPost,
                [e.target.name]: e.target.checked
            })
        }else {
            setCreatePost(
                {...createPost,
                    [e.target.name]: e.target.value
                }
            )
        }

        console.log(e.target.checked)

    }

    const dispatch = useAppDispatch()

    const modal = useAppSelector(state => state.rootReducer.postsReducer.modalCreate)
    return(
        <div  className={modal ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={() => dispatch(setModalCreate())}>
            <div style={{height: '600px'}} className={style.modalContent} onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="id">ID</label>
                    <input type="text" name='id' value={createPost.id} onChange={handleFormChange}/>
                    <label htmlFor="title">title</label>
                    <input type="text" name='title' value={createPost.title} onChange={handleFormChange} />
                    <label htmlFor="src">src</label>
                    <input type="text" name='src' value={createPost.src} onChange={handleFormChange}/>
                    <label htmlFor="description">description</label>
                    <input type="text" name='description' value={createPost.description} onChange={handleFormChange} />
                    <label htmlFor="likeCount">like count</label>
                    <input type="number" name='likeCount' value={createPost.likeCount} onChange={handleFormChange}/>
                    <label htmlFor="dislikeCount">dislike count</label>
                    <input type="number" name='dislikeCount' value={createPost.dislikeCount} onChange={handleFormChange}/>
                    <label htmlFor="favorite">favorite</label>
                    <input type="checkbox"  name='favorite' onChange={handleFormChange}/>
                    <label htmlFor="date">date</label>
                    <input type="text" name='date' value={createPost.date} onChange={handleFormChange}/>
                    <label htmlFor="text">text</label>
                    <input type="text" name='text' value={createPost.text} onChange={handleFormChange}/>
                    <button className={style.but} type='submit'>Create</button>
                </form>
            </div>

        </div>
    )
}

export default ModalCreatePost;