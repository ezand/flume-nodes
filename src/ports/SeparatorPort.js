import { Controls } from "flume";

const separatorPort = {
  type: "separator",
  name: "separator",
  label: "Separator",
  hidePort: true,
  controls: [
    Controls.text({
      name: "string",
      label: "Text",
    }),
  ],
};

export default separatorPort;
