import { Network, TokensForList } from '../../types'
import telosTestnet from './tokens/telos-testnet'
import telos from './tokens/telos'
import meter from './tokens/meter'

export const tokens = {
  [Network.Telos]: telos,
  [Network.Meter]: meter,
  [Network.TelosTestnet]: telosTestnet,
}
