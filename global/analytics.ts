// NOTE(son) amplitude 구조분해 하지않고 하나의 import로 사용하면 error 발생
import * as amplitude from '@amplitude/analytics-browser'
import { AMPLITUDE_API_KEY, IS_BROWSER } from 'global/constant'

class Analytics {
  init() {
    amplitude.init(AMPLITUDE_API_KEY as string)
  }

  traffic(eventName: string) {
    IS_BROWSER && amplitude.track(eventName)
  }

  track(eventName: string, eventProps?: Record<string, unknown>) {
    amplitude.track(eventName, eventProps)
  }
}

export const analytics = new Analytics()
