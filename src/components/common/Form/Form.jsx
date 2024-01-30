import React from "react";
import FormLabel from "./FormLabel";
import FormGroup from "./FormGroup";
import FormControl from "./FormControl";
import FormSelect from "./FormSelect";
import classNames from "classnames";

function Form({
  children,
  className,
  validated,
  ref,
  as: Component = "form",
  ...props
}) {
  return (
    <Component
      ref={ref}
      className={classNames(className, validated && "was-validated")}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Object.assign(Form, {
  Group: FormGroup,
  Label: FormLabel,
  Control: FormControl,
  Select: FormSelect,
});
