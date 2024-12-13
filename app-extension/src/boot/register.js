import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-pinia-in-dev'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
