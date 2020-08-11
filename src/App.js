import React, { Component } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      size: '',
      sort: ''
    };
    this.changeSort = this.changeSort.bind(this);
    this.changeSize = this.changeSize.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:8000/products')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          products: data,
          filteredProducts: data
        });
      });
  }

  changeSize(e) {
    this.setState({ size: e.target.value });
    this.listProducts();
  }

  changeSort(e) {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }

  listProducts() {
    this.setState((state) => {
      if (state.sort !== '') {
        state.products.sort((a, b) =>
          state.sort === 'lowest'
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        //default: sort by product id
        state.products.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      // apply filter by size
      if (state.size !== '') {
        return {
          filteredProducts: state.products.filter(
            (product) => product.sizes.indexOf(state.size) >= 0
          )
        };
      }
    });
  }
  render() {
    const { filteredProducts, size, sort } = this.state;
    return (
      <div className="App">
        <Header />
        <Filter
          size={size}
          sort={sort}
          changeSize={this.changeSize}
          changeSort={this.changeSort}
          numberOfProducts={filteredProducts.length}
        />
        <Products products={filteredProducts} />
      </div>
    );
  }
}

export default App;
