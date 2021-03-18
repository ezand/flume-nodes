import { Controls } from "flume";

import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'staticValue'

const defaultProps: NodeProps = {
  type: nodeType,
  label: "Static Value",
  inputs: (_ports: any) => [
    {
      type: "staticValue",
      name: "staticValue",
      label: "Static Value",
      hidePort: true,
      controls: [
        Controls.text({
          name: "string",
          label: "Text",
        }),
      ],
    },
  ],
  outputs: (ports: any) => [
    ports.string({
      name: "value",
      label: "Value",
    }),
  ],
};

const staticValueNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default staticValueNode
