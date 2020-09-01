import React from 'react';
import PropTypes from 'prop-types';

// let GetNowTime;

// const TodoItem = (props) => {
const TodoItem = ({ item, onDelete, onDone }) => {
    // const date = new Date();
    // const [done, setDone] = useState(false);

    // const handleDone = (item) => {
    //     setDone(!done);
    //     GetNowTime = date.toLocaleString("en-US");
    //     item.completed = !done;
    // }
    const pad = (n, width = 2, z) => {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    const showTime = (time) => {
        return `${time.getFullYear()}/${pad(time.getMonth() + 1)}/${pad(time.getDate())} ${pad(time.getHours())}:${pad(time.getMinutes())}`
    }

    return (
        <div className="List2" value="showbtn">
            <p style={{ textDecoration: item.completed ? "line-through" : "none" }}>{item.text}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
                {item.completed && <nobr className="done mark" style={{ textDecoration: "none" }}>Finished :{item.updateTime && showTime(item.updateTime)}</nobr>}
                <span className="notdone">
                    <nobr className="mark" onClick={() => onDone(item)}>Mark as done</nobr>
                    <nobr className="mark" onClick={() => onDelete(item)}>Delete</nobr>
                </span>
            </div>
        </div>
    )
};

TodoItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        completed: PropTypes.bool,
        updateTime: PropTypes.shape({}),
    }).isRequired,
    onDelete: PropTypes.func,
    onDone: PropTypes.func,
}

TodoItem.defultProps = {
    onDelete: () => null,
    onDone: () => null,
}

export default TodoItem
