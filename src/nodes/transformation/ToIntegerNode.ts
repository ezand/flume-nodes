import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'coerceInteger'

const defaultProps: NodeProps = {
  type: nodeType,
  label: "To Integer",
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

const toIntegerNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default toIntegerNode
