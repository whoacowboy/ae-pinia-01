import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'PiniaInDev',

  setup () {
    return () => h(QBadge, {
      class: 'PiniaInDev',
      label: 'PiniaInDev'
    })
  }
}
