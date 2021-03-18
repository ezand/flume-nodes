const joinNode = {
  type: "join",
  label: "Join",
  inputs: (ports: any) => [
    ports.separator(),
    ports.string({
      name: "value1",
      label: "Value1",
    }),
    ports.string({
      name: "value2",
      label: "Value2",
    }),
  ],
  outputs: (ports: any) => [
    ports.string({
      name: "joined",
      label: "Joined",
    }),
  ],
};

export default joinNode;
