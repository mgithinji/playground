import * as api from '../api';

// action creators -- actions that return actions
export const getPosts = () => async (dispatch) => { // this syntax is used because of this async operation
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: []});
    } catch (error) {
        console.log(error.message);
    }
}