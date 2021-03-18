import JoinNode, { nodeType as joinNodeType } from "./transformation/JoinNode"
import JoinArrayNode, { nodeType as joinArrayNodeType } from "./transformation/JoinArrayNode"
import SplitNode, { nodeType as splitNodeType } from "./transformation/SplitNode"
import ToStringNode, { nodeType as toStringNodeType } from "./transformation/ToStringNode"
import ToBooleanNode, { nodeType as toBooleanNodeType } from "./transformation/ToBooleanNode"
import ToIntegerNode, { nodeType as toIntegerNodeType } from "./transformation/ToIntegerNode"
import ToDoubleNode, { nodeType as toDoubleNodeType } from "./transformation/ToDoubleNode"
import PickNode, { nodeType as pickNodeType } from "./transformation/PickNode"
import MapNode, { nodeType as mapNodeType } from "./transformation/MapNode"
import ForEachNode, { nodeType as forEachNodeType } from "./functional/ForEachNode"
import StaticValueNode, { nodeType as staticValueNodeType } from "./functional/StaticValueNode"

import { NodeType, NodeCustomizations } from '../types'

const getCustomizations = (key: NodeType, customizations?: NodeCustomizations) =>
   customizations && customizations[key] ? customizations[key] : {}

const registerNodes = (config: any, customizations?: NodeCustomizations) => {
   config.addNodeType(JoinNode(getCustomizations(joinNodeType, customizations)))
   config.addNodeType(JoinArrayNode(getCustomizations(joinArrayNodeType, customizations)))
   config.addNodeType(SplitNode(getCustomizations(splitNodeType, customizations)))
   config.addNodeType(ToStringNode(getCustomizations(toStringNodeType, customizations)))
   config.addNodeType(ToBooleanNode(getCustomizations(toBooleanNodeType, customizations)))
   config.addNodeType(ToIntegerNode(getCustomizations(toIntegerNodeType, customizations)))
   config.addNodeType(ToDoubleNode(getCustomizations(toDoubleNodeType, customizations)))
   config.addNodeType(PickNode(getCustomizations(pickNodeType, customizations)))
   config.addNodeType(MapNode(getCustomizations(mapNodeType, customizations)))
   config.addNodeType(ForEachNode(getCustomizations(forEachNodeType, customizations)))
   config.addNodeType(StaticValueNode(getCustomizations(staticValueNodeType, customizations)))
}

export {
   JoinNode,
   SplitNode,
   ToStringNode,
   ToBooleanNode,
   ToIntegerNode,
   ToDoubleNode,
   PickNode,
   MapNode,
   ForEachNode,
   StaticValueNode,
   registerNodes
}
