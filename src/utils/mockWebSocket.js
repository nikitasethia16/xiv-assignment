import { updateAsset } from '../features/crypto/cryptoSlice';

export function startMockWebSocket(dispatch, getState) {
  setInterval(() => {
    const assets = getState().crypto;
    assets.forEach(asset => {
      const priceFluctuation = (Math.random() - 0.5) * 0.05 * asset.price;
      dispatch(updateAsset({
        id: asset.id,
        price: +(asset.price + priceFluctuation).toFixed(2),
        change1h: +(Math.random() * 2 - 1).toFixed(2),
        change24h: +(Math.random() * 4 - 2).toFixed(2),
        change7d: +(Math.random() * 10 - 5).toFixed(2),
        volume24h: asset.volume24h + Math.floor(Math.random() * 5000000)
      }));
    });
  }, 2000);
}