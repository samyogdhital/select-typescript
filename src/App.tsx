import React from "react";
import { Select } from "./Select";

function App() {
  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
    { label: "Sixth", value: 6 },
    { label: "Seventh", value: 7 },
  ];
  const [value, setValue] = React.useState<typeof options[0] | undefined>(
    options[0]
  );
  return (
    <h1>
      <Select
        options={options}
        value={value}
        onChange={(option) => setValue(option)}
      />
    </h1>
  );
}

export default App;
