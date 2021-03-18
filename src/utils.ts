const mergeAcceptTypes = (defaultTypes: string[], additionalTypes?: string[]) =>
   additionalTypes ? [...new Set([...defaultTypes, ...additionalTypes])] : defaultTypes

export {
   mergeAcceptTypes
}
