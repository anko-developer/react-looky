import React from "react";
import Form from "../components/common/Form/Form";

export default function Docs() {
  const options = ["react", "next", "typescript", "remix"];

  return (
    <div className="px-6">
      <Form.Select>
        <option>선택</option>
        {options &&
          options.map((option) => <option value={option}>{option}</option>)}
      </Form.Select>
    </div>
  );
}
