import { Route, Routes } from "react-router-dom";
import { Post } from "../pages/Post";
import { ListPosts } from "../pages/ListPosts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPosts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
