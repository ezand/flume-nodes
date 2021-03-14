const toDoubleNode = {
  type: "coerceDouble",
  label: "To Double",
  inputs: (ports) => [
    ports.generic({
      name: "input",
      label: "Input",
    }),
  ],
  outputs: (ports) => [
    ports.string({
      name: "output",
      label: "Output",
    }),
  ],
};

export default toDoubleNode;
