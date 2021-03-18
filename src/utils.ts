import { NodeProps } from "./types";

const isEmptyObject = (obj: Object) => {
   return obj && Object.keys(obj).length === 0 && obj.constructor === Object
 }

const pick = (obj: any, keys: string[]) => {
   return keys
     .map((k) => (k in obj ? { [k]: obj[k] } : {}))
     .reduce((res, o) => Object.assign(res, o), {})
 }

const mergeDeep = (target: any, source: any, isMergingArrays = false) => {
   if (!source && !target) return {}
   if (!source) return target
   if (!target) return source
   target = ((obj) => {
      let cloneObj;
      try {
         cloneObj = JSON.parse(JSON.stringify(obj));
      } catch (err) {
         // If the stringify fails due to circular reference, the merge defaults
         //   to a less-safe assignment that may still mutate elements in the target.
         // You can change this part to throw an error for a truly safe deep merge.
         cloneObj = Object.assign({}, obj);
      }
      return cloneObj;
   })(target);

   const isObject = (obj: any) => obj && typeof obj === "object";

   if (!isObject(target) || !isObject(source))
      return source;

   Object.keys(source).forEach(key => {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (Array.isArray(targetValue) && Array.isArray(sourceValue))
         if (isMergingArrays) {
            target[key] = targetValue.map((x, i) => sourceValue.length <= i
               ? x
               : mergeDeep(x, sourceValue[i], isMergingArrays));
            if (sourceValue.length > targetValue.length)
               target[key] = target[key].concat(sourceValue.slice(targetValue.length));
         } else {
            target[key] = targetValue.concat(sourceValue);
         }
      else if (isObject(targetValue) && isObject(sourceValue))
         target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue, isMergingArrays);
      else
         target[key] = sourceValue;
   });

   return target;
};

const mergeNodeProps = (x?: NodeProps, y?: NodeProps) => {
   const removeInputAndOutput = (z: any) => {
      const {inputs, outputs, ...basic} = z || { inputs: [], outputs: [] }
      return basic
   }

   const mergeInputsOutputs = (x: any, y: any) => {
      if (!x && !y) return (_ports: any) => []
      if (!x) return (ports: any) => y(ports)
      if (!y) return (ports: any) => x(ports)
   
      return (ports: any) => x(ports).concat(y(ports))
   }
   
   const basicX = removeInputAndOutput(x)
   const basicY = removeInputAndOutput(y)

   const {inputs: inputsX, outputs: outputsX} = pick(x, ['inputs', 'outputs'])
   const {inputs: inputsY, outputs: outputsY} = pick(y, ['inputs', 'outputs'])

   return {
      ...mergeDeep(basicX, basicY), 
      ...{ inputs: mergeInputsOutputs(inputsX, inputsY)}, 
      ...{ outputs:  mergeInputsOutputs(outputsX, outputsY)}
   }
}

export {
   isEmptyObject,
   pick,
   mergeDeep,
   mergeNodeProps
}
