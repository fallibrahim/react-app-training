import React, {useState, useEffect} from 'react';

function Api() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      }
      fetchData();
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  return (
    <div>
        <h1>Posts</h1>
        <ul>
        {posts.map((post) => (
        <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
       ))}
        </ul>
    </div>
  );
}
export default Api;