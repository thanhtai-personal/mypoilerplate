import authRoutes from './auth'
import mapRoutes from './map'
import historicalMapsRoutes from './historicalMaps'
export default {
  home: '/home',
  ...authRoutes,
  ...mapRoutes,
  ...historicalMapsRoutes
}