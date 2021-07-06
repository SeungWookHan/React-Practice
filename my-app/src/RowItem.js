import React from "react";

function RowItem({ rowNum, isChecked, onCheckrow, onEdit }) {
  const handleAmellCheck = (e) => {
    onCheckrow(e);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    onEdit(rowNum, name, value);
  };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name={rowNum}
          checked={isChecked}
          onChange={onCheckrow}
        />
      </td>
      <td>
        <input type="text" name="shopNm" onChange={handleInputChange} />
      </td>
      <td>
        <input type="text" name="shopTel" onChange={handleInputChange} />
      </td>
      <td>
        <input type="text" name="shopAddr" onChange={handleInputChange} />
      </td>
      <td>
        <input type="text" name="shopBrn" onChange={handleInputChange} />
      </td>
    </tr>
  );
}

export default RowItem;
