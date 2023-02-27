import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [selectedResource, setSelectedResource] = useState("posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${selectedResource}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [selectedResource]);

  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={() => setSelectedResource("posts")}>posts</button>
      <button onClick={() => setSelectedResource("users")}>users</button>
      <button onClick={() => setSelectedResource("comments")}>comments</button>
      <p>{`${selectedResource} => ${data.length}`}</p>
    </div>
  );
};
