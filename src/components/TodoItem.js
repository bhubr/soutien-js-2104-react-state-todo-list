import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  // const functName = (props) => (
  //     props.task.map( index => index.kklchose)
  // )

  return (
    <li
      className={props.done ? "checked" : ""}
      onClick={() => props.onToggle(props.title)}
    >
      {props.title}
    </li>
  )
}

export default TodoItem;
// Le map on le fera dans TodoList !!! C'est beaucoup plus simple je pense
// ok bon je me suis perdu ^^ je vous laisse continuer
// Je l'ai fais
// ok!
