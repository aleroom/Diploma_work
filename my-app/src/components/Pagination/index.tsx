import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setCurrentPage} from "../../appSlices";
// import {setPagination} from "../../appSlices";

const Pagination = () => {
    const dispatch = useAppDispatch()
    const pagination = useAppSelector(state => state.rootReducer.postsReducer.pagination)
    const posts = useAppSelector(state => state.rootReducer.postsReducer.posts)
    const searchedPosts = useAppSelector(state => state.rootReducer.postsReducer.searchedPosts)


    return (
        <div>
            {pagination.map((item, index) => {
                return <button onClick={()=>dispatch(setCurrentPage(item))}>{item}</button>
            })}
        </div>
    )
};

export default Pagination;