import React, { useContext } from "react";
import FormContext from "./FormContext";

export default function FormLabel({ id, children, ...props }) {
  const { controlId } = useContext(FormContext);
  return (
    <label htmlFor={controlId} {...props}>
      {children}
    </label>
  );
}
