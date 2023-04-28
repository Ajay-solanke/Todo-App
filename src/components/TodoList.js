import React from "react";

function TodoList(Props) {
  return (
    <li className="list-item">
      {Props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={(e) => {
            Props.deleteItem(Props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default TodoList;
