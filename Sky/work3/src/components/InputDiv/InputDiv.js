
import React, { useState, useEffect, useRef } from "react";
import * as Style from './style';

const InputDiv = (props) => {
  const {data, placeholder, attributes} = props;
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
      if (inputText.length === 0) {
        inputRef.current.focus();
      }
    }, [inputText]);

    const setID = (array) => {
      const idArr = array.map((item) => item.id);
      if (idArr.length > 0) {
        return Math.max(...idArr) + 1;
      }
      return 1;
    };

    const setData = () => {
      const newID = setID(data);
      const item = { id: newID, text: inputText};
      const row = {...item, ...attributes};
      props.addData(row);
    };

  // 動作
  const input = () => {
    const textTrim = inputText.trim();
    if (textTrim.length > 0) {
      setData();
      setInputText("");
    }
  };

  // 監聽
  const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        input();
      }
    };

    const change = (event) => {
      setInputText(event.target.value);
    };

  return (
    <Style.InputRow>
      <Style.Input
        type="text"
        value={inputText}
        placeholder={placeholder}
        ref={inputRef}
        onChange={change}
        onKeyDown={handleKeyDown}
      />
      <Style.Button
        type="button"
        onClick={setData}>Add
      </Style.Button>
    </Style.InputRow>
  );
};

export default InputDiv;
