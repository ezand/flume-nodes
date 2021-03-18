const toStringNode = {
  type: "coerceString",
  label: "To String",
  inputs: (ports: any) => [
    ports.generic({
      name: "input",
      label: "Input",
    }),
  ],
  outputs: (ports: any) => [
    ports.string({
      name: "output",
      label: "Output",
    }),
  ],
};

export default toStringNode;
