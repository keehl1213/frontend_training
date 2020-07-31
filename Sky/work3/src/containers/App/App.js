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
  const [bugData, setBugData] = useState([]);
  const [newData, setNewData] = useState([]);

  const bugDefaultData = () => {
    const textData = [];
    for (let index = 23; index < 53; index += 1) {
      textData.push({ value: `S1820452D3${index}`, isCheck: false });
    }
    setBugData(textData);
  };

  useEffect(() => {
    bugDefaultData();
  }, []);

  const handleOnChick = () => {

  };

  // useEffect(() => {
  //   console.log(bugData);
  // }, [bugData]);

  const getBugData = () => bugData.filter((item) => {
    if (item.value.match(searchValue) != null) {
      return true;
    }
    return false;
  });

  const bugDataMap = useMemo(() => getBugData(), [bugData, searchValue]);

  const SnofbugText = `SN of Bug ID 68891(#${bugDataMap.length})`;
  const SnofnewText = `SN of New groug(#${newData.length})`;

  const bugChange = (value) => {
    bugData.forEach((item) => {
      if (item.value === value) {
        item.isCheck = !item.isCheck;
      }
    });
  };

  const newChange = (value) => {
    newData.forEach((item) => {
      if (item.value === value) {
        item.isCheck = !item.isCheck;
      }
    });
  };

  // const handleOnChange = (value) => {
  //   console.log(value);
  // };

  const handleTbbutton = () => {
    const BugMap = bugData.filter((item) => !item.isCheck);
    const newMap = bugData.filter((item) => item.isCheck);
    newMap.forEach((item) => {
      if (item.isCheck) {
        item.isCheck = !item.isCheck;
      }
    });
    setNewData([...newData, ...newMap]);
    setBugData(BugMap);
  };

  const handleTtbutton = () => {
    const BugMap = newData.filter((item) => item.isCheck);
    const newMap = newData.filter((item) => !item.isCheck);
    BugMap.forEach((item) => {
      if (item.isCheck) {
        item.isCheck = !item.isCheck;
      }
    });
    setBugData([...bugData, ...BugMap]);
    setNewData(newMap);
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
        {bugDataMap.map((item) => <Checkbox key={item.value} data={item} onChange={bugChange}>{item.value}</Checkbox>)}
      </Box>
      <Div placement="center">
        <Ttbutton onClick={handleTtbutton} />
        <Tbbutton onClick={handleTbbutton} />
      </Div>
      <Div>
        <Snofbug placeholder={SnofnewText} height="34px" />
      </Div>
      <Box height="100px">
        {newData.map((item) => <Checkbox key={item.value} data={item} onChange={newChange}>{item.value}</Checkbox>)}
      </Box>
      <Div placement="right">
        <Button onClick={handleOnChick}>ok</Button>
      </Div>
    </Body>
  );
};

export default App;
