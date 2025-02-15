import { useSelector, useDispatch } from "react-redux";
import { getPostThunk } from "../../store/store";
import { Link } from "react-router";

export default ({ }) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const query = useSelector(state => state.search);
    return (
        <>
            <h1>Middleware Test</h1>
            <button type="button" onClick={() => dispatch(getPostThunk())}>Get posts</button>
            <br></br>
            <input type="text" placeholder="searchPosts" onChange={(e) => dispatch({ type: "searchPosts", payload: e.target.value })} />
            <ul>{posts.filter(post => post.title.includes(query)).map(post => 
                <li key={post.id}>
                    <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                </li>
            )}</ul>
        </>
    );
}