import React, { Component } from 'react';
import './App.css';
import ItemForm from './ItemForm'
import Item from './Item'


class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Orange', price: .99, complete: true },
      { id: 2, name: 'Banana', price: .49, complete: false }, 
      { id: 3, name: 'Apple', price: .75, complete: false}
    ]
  }

  getUniqId = () => {
    return Math.floor((Math.random()) * 10000)
  }

  addItems = ( name, price ) => {
    const { items } = this.state;
    const item = { name, price, id: this.getUniqId() , complete: false }
    
    this.setState({ items: [item, ...items] });
  }

  renderItems = () => {
    const { items, } = this.state;
    return items.map( item => {
      return <Item key={item.id} {...item} itemClick={this.itemClick} />
    })
  }

  itemClick = (id) => {
    const { items } = this.state;

    this.setState({
      items: items.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete }
        }
        return item 
      })
    })
  }

  render() {
    return (
      <div>
        <ItemForm addItems={this.addItems} />
        <ul>
          { this.renderItems() }
        </ul>
      </div>
    )
  }
}

export default App;
