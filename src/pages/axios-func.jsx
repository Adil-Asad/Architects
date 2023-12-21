import axios from "axios";
import { useEffect, useState } from "react";

let url = "https://jsonplaceholder.typicode.com/todos";

function AxiosFunc() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <h1>Cards</h1>
      {data.map((post) => {
        const { userId, id, title } = post;
        return (
          <div key={id}>
            <h3>User Card # {id}</h3>
            <h3>User Group # {userId}</h3>
            <h3>User Post # {title}</h3>
            <br />
          </div>
        );
      })}
    </>
  );
}

export default AxiosFunc;
