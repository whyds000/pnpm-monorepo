function getTextWidth(str: string) {
  let width = 0
  const html: HTMLSpanElement = document.createElement('span')
  html.innerText = str

  html.className = 'getTextWidth'
  document.querySelector('body')!.appendChild(html)
  width = (document.querySelector('.getTextWidth')! as HTMLSpanElement).offsetWidth
  document.querySelector('.getTextWidth')!.remove()
  return width
}

function getMaxLength(arr: any) {
  return arr.reduce((acc: number, item: string) => {
    if (item) {
      const calcLen = getTextWidth(item)
      if (acc < calcLen)
        acc = calcLen
    }
    return acc
  }, 0)
}

/**
 * 用于自动计算表格列宽度
 *
 * @param tableData 获取到的表格数据
 * @returns 返回一个方法，接受prop和label
 */
function flexColumnWidth<T>(tableData: T[]) {
  return function (prop: keyof T, label: string) {
    // 1.获取该列的所有数据
    const arr = tableData.map(x => x[prop as keyof T])
    // 把每列的表头也加进去算
    arr.push(label as any)
    // 2.计算每列内容最大的宽度 + 表格的内间距（依据实际情况而定）
    return `${getMaxLength(arr) + 25}px`
  }
}

export { flexColumnWidth }
