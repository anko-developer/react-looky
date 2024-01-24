import React, { useMemo } from "react";
import FormContext from "./FormContext";

export default function FormGroup({
  children,
  controlId,
  as: Component = "div",
}) {
  const context = useMemo(() => ({ controlId }), [controlId]);
  return (
    <FormContext.Provider value={context}>
      <Component>{children}</Component>
    </FormContext.Provider>
  );
}
