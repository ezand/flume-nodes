import { Colors } from 'flume'

import { portType as stringPortType } from './StringPort'
import { portType as numberPortType } from './NumberPort'
import { portType as booleanPortType } from './BooleanPort'
import { portType as arrayPortType } from './ArrayPort'

import { PortType, PortProps } from '../types'
import { mergeDeep } from '../utils'

export const portType: PortType = 'generic'

const defaultProps: PortProps = {
   type: portType,
   name: portType,
   acceptTypes: [portType, stringPortType, numberPortType, booleanPortType, arrayPortType],
   color: Colors.blue
}

const genericPort = (customizations?: PortProps) => mergeDeep(defaultProps, customizations)

export default genericPort
