import React from "react";
import classnNames from "classnames";
import "./Form.scss";

export default function FormSelect({
  children,
  size,
  className,
  id,
  invalid = false,
  ...props
}) {
  const prefix = "form-select";
  return (
    <select
      className={classnNames(className, size && `${prefix}-${size}`, prefix)}
      id={id}
    >
      {children}
    </select>
  );
}
