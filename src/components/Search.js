import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState("");

  const handleonChange = e => setText(e.target.value);

  const handleonSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleonSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={handleonChange}
        />
        <button type="submit" value="Search" className="btn btn-dark btn-block">
          Search <i className="fas fa-search" />
        </button>
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear <i className="fas fa-trash" />
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
