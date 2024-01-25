import React, { useContext } from "react";
import FormContext from "./FormContext";
import styles from "./Form.module.scss";
import classnames from "classnames";

export default function FormControl({
  id,
  size,
  readOnly,
  type,
  invalid = false,
  as: Component = "input",
  ...props
}) {
  const { controlId } = useContext(FormContext);
  return (
    <Component
      id={controlId}
      type={type}
      {...props}
      className={classnames(
        size && styles[size],
        invalid && styles["is-invalid"],
        styles["form-control"]
      )}
    />
  );
}
