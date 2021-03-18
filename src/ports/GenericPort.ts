import { Colors } from "flume";

import { PortProps } from '../types'
import { mergeAcceptTypes } from '../utils'

const genericPort = ({ type = "generic", name = "generic", acceptTypes, color = Colors.blue }: PortProps) => ({
   type, name, color, acceptTypes: mergeAcceptTypes(["generic", "string", "number", "boolean", "array"], acceptTypes)
})

export default genericPort;
