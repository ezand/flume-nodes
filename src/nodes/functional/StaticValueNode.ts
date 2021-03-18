import { Controls } from "flume";

const staticValueNode = {
  type: "staticValue",
  label: "Static Value",
  inputs: (_ports: any) => [
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
  outputs: (ports: any) => [
    ports.string({
      name: "value",
      label: "Value",
    }),
  ],
};

export default staticValueNode;
