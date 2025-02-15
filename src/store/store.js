import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { getPostsFunc } from "../services/postsApi";

const middleware1 = (store) => (next) => (action) => {
    if (typeof action === "function") return action(store.dispatch);
    return next(action);
}

export const getPostThunk = () => async (dispatch) => {
    try {
        const data = await getPostsFunc();
        dispatch({ type: "getPosts", payload: data.data });
    }
    catch {
        console.error('Error fetching posts!');
    }
}

const state = {
    posts: [],
    search: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case "getPosts":
            return { ...state, posts: action.payload };
        case "searchPosts":
            return { ...state, search: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer, state, composeWithDevTools(applyMiddleware(middleware1)));

export default store;