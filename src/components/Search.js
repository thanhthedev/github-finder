import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleonChange = e => setText(e.target.value);

  const handleonSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.handlesetAlert("Enter something", "light");
    } else {
      githubContext.handlesearchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.handleclearUsers}
        >
          Clear <i className="fas fa-trash" />
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
