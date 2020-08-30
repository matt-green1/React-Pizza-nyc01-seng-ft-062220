import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzaArray : [],
    pizzaToEdit : {
      id: "",
      topping: "",
      size: "",
      vegetarian: false
    }
  }


  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
      .then(response => response.json())
      .then(pizzaData => this.setState({...this.state, pizzaArray: pizzaData}))
  }


  fillEditForm = (pizzaObj) => {
    this.setState({pizzaToEdit: pizzaObj})
  }

  
  toppingChangeHelper = (e) => {  
    this.setState({ pizzaToEdit: {...this.state.pizzaToEdit, topping: e.target.value}})
  }


  sizeChangeHelper = (e) => {
    //console.log(e.target.value)
    this.setState({pizzaToEdit: {...this.state.pizzaToEdit, size: e.target.value} })
  }
//alt way to solve changeHelper more dry way:     this.setState({...this.state, pizzaToEdit: {...this.state.pizzaToEdit, [e.target.name]:e.target.value}})

  vegetarianChangeHelper = (e) => {
    let newVegetarianBoolean = e.target.value === "Not Vegetarian" ? false : true  
    this.setState({pizzaToEdit: {...this.state.pizzaToEdit, vegetarian: newVegetarianBoolean}})
  }

  clickHandler = (e) => {
      e.preventDefault()
      let pizzaObj = this.state.pizzaToEdit
      let objId = this.state.pizzaToEdit.id
      let configObject = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          topping: pizzaObj.topping,
          size: pizzaObj.size,
          vegetarian: pizzaObj.vegetarian
        
        })
      }
      fetch(`http://localhost:3000/pizzas/${objId}`, configObject)
        .then(response => response.json())
        .then(() => {
          fetch("http://localhost:3000/pizzas")
            .then(response => response.json())
            .then(pizzaData => this.setState({...this.state, pizzaArray: pizzaData}))

        }         
        )
  }


  render() {
  
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaToEdit={this.state.pizzaToEdit} clickHandler={this.clickHandler} toppingChangeHelper={this.toppingChangeHelper} sizeChangeHelper={this.sizeChangeHelper} vegetarianChangeHelper={this.vegetarianChangeHelper} />
        <PizzaList pizzaArray={this.state.pizzaArray} fillEditForm={this.fillEditForm}/>
      </Fragment>
    );
  }
}

export default App;
