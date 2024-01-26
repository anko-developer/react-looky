import React, { useContext } from "react";
import FormContext from "./FormContext";

export default function FormLabel({
  children,
  id,
  htmlFor,
  className,
  ...props
}) {
  const { controlId } = useContext(FormContext);
  return (
    <label htmlFor={htmlFor || controlId} className={className} {...props}>
      {children}
    </label>
  );
}
