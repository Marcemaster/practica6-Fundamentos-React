import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const options = [
  { value: "lifestyle", label: "lifestyle" },
  { value: "mobile", label: "mobile" },
  { value: "motor", label: "motor" },
  { value: "work", label: "work" },
];

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
    />
  );
}
