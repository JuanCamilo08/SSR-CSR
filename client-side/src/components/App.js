import React, { Component } from 'react';

async function fetchAll() {
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
      data: null
    }
  }

  async componentDidMount() {
    try {
      const data = await fetchAll();
      this.setState({
        data
      })
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { data } = this.state;
    
    return (
      <div>
        hi y'all
        {JSON.stringify(data)}
      </div>
    )
  }
}