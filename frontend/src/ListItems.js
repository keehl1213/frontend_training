import React, { useState } from 'react';

const ListItems = (props) => {
    const [id, title, doneTime] = props;
    return (
        <row>
            {title}
        </row>
    )
}

export default ListItems;
