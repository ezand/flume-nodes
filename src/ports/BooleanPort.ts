import { Colors } from 'flume'

import { PortType, PortProps } from '../types'
import { mergeDeep } from '../utils'

export const portType: PortType = 'boolean'

const defaultProps: PortProps = {
   type: portType,
   name: portType,
   acceptTypes: [portType],
   color: Colors.purple
}

const booleanPort = (customizations?: PortProps) => mergeDeep(defaultProps, customizations)

export default booleanPort
