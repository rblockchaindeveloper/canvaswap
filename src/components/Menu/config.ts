import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Exchange',
    icon: 'SwapIcon',
    href: '/swap',
  },
  {
    label: 'Liquidity',
    icon: 'LiquidityIcon',
    href: '/pool',
  },
  {
    label: 'Create Token',
    icon: 'CanvasIcon',
    href: '/create',
  },
  {
    label: 'View Token',
    icon: 'TradeIcon',
    href: '/view',
  },
]

export default config
