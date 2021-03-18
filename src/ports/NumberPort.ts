import { Colors } from "flume";

import { PortProps } from '../types'
import { mergeAcceptTypes } from '../utils'

const numberPort = ({ type = "number", name = "number", acceptTypes, color = Colors.orange }: PortProps) => ({
   type, name, color, acceptTypes: mergeAcceptTypes([type], acceptTypes)
})

export default numberPort;
