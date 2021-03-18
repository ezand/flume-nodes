const forEachNode = {
  type: "forEach",
  label: "For Each",
  inputs: (ports: any) => [
    ports.array({
      name: "items",
      label: "Items",
    }),
  ],
  outputs: (ports: any) => [
    ports.generic({
      name: "item",
      label: "Item",
    }),
  ],
};

export default forEachNode;
