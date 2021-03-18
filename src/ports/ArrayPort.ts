import { Colors } from 'flume'

import { PortType, PortProps } from '../types'
import { mergeDeep } from '../utils'

export const portType: PortType = 'array'

const defaultProps: PortProps = {
   type: portType,
   name: portType,
   acceptTypes: [portType],
   color: Colors.yellow
}

const arrayPort = (customizations?: PortProps) => mergeDeep(defaultProps, customizations)

export default arrayPort
