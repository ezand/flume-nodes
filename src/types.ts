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
