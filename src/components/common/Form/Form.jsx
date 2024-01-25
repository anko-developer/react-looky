import React from "react";
import FormLabel from "./FormLabel";
import FormGroup from "./FormGroup";
import FormControl from "./FormControl";

function Form({ children }) {
  return <form>{children}</form>;
}

export default Object.assign(Form, {
  Label: FormLabel,
  Group: FormGroup,
  Control: FormControl,
});
