import "./App.css";
import React, { useState } from "react";
import RowItem from "./RowItem";

function App() {
  const [list, setList] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  const handleAddRow = (e) => {
    e.preventDefault();
    const newRow = {
      shopNm: "",
      shopTel: "",
      shopAddr: "",
      shopBrn: "",
    };
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
    setList(list.filter((data, i) => !isChecked[i]));
    setIsChecked([]);
  };

  const handleCheckRow = (e) => {
    const index = parseInt(e.target.name);
    isChecked[index] = !isChecked[index];
    setIsChecked([...isChecked]);
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
          key={i}
          rowNum={i}
          isChecked={isChecked[i]}
          onCheckRow={handleCheckRow}
          onEdit={handleListEdit}
        />
      ))}
    </div>
  );
}

export default App;
