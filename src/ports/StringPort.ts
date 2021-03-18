import { Colors } from 'flume'

import { PortType, PortProps } from '../types'
import { mergeDeep } from '../utils'

export const portType: PortType = 'string'

const defaultProps: PortProps = {
   type: portType,
   name: portType,
   acceptTypes: [portType],
   color: Colors.green
}

const stringPort = (customizations?: PortProps) => mergeDeep(defaultProps, customizations)

export default stringPort
