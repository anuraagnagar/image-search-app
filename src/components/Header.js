import React, { useState } from "react";
import ImageList from "./ImageList";
import SearchForm from "./SearchForm";

function Header({ submit, images }) {
  const [query, setQuery] = useState("");

  const searchFormSubmit = (e) => {
    e.preventDefault();
    submit(query);
    setQuery("");
  };

  const inputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <header className="main-header">
        <div className="search-field-content">
          <SearchForm
            query={query}
            inputChange={inputChange}
            formSubmit={searchFormSubmit}
          />
        </div>
      </header>
      <hr />
      <ImageList images={images} />
    </>
  );
}

export default Header;
