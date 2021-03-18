const toIntegerNode = {
  type: "coerceInteger",
  label: "To Integer",
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

export default toIntegerNode;
