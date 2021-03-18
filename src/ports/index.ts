import GenericPort from "./GenericPort"
import BooleanPort from "./BooleanPort"
import StringPort from "./StringPort"
import NumberPort from "./NumberPort"
import ArrayPort from "./ArrayPort"
import SeparatorPort from "./SeparatorPort"

const registerPortsWithDefaults = (config: any) => {
  config.addPortType(GenericPort({}))
  config.addPortType(BooleanPort({}))
  config.addPortType(StringPort({}))
  config.addPortType(NumberPort({}))
  config.addPortType(ArrayPort({}))
  config.addPortType(SeparatorPort({}))
};

export { 
   GenericPort,
   BooleanPort,
   StringPort,
   NumberPort,
   ArrayPort,
   SeparatorPort,
   registerPortsWithDefaults
}
