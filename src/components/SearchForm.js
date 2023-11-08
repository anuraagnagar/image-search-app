import React from "react";

function SearchForm({ query, inputChange, formSubmit }) {
  return (
    <form className="search-form" onSubmit={formSubmit}>
      <input
        type="text"
        value={query}
        onChange={inputChange}
        maxLength={80}
        placeholder="Search images"
        autoFocus
        required
      />
      <button type="submit">
        <i className="fa-solid fa-search"></i>
      </button>
    </form>
  );
}

export default SearchForm;
