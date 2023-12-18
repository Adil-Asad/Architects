import { Component } from "react";
import axios from "axios";

class AxiosClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      this.setState({ data: res.data });
      console.log(res.data);
    });
  }

  render() {
    return (
      <>
        <h1>Cards</h1>
        {this.state.data.map((post) => {
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
}

export default AxiosClass;
