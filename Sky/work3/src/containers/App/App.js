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
  const [bugDataCheck, setBugDataCheck] = useState([]);
  const [newDataCheck, setNewDataCheck] = useState([]);

  const bugDefaultData = () => {
    const textData = [];
    for (let index = 23; index < 53; index += 1) {
      textData.push(`S1820452D3${index}`);
    }
    setBugData(textData);
  };

  useEffect(() => {
    bugDefaultData();
  }, []);

  // useEffect(() => {
  //   console.log(bugDataCheck);
  // }, [bugDataCheck]);

  const getBugData = () => bugData.filter((item) => {
    if (item.match(searchValue) != null) {
      return true;
    }
    return false;
  });

  const bugDataMap = useMemo(() => getBugData(), [bugData, searchValue]);

  const SnofbugText = `SN of Bug ID 68891(#${bugDataMap.length})`;

  const SnofnewText = `SN of New groug(#${newData.length})`;

  const handleOnChick = (value) => {

  };

  const handleBugOnChange = (check, value) => {
    if (!check) {
      setBugDataCheck([...bugDataCheck, value]);
    } else {
      setBugDataCheck(bugDataCheck.filter((item) => item !== value));
    }
  };

  const handleNewOnChange = (check, value) => {
    if (!check) {
      setNewDataCheck([...newDataCheck, value]);
    } else {
      setNewDataCheck(newDataCheck.filter((item) => item !== value));
    }
  };

  const handleTtbutton = () => {
    setBugData([...bugData, ...newDataCheck]);
    let map = newData;
    newDataCheck.forEach((value) => {
      map = map.filter((item) => item !== value);
    });
    setNewData(map);
    setNewDataCheck([]);
  };

  const handleTbbutton = () => {
    setNewData([...newData, ...bugDataCheck]);
    let map = bugData;
    bugDataCheck.forEach((value) => {
      map = map.filter((item) => item !== value);
    });
    setBugData(map);
    setBugDataCheck([]);
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
        {bugDataMap.map((item) => <Checkbox key={item} value={item} name={item} onChange={handleBugOnChange}>{item}</Checkbox>)}
      </Box>
      <Div placement="center">
        <Ttbutton onClick={handleTtbutton} />
        <Tbbutton onClick={handleTbbutton} />
      </Div>
      <Div>
        <Snofbug placeholder={SnofnewText} height="34px" />
      </Div>
      <Box height="100px">
        {newData.map((item) => <Checkbox key={item} value={item} name={item} onChange={handleNewOnChange}>{item}</Checkbox>)}
      </Box>
      <Div placement="right">
        <Button onClick={handleOnChick}>ok</Button>
      </Div>
    </Body>
  );
};

export default App;
