import moment from 'moment'

export const getDiffDate = (prevDate: string, nextDate: string) => {
  let prev = new Date(prevDate)
  let next = new Date(nextDate)

  prev = new Date(prev.getFullYear(), prev.getMonth() + 1, prev.getDate())
  next = new Date(next.getFullYear(), next.getMonth() + 1, next.getDate())

  let diffDate = next.getTime() - prev.getTime()
  diffDate = Math.ceil(diffDate / (1000 * 3600 * 24))

  return diffDate
}

export const getWeekDay = (date: string) => {
  const week = ['일', '월', '화', '수', '목', '금', '토']
  const weekDay = week[new Date(date).getDay()]

  return weekDay
}

export const getFullWeddingDate = (date: string) => {
  const _date = new Date(date)
  const momentDate = moment(_date)
  const year = momentDate.format('YYYY년')
  const day = momentDate.format('M월 D일')
  const week = getWeekDay(date) + '요일'
  const hour = momentDate.format('H시')
  const time = _date.getMinutes() === 0 ? '' : _date.getMinutes() + '분'
  const amOrPm = momentDate.format('A') === 'PM' ? '오후' : '오전'
  const fullDate = `${year} ${day} ${week} ${amOrPm} ${hour} ${time}`

  return fullDate
}
