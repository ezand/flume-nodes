import { Colors } from 'flume'

import { PortType, PortProps } from '../types'
import { mergeDeep } from '../utils'

export const portType: PortType = 'number'

const defaultProps: PortProps = {
   type: portType,
   name: portType,
   acceptTypes: [portType],
   color: Colors.orange
}

const numberPort = (customizations?: PortProps) => mergeDeep(defaultProps, customizations)

export default numberPort
