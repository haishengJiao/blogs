const inputData = [
  { 字段1: '甲', 字段2: 'a', 字段3: 1 },
  { 字段1: '甲', 字段2: 'a', 字段3: 2 },
  { 字段1: '甲', 字段2: 'a', 字段3: 3 },
  { 字段1: '甲', 字段2: 'b', 字段3: 1 },
  { 字段1: '甲', 字段2: 'b', 字段3: 2 },
  { 字段1: '甲', 字段2: 'b', 字段3: 3 },
  { 字段1: '乙', 字段2: 'a', 字段3: 1 },
  { 字段1: '乙', 字段2: 'a', 字段3: 2 },
  { 字段1: '乙', 字段2: 'a', 字段3: 3 },
  { 字段1: '乙', 字段2: 'b', 字段3: 1 },
  { 字段1: '乙', 字段2: 'b', 字段3: 2 },
  { 字段1: '乙', 字段2: 'b', 字段3: 3 }
]

function isFullCombination(datas) {
  // 判断不是数组的情况
  if (!Array.isArray(datas)) return false
  // 判断数组为空的情况
  if (datas.length === 0) return false
  // 字段映射对象(记录每一个字段可能出现的值)
  const fieldMap = new Map()
  // 所有字段名
  const keys = Object.keys(datas[0])
  // 每一个字段值组合出来的情况，每次循环到一个对象的时候拼接组合情况
  const combinationSet = new Set()
  // 映射关系(每一个属性值对应数字的关系)
  const valueMap = new Map()
  // 每一个不通的属性值对应不同的数字(自增数字)
  let n = 1
  for (const item of datas) {
    let combination = ''
    for (const key of keys) {
      const value = item[key]
      let valueSet = fieldMap.get(key)
      if (!valueSet) {
        valueSet = new Set()
        fieldMap.set(key, valueSet)
      }
      valueSet.add(value)
      let num = valueMap.get(value)
      if (!num) {
        // 映射关系不存在
        num = n++
        valueMap.set(value, num)
      }
      // 拼接
      combination += `-${num}`
    }
    // 判断是否有重复项
    if (combinationSet.has(combination)) return false
    combinationSet.add(combination)
  }
  // 计算 [...fieldMap] 每一项的第二项长度
  // [, v] 结构，第一项不需要
  const n1 = [...fieldMap].reduce((s, [, v]) => (s *= v.size), 1)
  const n2 = datas.length
  return n1 === n2
}

console.log(isFullCombination(inputData))
