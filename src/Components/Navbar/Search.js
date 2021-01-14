import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Search = ({ context, setSearchVisibility, searchVisibility }) => {
  const [keyPress, setKeyPress] = useState(false);
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState([]);
  let history = useHistory();

  useEffect(() => {
    if (context.products.length) {
      setProduct([...context.products]);
    }
  }, [context.products]);

  const keydown = (e) => {
    if (e.keyCode === 40) {
      setKeyPress(true);
      if (index >= 0 && index <= 6) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    } else if (e.keyCode === 38) {
      if (index >= 1 && index <= 7) {
        setIndex(index - 1);
      } else {
        setKeyPress(false);
      }
    } else {
      if (e.keyCode === 13) {
        const item = product.find(
          (elemnt) => elemnt.productName === product[index].productName
        );
        history.push({ pathname: "/dashboard", state: { ...item } });
        setSearchVisibility(false);
      }
    }
  };

  const onkeyup = (e) => {
    if (e.keyCode === 27) {
    }
  };

  return (
    <div className="wrap">
      {!searchVisibility && (
        <div className="category-btn" onClick={() => window.scrollTo(0, 798)}>
          <button>Categories</button>
        </div>
      )}
      <input
        type="search"
        placeholder={!context.item ? "Search for products" : context.item}
        value={keyPress ? product[index].productName : ""}
        onKeyUp={(e) => onkeyup(e)}
        onKeyDown={(e) => keydown(e)}
        onKeyPress={(e) => keyEnter(e)}
        onClick={() => setSearchVisibility(true)}
      />

      <button type="submit" className="searchButton">
        <BiSearchAlt size={22} />
      </button>
    </div>
  );
};
export default Search;
