// Utilities
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default createPinia()

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
