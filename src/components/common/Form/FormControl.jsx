import React, { useContext } from "react";
import FormContext from "./FormContext";
import styles from "./Form.module.scss";
import classnNames from "classnames";

export default function FormControl({
  id,
  size,
  readOnly,
  type,
  className,
  invalid = false,
  as: Component = "input",
  ...props
}) {
  const prefix = "form-control";
  const { controlId } = useContext(FormContext);
  return (
    <Component
      id={controlId}
      type={type}
      {...props}
      className={classnNames(
        className,
        size && styles[`${prefix}-${size}`],
        invalid && styles[`${prefix}-invalid`],
        styles[prefix]
      )}
    />
  );
}
