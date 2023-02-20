import React, {useState} from "react";
import style from "../../pages/ModalPageSignIn/modalSignIn.module.css";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { setModalCreate} from "../../appSlices";
import {PutPost, fetchPostById} from "../../appSlices";
import { useForm, SubmitHandler } from "react-hook-form";



export interface CreatePostTypeProp {
    id: string,
    title: string,
    image: string,
    description: string,
    likeCount: number,
    dislikeCount: number,
    favorite: boolean,
    date: string,
    text: string,
}



const ModalCreatePost:React.FC =() => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<CreatePostTypeProp>();
    const onSubmit: SubmitHandler<CreatePostTypeProp> = async (data) => {
        await dispatch(PutPost(data))
        // @ts-ignore
        await dispatch(fetchPostById())
    };



    const dispatch = useAppDispatch()

    const modal = useAppSelector(state => state.rootReducer.postsReducer.modalCreate)
    return(
        <div  className={modal ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={() => dispatch(setModalCreate())}>
            <div style={{height: '600px'}} className={style.modalContent} onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="id">ID</label>
                    <input type="text" {...register('id',{required: true})} />
                    <label htmlFor="title">title</label>
                    <input type="text" {...register('title', {required: true})}/>
                    <label htmlFor="image">image</label>
                    <input type="text" {...register('image',{required: true})}/>
                    <label htmlFor="description">description</label>
                    <input type="text" {...register('description',{required: true})}/>
                    <label htmlFor="likeCount">like count</label>
                    <input type="number" {...register('likeCount',{required: true})}/>
                    <label htmlFor="dislikeCount">dislike count</label>
                    <input type="number" {...register('dislikeCount',{required: true})}/>
                    <label htmlFor="favorite">favorite</label>
                    <input type="checkbox" {...register('favorite')}/>
                    <label htmlFor="date">date</label>
                    <input type="text" {...register('date',{required: true})}/>
                    <label htmlFor="text">text</label>
                    <input type="text" {...register('text',{required: true})}/>
                    <button className={style.but} type='submit'>Create</button>
                </form>
            </div>

        </div>
    )
}

export default ModalCreatePost;