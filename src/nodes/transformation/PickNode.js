import { Controls } from "flume";

const pickNode = {
  type: "pick",
  label: "Pick",
  inputs: (ports) => [
    {
      type: "splitIndex",
      name: "index",
      label: "Index",
      hidePort: true,
      controls: [
        Controls.number({
          name: "index",
          label: "Index",
        }),
      ],
    },
    ports.array({
      name: "input",
      label: "Array",
    }),
  ],
  outputs: (ports) => [
    ports.generic({
      name: "value",
      label: "Value",
    }),
  ],
};

export default pickNode;
