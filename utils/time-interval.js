import { DateTime, Interval } from 'luxon'

export default class TimeInterval {
  constructor() {
    this.startTime = DateTime.local().startOf('day').startOf('week')
    this.endTime = DateTime.local().endOf('day')
    this.interval = Interval.fromDateTimes(this.startTime, this.endTime)
    this.times = []
    this.init()
  }

  *hours(interval) {
    let cursor = interval.start.startOf('day')
    while (cursor < interval.end) {
      yield cursor
      cursor = cursor.plus({ hours: 1 })
    }
  }

  init() {
    this.times = Array.from(this.hours(this.interval))
  }
}
