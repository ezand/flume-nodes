const toBooleanNode = {
  type: "coerceBoolean",
  label: "To Boolean",
  inputs: (ports) => [
    ports.generic({
      name: "input",
      label: "Input",
    }),
  ],
  outputs: (ports) => [
    ports.boolean({
      name: "output",
      label: "Output",
    }),
  ],
};

export default toBooleanNode;
