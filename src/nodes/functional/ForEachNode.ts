import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'forEach'

const defaultProps: NodeProps = {
   type: nodeType,
   label: "For Each",
   inputs: (ports: any) => [
      ports.array({
         name: "items",
         label: "Items"
      })
   ],
   outputs: (ports: any) => [
      ports.generic({
         name: "item",
         label: "Item"
      })
   ]
};

const forEachNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default forEachNode
