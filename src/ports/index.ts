import GenericPort from "./GenericPort";
import BooleanPort from "./BooleanPort";
import StringPort from "./StringPort";
import NumberPort from "./NumberPort";
import ArrayPort from "./ArrayPort";
import SeparatorPort from "./SeparatorPort";

const registerPorts = (config: any) => {
  config.addPortType(GenericPort);
  config.addPortType(BooleanPort);
  config.addPortType(StringPort);
  config.addPortType(NumberPort);
  config.addPortType(ArrayPort);
  config.addPortType(SeparatorPort);
};

export { registerPorts };
