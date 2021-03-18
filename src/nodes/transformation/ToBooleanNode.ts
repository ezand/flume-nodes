import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'coerceBoolean'

const defaultProps: NodeProps = {
  type: nodeType,
  label: "To Boolean",
  inputs: (ports: any) => [
    ports.generic({
      name: "input",
      label: "Input",
    }),
  ],
  outputs: (ports: any) => [
    ports.boolean({
      name: "output",
      label: "Output",
    }),
  ],
};

const toBooleanNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default toBooleanNode

