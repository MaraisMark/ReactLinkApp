import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import AddKeyword from "./AddKeyword";

export default function Searchbar(props) {
  const [keywordList, setKeywordList] = useState([]);

  return (
    <>
      <AddKeyword keywordList={keywordList} setKeywordList={setKeywordList}/>
      <Button>Search</Button>
    </>
  );
}
