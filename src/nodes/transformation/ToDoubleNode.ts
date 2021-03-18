const toDoubleNode = {
  type: "coerceDouble",
  label: "To Double",
  inputs: (ports: any) => [
    ports.generic({
      name: "input",
      label: "Input",
    }),
  ],
  outputs: (ports: any) => [
    ports.number({
      name: "output",
      label: "Output",
    }),
  ],
};

export default toDoubleNode;
