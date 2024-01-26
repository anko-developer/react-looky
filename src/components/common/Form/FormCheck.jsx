import React, {useContext} from "react";
import FormContext from "./FormContext";
import classnNames from "classnames";

export default function FormCheck({
  className,
  id,
  type,
  as: Component,
  ...props
}) {
  return (
    <FormContext.Provider value={}>
      <Component className={classnNames(className)} {...props} />;
    </FormContext.Provider>
  )
}
