import './App.css';
import MiddleWareTest from './Components/MiddleWareTest/MiddleWareTest';
import PostPage from './Components/PostPage/PostPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/middlewareredux" element={<MiddleWareTest />} />
            <Route path="/" element={<MiddleWareTest />} />
            <Route path="/post/:postId" element={<PostPage />} />
        </Routes>
    );
}

export default App;
