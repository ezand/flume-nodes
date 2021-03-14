const toIntegerNode = {
  type: "coerceInteger",
  label: "To Integer",
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

export default toIntegerNode;
