import React from "react";
import FormLabel from "./FormLabel";
import FormGroup from "./FormGroup";
import FormControl from "./FormControl";
import FormSelect from "./FormSelect";
import classNames from "classnames";

function Form({ children, className, as: Component = "form" }) {
  return <Component className={classNames(className)}>{children}</Component>;
}

export default Object.assign(Form, {
  Group: FormGroup,
  Label: FormLabel,
  Control: FormControl,
  Select: FormSelect,
});
