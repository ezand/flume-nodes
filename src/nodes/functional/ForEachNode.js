const forEachNode = {
  type: "forEach",
  label: "For Each",
  inputs: (ports) => [
    ports.array({
      name: "items",
      label: "Items",
    }),
  ],
  outputs: (ports) => [
    ports.generic({
      name: "item",
      label: "Item",
    }),
  ],
};

export default forEachNode;
