const splitNode = {
  type: "split",
  label: "Split",
  inputs: (ports: any) => [
    ports.separator(),
    ports.string({
      name: "value",
      label: "Value",
    }),
  ],
  outputs: (ports: any) => [
    ports.array({
      name: "array",
      label: "Array",
    }),
  ],
};

export default splitNode;
