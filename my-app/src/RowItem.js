import React from "react";

function RowItem({ row, rowNum, isChecked, onCheckrow, onEdit }) {
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
          onChange={() => onEdit(rowNum, "checked", !isChecked)}
        />
      </td>
      <td>
        <input
          type="text"
          name="shopNm"
          onChange={handleInputChange}
          value={row.shopNm}
        />
      </td>
      <td>
        <input
          type="text"
          name="shopTel"
          onChange={handleInputChange}
          value={row.shopTel}
        />
      </td>
      <td>
        <input
          type="text"
          name="shopAddr"
          onChange={handleInputChange}
          value={row.shopAddr}
        />
      </td>
      <td>
        <input
          type="text"
          name="shopBrn"
          onChange={handleInputChange}
          value={row.shopBrn}
        />
      </td>
    </tr>
  );
}

export default RowItem;
