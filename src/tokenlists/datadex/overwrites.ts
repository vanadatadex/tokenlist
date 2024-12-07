/* eslint-disable max-len */
import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.Vana]: {
    '0xF1815bd50389c46847f0Bda824eC8da914045D14': {
      logoURI:
        'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    }, //USDC.e
    '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590': {
      logoURI:
        'https://raw.githubusercontent.com/meterio/token-list/master/generated/token-logos/meter/0x983147fb73a45fc7f8b4dfa1cd61bdc7b111e5b6.png',
    }, //WETH
    '0x00EDdD9621Fb08436d0331c149D1690909a5906d': {
      logoURI:
        'https://raw.githubusercontent.com/centfinance/tokenlists/main/src/assets/images/tokens/WVANA.svg',
    }, //WVANA
  },
  [Network.VanaMoksha]: {
    '0xB39a50B5806039C82932bB96CEFbcbc61231045C': {
      logoURI:
        'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    }, //USDC
    '0x01079C78199e05D44bBFF9E50Dbdf765489F16E1': {
      logoURI:
        'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    }, //USDT
    '0xbccc4b4c6530F82FE309c5E845E50b5E9C89f2AD': {
      name: 'Wrapped Vana',
      symbol: 'VANA',
      logoURI:
        'https://raw.githubusercontent.com/centfinance/tokenlists/main/src/assets/images/tokens/WVANA.svg',
    }, //WVANA
    '0x3216EF647DFb90B73176e33fFe34EFF2456813A3': {
      logoURI:
        'https://raw.githubusercontent.com/centfinance/tokenlists/main/src/assets/images/tokens/VSYMM.svg',
    }, //VSYMM
    '0xB18A68588e4551B880011aF27DF5347B99b444C2': {
      logoURI:
        'https://raw.githubusercontent.com/centfinance/tokenlists/main/src/assets/images/tokens/VOLARA.png',
    }, //VOL
    '0xf5A960F8f0D04AaeDC44F2619977A2B7DE9CeF09': {
      logoURI:
        'https://raw.githubusercontent.com/centfinance/tokenlists/main/src/assets/images/tokens/DNA.png',
    }, //DNA
    '0xf379A80F0585E57fD5AeBb29d8caFAC60F8F54C3': {
      logoURI:
        'https://raw.githubusercontent.com/centfinance/tokenlists/main/src/assets/images/tokens/WDUDE.png',
    }, //WDUDE
  },
}
