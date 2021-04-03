import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function AddKeyword(props) {
  const { keywordList, setKeywordList } = props;
  const [keyword, setKeyword] = useState("");
  console.log(keywordList);

  const addKeyword = (e) => {
    e.preventDefault();
    setKeywordList([...keywordList, keyword]);
    setKeyword("");
  };

  const deleteKeyword = (e, i) => {
    e.preventDefault();
    const newKeywordList = [...keywordList];
    if (i == 0) i = 2;
    console.log(i);
    setKeywordList(newKeywordList.splice(i - 1, 1));
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Keyword"
          aria-label="Search Keyword"
          aria-describedby="basic-addon2"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={addKeyword}>
            Add Keyword
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <ul>
        {keywordList.map((e, i) => {
          return (
            <li key={i}>
              {e} <Button onClick={(e) => deleteKeyword(e, i)}>X</Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
