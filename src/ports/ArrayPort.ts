import { Colors } from "flume"

import { PortProps } from '../types'
import { mergeAcceptTypes } from '../utils'

const arrayPort = ({ type = "array", name = "array", acceptTypes, color = Colors.yellow }: PortProps) => ({
   type, name, color, acceptTypes: mergeAcceptTypes([type], acceptTypes)
})

export default arrayPort
