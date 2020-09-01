import React, { useState } from 'react';



const DeleteData = (index) => {
    alert(index);
}


const MarkClick = () => {

    console.log("Change!");

}


const markstyle = "underline";
let GetNowTime;

const TodoList = (props) => {
    // console.log(props)
    const date =new Date();
    const [done, setDone] = useState(false);
    const [showbtn,setShow] =useState(false);
    
    const handleDone = (item) => {
        // props.handleChange(props.item, "M")
        // console.log("Mark Ckick!", props.item.id)
        // props.item.Component = true;
        
        setDone(!done);
       GetNowTime=date.toLocaleString("en-US");
       props.item.completed=!done;

    }

    const handleDelete=()=>
    {
       props.handleChange(props.item, "D")
    }
    
    const handleHover=()=>{
        setShow(!showbtn);
    }   

    return (
        // {(props.finished && props.item.completed)? :null }
        <div className="List2" value="showbtn" onMouseOver={handleHover}>
            
           
            <p style={{textDecoration: done ? "line-through" : "none" }}>{props.item.text}</p>
            <div style={{display:"flex",alignItems:"center"}}>
                {done ? (
                    <nobr className="mark" style={{textDecoration:"none"}} onClick={handleDone}>Finished :{GetNowTime}</nobr>
                ) : (
                <span className="done">
                    <nobr className="mark" onClick={handleDone}>Mark as done</nobr>
                    <nobr className="mark" onClick={handleDelete}>Delete</nobr>
                </span>
                )}
            </div>

            {/* <div style={{display:"flex",alignItems:"center"}}>
                {done? 
                <nobr className="mark" style={{textDecoration:"none"}} onClick={handleDone}>Finished :{GetNowTime}</nobr>
                :
                <nobr className="done mark" onClick={handleDone}>Mark as done</nobr>
                }
                {done? "":<nobr className="mark" onClick={handleDelete}>Delete</nobr>}
            </div> */}

        </div>
    )
};






export default TodoList
