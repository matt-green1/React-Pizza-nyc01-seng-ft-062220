import React from "react"

class Pizza extends React.Component {
  //console.log(props.fillEditForm)
  
  editFormHelper =() => {
    this.props.fillEditForm(this.props.pizzaObject)
  }
  
  render() {
    return(
      <tr>
        <td>{this.props.pizzaObject.topping}</td>
        <td>{this.props.pizzaObject.size}</td>
        <td>{this.props.pizzaObject.vegetarian === false ? "No" : "Yes"}</td>
        <td><button onClick={this.editFormHelper} type="button" className="btn btn-primary">Edit Pizza</button></td>
      </tr>
    )
  }
}

export default Pizza
