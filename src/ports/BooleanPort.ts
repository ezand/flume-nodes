import { Colors } from "flume";

import { PortProps } from '../types'
import { mergeAcceptTypes } from '../utils'

const booleanPort = ({ type = "boolean", name = "boolean", acceptTypes, color = Colors.purple }: PortProps) => ({
   type, name, color, acceptTypes: mergeAcceptTypes([type], acceptTypes)
})

export default booleanPort;
