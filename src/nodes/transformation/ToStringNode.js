const toStringNode = {
  type: "coerceString",
  label: "To String",
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

export default toStringNode;
