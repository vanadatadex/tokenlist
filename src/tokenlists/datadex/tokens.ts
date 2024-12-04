import { Network } from '../../types'
import vana from './tokens/vana'
import vanaMoksha from './tokens/vana-moksha'

export const tokens = {
  [Network.Vana]: vana,
  [Network.VanaMoksha]: vanaMoksha,
}
