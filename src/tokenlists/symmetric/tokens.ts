import { Network, TokensForList } from '../../types'
import telosTestnet from './tokens/telos-testnet'
import telos from './tokens/telos'

export const tokens = {
  [Network.Telos]: telos,
  [Network.TelosTestnet]: telosTestnet,
}
