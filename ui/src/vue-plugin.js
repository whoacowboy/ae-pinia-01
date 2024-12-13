import AePinia01 from './components/AePinia01.vue'

const version = __UI_VERSION__

function install(app) {
  app.component(AePinia01.name, AePinia01)
}

export { version, AePinia01, install }
