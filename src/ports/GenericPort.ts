import { Colors } from "flume";

const genericPort = {
  type: "generic",
  name: "generic",
  color: Colors.blue,
  acceptTypes: ["generic", "string", "number", "boolean", "array"],
};

export default genericPort;
