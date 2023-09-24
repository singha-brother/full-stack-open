import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import Login from "./components/Login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  const logoutHandler = () => {
    setUser(null);
    window.localStorage.removeItem("loggedUser");
  };

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserData = window.localStorage.getItem("loggedUser");
    if (loggedUserData) {
      const user = JSON.parse(loggedUserData);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  return (
    <div>
      {user === null ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <h2>blogs</h2>
          <p>{user.username} logging in</p>
          <button onClick={logoutHandler}>Logout</button>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
