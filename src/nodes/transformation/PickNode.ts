import { Controls } from "flume";

import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'pick'

const defaultProps: NodeProps = {
  type: nodeType,
  label: "Pick",
  inputs: (ports: any) => [
    {
      type: "splitIndex",
      name: "index",
      label: "Index",
      hidePort: true,
      controls: [
        Controls.number({
          name: "index",
          label: "Index",
        }),
      ],
    },
    ports.array({
      name: "input",
      label: "Array",
    }),
  ],
  outputs: (ports: any) => [
    ports.generic({
      name: "value",
      label: "Value",
    }),
  ],
};

const pickNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default pickNode
