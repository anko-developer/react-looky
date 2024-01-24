import React, { useContext } from "react";
import FormContext from "./FormContext";

export default function FormControl({
  id,
  size,
  readOnly,
  type,
  as: Component = "input",
  ...props
}) {
  const { controlId } = useContext(FormContext);
  return <Component id={controlId} type={type} {...props} />;
}
