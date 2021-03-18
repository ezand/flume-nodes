import JoinNode from "./transformation/JoinNode";
import SplitNode from "./transformation/SplitNode";
import ToStringNode from "./transformation/ToStringNode";
import ToBooleanNode from "./transformation/ToBooleanNode";
import ToIntegerNode from "./transformation/ToIntegerNode";
import ToDoubleNode from "./transformation/ToDoubleNode";
import PickNode from "./transformation/PickNode";
import MapNode from "./transformation/MapNode";
import ForEachNode from "./functional/ForEachNode";
import StaticValueNode from "./functional/StaticValueNode";

const registerNodes = (config: any) => {
  config.addNodeType(JoinNode);
  config.addNodeType(SplitNode);
  config.addNodeType(ToStringNode);
  config.addNodeType(ToBooleanNode);
  config.addNodeType(ToIntegerNode);
  config.addNodeType(ToDoubleNode);
  config.addNodeType(PickNode);
  config.addNodeType(MapNode);
  config.addNodeType(ForEachNode);
  config.addNodeType(StaticValueNode);
};

export { registerNodes };
