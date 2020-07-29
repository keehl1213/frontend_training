import React, { useState, useEffect } from "react";
import * as Style from './style';

const Item = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { item, Done, Delete, isShowDone } = props;
  const { id, text, isDone, finishTime } = item;

  useEffect(() => {
    setIsHover(false);
  }, [isShowDone]);

  const onMouseOver = () => {

    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Style.Row color={isHover ? '#e5e5e5' : ''} onMouseOver={onMouseOver} onFocus={() => 0} onMouseLeave={onMouseLeave}>
      {isDone ? <Style.Done>{text}</Style.Done> : <div>{text}</div>}
      <>
        {(isHover && !isDone) && (
          <div>
            <Style.Button type="button" onClick={() => Done(id)}>Mark as done</Style.Button>
            <Style.Button type="button" onClick={() => Delete(id)}>Delete</Style.Button>
          </div>
        )}
        {isDone && (
          <Style.Time>{`完成時間 ${finishTime}`}</Style.Time>
        )}
      </>
    </Style.Row>
  );
};

export default Item;
