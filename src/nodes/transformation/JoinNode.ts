import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'join'

const defaultProps: NodeProps = {
   type: nodeType,
   label: "Join",
   inputs: (ports: any) => [
      ports.separator(),
      ports.string({
         name: "value1",
         label: "Value1"
      }),
      ports.string({
         name: "value2",
         label: "Value2"
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
