import { Controls } from "flume";

const staticValueNode = {
  type: "staticValue",
  label: "Static Value",
  inputs: (ports) => [
    {
      type: "staticValue",
      name: "staticValue",
      label: "Static Value",
      hidePort: true,
      controls: [
        Controls.text({
          name: "string",
          label: "Text",
        }),
      ],
    },
  ],
  outputs: (ports) => [
    ports.string({
      name: "value",
      label: "Value",
    }),
  ],
};

export default staticValueNode;
