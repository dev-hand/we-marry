export const diffDateFormat = (date1: string, date2: string) => {
  let diffDate1 = new Date(date1)
  let diffDate2 = new Date(date2)

  diffDate1 = new Date(
    diffDate1.getFullYear(),
    diffDate1.getMonth() + 1,
    diffDate1.getDate(),
  )
  diffDate2 = new Date(
    diffDate2.getFullYear(),
    diffDate2.getMonth() + 1,
    diffDate2.getDate(),
  )

  let diff = diffDate2.getTime() - diffDate1.getTime()
  diff = Math.ceil(diff / (1000 * 3600 * 24))

  return diff
}
