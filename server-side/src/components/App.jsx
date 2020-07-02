import React, { Component } from 'react';

async function fetchAllPosts() {
  try {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    });
    data = data.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    (async () => {
      try {
        const data = await fetchAllPosts();

        this.setState({
          data,
        });
      } catch (err) {
        console.error(err);
      }
    })()
  }

  render() {
    const { data } = this.state;
    
    return (
      <div>
        hi y'all
        {data && JSON.stringify(data)}
      </div>
    );
  }
}
