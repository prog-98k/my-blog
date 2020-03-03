const addCatalog = (arr, obj) => {
  if (arr.length === 0) {
    return arr.push(obj)
  }
  const last = arr[arr.length - 1]
  if (last.level >= obj.level) {
    return arr.push(obj)
  }
  // 如果层级比最新插入的标题低
  addCatalog(last.subs, obj)
}

const getCatalog = (elname, levellist) => {
  const el = document.querySelector(elname)
  const level = levellist || 'h1, h2, h3'
  const Nodes = el.querySelectorAll(level)
  const levels = []
  const noLevels = []
  let count = 1
  for (const item of Nodes) {
    const obj = {
      id: count,
      title: item.textContent,
      level: parseInt(item.nodeName.substring(1)),
      anchor: item.id,
      subs: []
      // top: parseInt(item.offsetTop + 70 + 35),
      // top2: parseInt(item.getBoundingClientRect().top),
      // el: item
    }
    addCatalog(levels, obj)
    noLevels.push(obj)
    count++
  }
  // console.log(levels, noLevels)
  return {
    levels,
    noLevels
  }
}

export default getCatalog
