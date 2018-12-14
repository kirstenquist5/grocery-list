import React from 'react';

class ItemForm extends React.Component {
  state = { name: '', price: ''}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.addItems(this.state.name, this.state.price);
    this.setState({ name: '', price: '' })
  }

  render() {
    const { name, price } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name}
          name="name"
          onChange={this.handleChange}
          required
          placeholder="Add an Item"
        />
        <input 
          value={price}
          name="price"
          onChange={this.handleChange}
          required
          placeholder="Add a Price"
        />
        <button type='submit'>submit</button>
      </form>
    )
  }
}
 
export default ItemForm;