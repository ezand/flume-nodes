import { Colors, Controls } from 'flume'

import { PortType, PortProps } from '../types'
import { mergeDeep } from '../utils'

export const portType: PortType = 'separator'

const defaultProps: PortProps = {
   type: portType,
   name: portType,
   label: 'Separator',
   acceptTypes: [portType],
   color: Colors.green,
   hidePort: true,
   controls: [
      Controls.text({
         name: "string",
         label: "Text"
      })
   ]
}

const separatorPort = (customizations?: PortProps) => mergeDeep(defaultProps, customizations)

export default separatorPort
