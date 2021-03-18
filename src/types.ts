export type PortType = 'array' | 'boolean' | 'generic' | 'number' | 'separator' | 'string'

export interface PortProps {
   type?: PortType
   name?: string
   label?: string
   acceptTypes?: string[]
   color?: string,
   hidePort?: boolean,
   controls?: any // TODO type this
}

export type PortCustomizations = Partial<Record<PortType, PortProps>>

export type NodeType = 'join' | 'joinArray' | 'map' | 'pick' | 'split' | 'coerceBoolean' |
   'coerceDouble' | 'coerceInteger' | 'coerceString' | 'forEach' | 'staticValue'

export interface NodeProps {
   type?: NodeType
   label?: string
   inputs?(ports: any): any[] // TODO type this
   outputs?(ports: any): any[] // TOOD type this
}

export type NodeCustomizations = Partial<Record<NodeType, NodeProps>>
