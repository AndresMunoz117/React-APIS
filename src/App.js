import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import CreatePost from "./pages/CreatePost";
import EditUser from "./pages/EditUser";
import UserPost from "./pages/UserPost";
import CreateComment from "./pages/CreateComment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/register" element={<CreateUser /> } />
        <Route path="/users/:ids" element={<EditUser />} />
        <Route path="/posts/create" element={<CreatePost /> } />
        <Route path="/users/:ids/posts" element={<UserPost />} />
        <Route path="/posts/:ids/comments/create" element={<CreateComment /> } />
      </Routes>
    </Router>
  );
}

export default App;
