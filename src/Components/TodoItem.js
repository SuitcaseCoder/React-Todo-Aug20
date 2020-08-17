import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    //if completed is true, then strike through, else no strike through
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    //destructure the props being passed in to make it easier to call inside of our return statement

    // we need the id of the todo item being clicked to know which one is going to be crossed out within the 'onChange' function in the app.js file, so we deconstructure and pass in those things from each individual item up to the next component via props
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

//proptypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff4242",
  color: "#fff",
  borders: "none",
  padding: "8px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  fontWeight: "bold",
};

export default TodoItem;
