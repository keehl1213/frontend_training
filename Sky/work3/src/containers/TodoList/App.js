import React from 'react';

function App() {
  return (
    <Style.Todo>
      <TitleDiv />
        <InputDiv data={todosData} addData={addTodosData} attributes={attributes} placeholder={placeholder} />
      <ItemList />
    </Style.Todo>
  );
}

export default App;
