import React from 'react';
import axios from 'axios';

export default class Data extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    axios.get(`https://api-modda-brian.herokuapp.com/products`)
      .then(res => {
        const cards = res.data;
        this.setState({ cards });
      })
  }

  render() {
    return (
      <ul>
        {this.state.cards.map(card => <li>{card.name}</li>)}
      </ul>
    )
  }
}
