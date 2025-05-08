import React, { useEffect } from 'react';
import CryptoTable from './features/crypto/CryptoTable';
import { useDispatch, useStore } from 'react-redux';
import { startMockWebSocket } from './utils/mockWebSocket';

function App() {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    startMockWebSocket(dispatch, store.getState);
  }, [dispatch, store]);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;