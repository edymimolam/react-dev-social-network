export const updateObjInArray = (arr, searchProp, objProp, updatingProps) => {
  return arr.map((item) => {
    if (item[searchProp] === objProp) return { ...item, ...updatingProps }
    return item
  })
} 