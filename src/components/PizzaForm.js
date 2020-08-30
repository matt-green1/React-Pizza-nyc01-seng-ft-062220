import React from "react"

class PizzaForm extends React.Component {

  render() {
      //console.log(this.props.pizzaToEdit.vegetarian)
      //console.log("pizza veget to render:", this.props.pizzaToEdit.vegetarian)
      return(
          <div className="form-row">
            <div className="col-5">
                <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" onChange={this.props.toppingChangeHelper} value={this.props.pizzaToEdit.topping} />
            </div>
            <div className="col">
              <select name="size" onChange={this.props.sizeChangeHelper} value={this.props.pizzaToEdit.size} className="form-control">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div  className="col">
              <div className="form-check">
                <input onChange={this.props.vegetarianChangeHelper} className="form-check-input" type="radio" value="Vegetarian" checked={this.props.pizzaToEdit.vegetarian === true ? true : false}/>
                <label className="form-check-label">
                  Vegetarian
                </label>
              </div>
              <div className="form-check">
                <input onChange={this.props.vegetarianChangeHelper} className="form-check-input" type="radio" value="Not Vegetarian" checked={this.props.pizzaToEdit.vegetarian === false ? true : false}/>
                <label className="form-check-label">
                  Not Vegetarian
                </label>
              </div>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-success" onClick={this.props.clickHandler}>Submit</button>
            </div>
          </div>

      )
    }
}

export default PizzaForm


