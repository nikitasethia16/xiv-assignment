import btcLogo from '../assets/bitcoin-btc-logo.png';
import ethLogo from '../assets/ethereum-eth-logo.png';
import usdtLogo from '../assets/tether-usdt-logo.png';

import btcChart from '../assets/btc.png';
import ethChart from '../assets/eth.png';
import usdtChart from '../assets/usdt.png';

const sampleData = [
  {
    id: 1,
    logo: btcLogo,
    name: "Bitcoin",
    symbol: "BTC",
    price: 93759.48,
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: "19.85M BTC",
    maxSupply: "21M BTC",
    chartImage: btcChart
  },
  {
    id: 2,
    logo: ethLogo,
    name: "Ethereum",
    symbol: "ETH",
    price: 1802.46,
    change1h: 0.6,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: "120.71M ETH",
    maxSupply: "∞",
    chartImage: ethChart
  },
  {
    id: 3,
    logo: usdtLogo,
    name: "Tether",
    symbol: "USDT",
    price: 1.0,
    change1h: 0.0,
    change24h: 0.0,
    change7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: "145.27B USDT",
    maxSupply: "∞",
    chartImage: usdtChart
  }
];

export default sampleData;
