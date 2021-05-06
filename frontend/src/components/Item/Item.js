import React, { useState } from 'react';

const Item = () => {
  const [dataList, setDataList] = useState([0]);

  return (
    <>
      {
        dataList.map((d) => (<div data-testid="test-item" key={d}>{d}</div>))
      }
      <button type="button" onClick={() => setDataList([...dataList, dataList.length])}>add</button>
    </>
  );
};

export default Item;
