import { Controls } from "flume";

const mapNode = {
  type: "map",
  label: "Map",
  inputs: (ports) => [
    {
      type: "mapDef",
      name: "map",
      label: "Mappings",
      hidePort: true,
      controls: [
        Controls.text({
          name: "mappings",
          label: "Mapings",
        }),
      ],
    },
    ports.generic({
      name: "input",
      label: "Input",
    }),
  ],
  outputs: (ports) => [
    ports.string({
      name: "output",
      label: "Output",
    }),
  ],
};

export default mapNode;
