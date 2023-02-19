import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPagination} from "../../appSlices";

const Pagination = (props) => {
    const dispatch = useDispatch()
    const pagination = useSelector(state => state.rootReducer.postsReducer.pagination)
    const posts = useSelector(state => state.rootReducer.postsReducer.posts)
    const searchedPosts = useSelector(state => state.rootReducer.postsReducer.searchedPosts)
    useEffect(() => {
        dispatch(setPagination())
    }, [posts, searchedPosts])
    return (
        <div>
            {pagination.map((item, index) => {
                return <button>{index + 1}</button>
            })}
        </div>
    )
};

export default Pagination;