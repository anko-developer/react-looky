import React from "react";
import classnNames from "classnames";
import styles from "./Form.module.scss";

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
      className={classnNames(
        className,
        size && styles[`${prefix}-${size}`],
        styles[prefix]
      )}
      id={id}
    >
      {children}
    </select>
  );
}
