import { Colors } from "flume";

import { PortProps } from '../types'
import { mergeAcceptTypes } from '../utils'

const stringPort = ({ type = "string", name = "string", acceptTypes, color = Colors.green }: PortProps) => ({
   type, name, color, acceptTypes: mergeAcceptTypes([type], acceptTypes)
})

export default stringPort;
