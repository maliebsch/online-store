import React, { Component } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      size: '',
      sort: '',
      cartItems: []
    };
    this.changeSort = this.changeSort.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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

  addToCart(product) {
    const cartItems = this.state.cartItems.slice();
    let isProductInCart = false;

    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        isProductInCart = true;
      }
    });

    if (!isProductInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  }

  removeFromCart(product) {
    let cartItems = this.state.cartItems.slice();

    if (product.count === 1) {
      cartItems = cartItems.filter((item) => item.id !== product.id);
    } else {
      product.count = product.count - 1;
    }

    this.setState({ cartItems });
  }

  render() {
    const { filteredProducts, size, sort, cartItems } = this.state;
    return (
      <div className="App">
        <Header />
        <div className={styles.main}>
          <div className={styles.mainProducts}>
            <Filter
              size={size}
              sort={sort}
              changeSize={this.changeSize}
              changeSort={this.changeSort}
              numberOfProducts={filteredProducts.length}
            />
            <Products products={filteredProducts} addToCart={this.addToCart} />
          </div>
          <Cart itemsInCart={cartItems} removeFromCart={this.removeFromCart} />
        </div>
      </div>
    );
  }
}

export default App;
