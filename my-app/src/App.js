import "./App.css";
import React, { useState, useRef } from "react";
import RowItem from "./RowItem";

function App() {
  const count = useRef(0);
  const [list, setList] = useState([]);

  const handleAddRow = (e) => {
    e.preventDefault();
    const newRow = {
      idx: count.current,
      shopNm: "",
      shopTel: "",
      shopAddr: "",
      shopBrn: "",
      checked: false,
    };
    count.current = count.current + 1;
    setList([...list, newRow]);
  };

  const handleListEdit = (index, name, value) => {
    setList([
      ...list.slice(0, index),
      { ...list[index], [name]: value },
      ...list.slice(index + 1),
    ]);
  };

  const handleDelRow = (e) => {
    e.preventDefault();
    setList(list.filter((data) => !data.checked));
  };

  return (
    <div className="App">
      <h1>항목 등록</h1>
      <button buttonMarkup={true} onClick={handleAddRow}>
        추가
      </button>
      <button buttonMarkup={true} onClick={handleDelRow}>
        삭제
      </button>
      {list.map((row, i) => (
        <RowItem
          key={row.idx}
          row={row}
          rowNum={i}
          isChecked={row.checked}
          onEdit={handleListEdit}
        />
      ))}
    </div>
  );
}

export default App;
