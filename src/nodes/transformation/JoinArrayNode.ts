import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'joinArray'

const defaultProps: NodeProps = {
   type: nodeType,
   label: "Join Array",
   inputs: (ports: any) => [
      ports.separator(),
      ports.array({
         name: 'array',
         label: 'Array'
      })
   ],
   outputs: (ports: any) => [
      ports.string({
         name: "joined",
         label: "Joined"
      })
   ]
}

const joinNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default joinNode
