import authRoutes from './auth'
import mapRoutes from './map'
export default {
  home: '/home',
  ...authRoutes,
  ...mapRoutes
}