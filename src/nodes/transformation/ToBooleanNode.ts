const toBooleanNode = {
  type: "coerceBoolean",
  label: "To Boolean",
  inputs: (ports: any) => [
    ports.generic({
      name: "input",
      label: "Input",
    }),
  ],
  outputs: (ports: any) => [
    ports.boolean({
      name: "output",
      label: "Output",
    }),
  ],
};

export default toBooleanNode;
