import React, { useMemo } from "react";
import FormContext from "./FormContext";

export default function FormGroup({
  children,
  controlId,
  className,
  as: Component = "div",
  ...props
}) {
  const context = useMemo(() => ({ controlId }), [controlId]);
  return (
    <FormContext.Provider value={context}>
      <Component className={className} {...props}>
        {children}
      </Component>
    </FormContext.Provider>
  );
}
