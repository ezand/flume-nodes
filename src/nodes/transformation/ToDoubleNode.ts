import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'coerceDouble'

const defaultProps: NodeProps = {
  type: nodeType,
  label: "To Double",
  inputs: (ports: any) => [
    ports.generic({
      name: "input",
      label: "Input",
    }),
  ],
  outputs: (ports: any) => [
    ports.number({
      name: "output",
      label: "Output",
    }),
  ],
};

const toDoubleNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default toDoubleNode
