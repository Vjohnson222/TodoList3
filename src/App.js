import React from 'react';


let todoList =[
  {
   id: 1,
    title: "Call your Mother",
   },
  {
   id: 2,
    title: "Water the plants",
   },
  {
     id: 3,
     title: "Find a Loft",
   },
   ];

   const newTodoList = () => {
    return (
      <ul>
        {todoList.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
     

    );
 
};
function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo list</h1>
      <ul style={{ listStyle: 'none' }}>
			<li>Apple</li>
			<li>Orange</li>
			<li>Guava</li>
      	<li>Guava</li>
		</ul>
    <div textContent={newTodoList} />
    </div>
  );
}

export default App;
