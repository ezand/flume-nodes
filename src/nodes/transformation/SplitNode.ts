import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'split'

const defaultProps: NodeProps = {
   type: nodeType,
   label: "Split",
   inputs: (ports: any) => [
      ports.separator(),
      ports.string({
         name: "value",
         label: "Value"
      })
   ],
   outputs: (ports: any) => [
      ports.array({
         name: "array",
         label: "Array"
      })
   ]
};

const splitNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default splitNode
