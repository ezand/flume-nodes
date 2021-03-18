import GenericPort, { portType as genericPortType } from "./GenericPort"
import BooleanPort, { portType as booleanPortType } from "./BooleanPort"
import StringPort, { portType as stringPortType } from "./StringPort"
import NumberPort, { portType as numberPortType } from "./NumberPort"
import ArrayPort, { portType as arrayPortType } from "./ArrayPort"
import SeparatorPort, { portType as separatorPortType } from "./SeparatorPort"

import { PortCustomizations } from "../types"

const getCustomizations = (key: string, customizations?: PortCustomizations) =>
   customizations && customizations[key] ? customizations[key] : {}

const registerPorts = (config: any, customizations?: PortCustomizations) => {
   config.addPortType(GenericPort(getCustomizations(genericPortType, customizations)))
   config.addPortType(BooleanPort(getCustomizations(booleanPortType, customizations)))
   config.addPortType(StringPort(getCustomizations(stringPortType, customizations)))
   config.addPortType(NumberPort(getCustomizations(numberPortType, customizations)))
   config.addPortType(ArrayPort(getCustomizations(arrayPortType, customizations)))
   config.addPortType(SeparatorPort(getCustomizations(separatorPortType, customizations)))
}

export {
   GenericPort,
   BooleanPort,
   StringPort,
   NumberPort,
   ArrayPort,
   SeparatorPort,
   registerPorts
}
