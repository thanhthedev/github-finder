import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  handleonChange = e => this.setState({ [e.target.name]: e.target.value });

  handleonSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.handleonSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.handleonChange}
          />
          <button
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          >
            Search <i class="fas fa-search" />
          </button>
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear <i class="fas fa-trash" />
          </button>
        )}
      </div>
    );
  }
}

export default Search;
