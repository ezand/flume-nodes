import { Colors, Controls } from "flume";

import { PortProps } from '../types'
import { mergeAcceptTypes } from '../utils'

const separatorPort = ({ type = "separator", name = "separator", label = "Separator", color = Colors.green, acceptTypes }: PortProps) => ({
   type, name, label, color,
   acceptTypes: mergeAcceptTypes([type], acceptTypes),
   hidePort: true,
   controls: [
      Controls.text({
         name: "string",
         label: "Text"
      })
   ]
})

export default separatorPort;
