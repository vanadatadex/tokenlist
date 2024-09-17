import { Network } from '../../types'
import telosTestnet from './tokens/telos-testnet'
import telos from './tokens/telos'
import meter from './tokens/meter'
import artelaBetanet from './tokens/artela-betanet'
import taiko from './tokens/taiko'
import etherlink from './tokens/etherlink'

export const tokens = {
  [Network.Telos]: telos,
  [Network.Meter]: meter,
  [Network.TelosTestnet]: telosTestnet,
  [Network.ArtelaBetanet]: artelaBetanet,
  [Network.Taiko]: taiko,
  [Network.Etherlink]: etherlink,
}
