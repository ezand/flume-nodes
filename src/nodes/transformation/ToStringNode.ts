import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'coerceString'

const defaultProps: NodeProps = {
  type: nodeType,
  label: "To String",
  inputs: (ports: any) => [
    ports.generic({
      name: "input",
      label: "Input",
    }),
  ],
  outputs: (ports: any) => [
    ports.string({
      name: "output",
      label: "Output",
    }),
  ],
};

const toStringNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default toStringNode
