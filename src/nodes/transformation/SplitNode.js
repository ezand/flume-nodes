const splitNode = {
  type: "split",
  label: "Split",
  inputs: (ports) => [
    ports.separator(),
    ports.string({
      name: "value",
      label: "Value",
    }),
  ],
  outputs: (ports) => [
    ports.array({
      name: "array",
      label: "Array",
    }),
  ],
};

export default splitNode;
