import React, { Component } from 'react'
// import Item from './components/Item'

let index = 0

class MoreButton extends Component {
  state = {
    items: []
  }

  componentDidMount () {
    this.addList()
  }

  addList = () => {
    const items = []
    for (let i = 0; i < 10; i++) {
      items.push({
        idx: index * 10 + i,
        name: `hello` + i
      })
    }
    this.setState({ items: [...this.state.items, ...items] })
    index++
  }

  render () {
    // const { items } = this.state
    return (
      <div>
        <button onClick={this.addList}>add items</button>
        {/* <ul>{items && items.map((item, i) => <Item key={i} {...item} />)}</ul> */}
      </div>
    )
  }
}

export default MoreButton
