import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item

  addCartItem = product => {
    const {cartList} = this.state
    const existingProductIndex = cartList.findIndex(
      item => item.id === product.id,
    )

    if (existingProductIndex >= 0) {
      // Product exists in the cart, update quantity
      const updatedCartList = cartList.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
          }
        }
        return item
      })
      this.setState({cartList: updatedCartList})
    } else {
      // Product does not exist in the cart, add new product with specified quantity
      const newProduct = {...product}
      this.setState({cartList: [...cartList, newProduct]})
    }
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    const updatedIncreaseCartItem = cartList.map(item => {
      if (item.id === id) {
        return {...item, quantity: item.quantity + 1}
      }
      return item
    })
    this.setState({cartList: updatedIncreaseCartItem})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state

    const updatedDecreaseCartItem = cartList
      .map(item => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return {...item, quantity: item.quantity - 1}
          }
          return null
        }
        return item
      })
      .filter(item => item !== null)

    this.setState({cartList: updatedDecreaseCartItem})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedRemoveCartItem = cartList.filter(item => item.id !== id)
    this.setState({cartList: updatedRemoveCartItem})
  }

  removeAllCartItems = id => {
    const {cartList} = this.state
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
