import { Controls } from "flume";

import { NodeType, NodeProps } from '../../types'
import { mergeNodeProps } from '../../utils'

export const nodeType: NodeType = 'map'

const defaultProps: NodeProps = {
  type: nodeType,
  label: "Map",
  inputs: (ports: any) => [
    {
      type: "mapDef",
      name: "map",
      label: "Mappings",
      hidePort: true,
      controls: [
        Controls.text({
          name: "mappings",
          label: "Mapings",
        }),
      ],
    },
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

const mapNode = (customizations?: NodeProps) => mergeNodeProps(defaultProps, customizations)

export default mapNode
