import React, { useState, useEffect, useMemo } from "react";
import Box from "@/components/Box/Box";
import Input from "@/components/InputDiv/InputDiv";
import Snofbug from "@/components/Snofbug/Snofbug";
import Checkbox from "@/components/Checkbox/Checkbox";

import search from "@/static/images/icon_search.png";
import unnamed from "@/static/images/unnamed.png";
import {
  Body,
  Div,
  Button,
  Ttbutton,
  Tbbutton,
  TitleText,
  Icon
} from './style';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [originalData, setoriginalData] = useState([]);
  const [bugData, setBugData] = useState([]);
  const [newData, setNewData] = useState([]);

  const SnofbugText = `SN of Bug ID 68891(#${bugData.length})`;
  const SnofnewText = `SN of New groug(#${newData.length})`;

  const handleOnChick = () => {

  };

  const bugDefaultData = () => {
    const textData = [];
    for (let index = 23; index < 53; index += 1) {
      textData.push({ value: `S1820452D3${index}`, isCheck: false, isTop: true });
    }
    setoriginalData(textData);
    setBugData(textData);
  };

  useEffect(() => {
    bugDefaultData();
  }, []);

  const handleOnChangeMap = () => {
    const newTopData = originalData.filter((v) => (v.value.match(searchValue) != null || searchValue === '') && v.isTop);
    const newBottonData = originalData.filter((v) => !v.isTop);
    setBugData(newTopData);
    setNewData(newBottonData);
  };

  useEffect(() => {
    handleOnChangeMap();
  }, [originalData, searchValue]);

  const onChange = (value) => {
    originalData.forEach((item) => {
      if (item.value === value) {
        item.isCheck = !item.isCheck;
      }
    });
  };

  const handleTbbutton = () => {
    originalData.forEach((item) => {
      if (item.isCheck && item.isTop) {
        item.isCheck = !item.isCheck;
        item.isTop = !item.isTop;
      }
    });
    handleOnChangeMap();
  };

  const handleTtbutton = () => {
    originalData.forEach((item) => {
      if (item.isCheck && !item.isTop) {
        item.isCheck = !item.isCheck;
        item.isTop = !item.isTop;
      }
    });
    handleOnChangeMap();
  };

  return (
    <Body>
      <TitleText>
        <b>Sorting</b>
      </TitleText>
      <Icon src={unnamed} />
      <Div placement="between">
        <Snofbug placeholder={SnofbugText} height="34px" />
        <Input value={searchValue} onChange={setSearchValue} icon={search} />
      </Div>
      <Box height="150px">
        {bugData.map((item) => <Checkbox key={item.value} data={item} onChange={onChange}>{item.value}</Checkbox>)}
      </Box>
      <Div placement="center">
        <Ttbutton onClick={handleTtbutton} />
        <Tbbutton onClick={handleTbbutton} />
      </Div>
      <Div>
        <Snofbug placeholder={SnofnewText} height="34px" />
      </Div>
      <Box height="100px">
        {newData.map((item) => <Checkbox key={item.value} data={item} onChange={onChange}>{item.value}</Checkbox>)}
      </Box>
      <Div placement="right">
        <Button onClick={handleOnChick}>ok</Button>
      </Div>
    </Body>
  );
};

export default App;
