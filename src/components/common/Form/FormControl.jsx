import React, { useContext } from "react";
import FormContext from "./FormContext";
import "./Form.scss";
import classNames from "classnames";

export default function FormControl({
  id,
  size,
  readOnly,
  type,
  className,
  valid = false,
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
      readOnly={readOnly}
      {...props}
      className={classNames(
        className,
        size && `${prefix}-${size}`,
        valid && `${prefix}-valid`,
        invalid && `${prefix}-invalid`,
        prefix
      )}
    />
  );
}
