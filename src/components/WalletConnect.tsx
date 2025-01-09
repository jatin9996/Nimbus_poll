import React, { useState, useEffect } from 'react';
import { connectPhantomWallet, isPhantomAvailable, disconnectPhantomWallet, onAccountChanged, onConnectionChanged } from '../utils/phantomWallet';

const WalletConnect: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    if (isPhantomAvailable()) {
      connectPhantomWallet(true).then((address) => {
        if (address) {
          setWalletAddress(address);
        }
      });

      onConnectionChanged((isConnected) => {
        if (!isConnected) {
          setWalletAddress(null);
        }
      });

      onAccountChanged((publicKey) => {
        setWalletAddress(publicKey);
      });
    }
  }, []);

  const saveWalletAddressToDatabase = async (walletAddress: string) => {
    try {
      const response = await fetch('/api/saveWalletAddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ walletAddress }),
      });

      if (!response.ok) {
        throw new Error('Failed to save wallet address');
      }

      const data = await response.json();
      console.log('Wallet address saved:', data);
    } catch (error) {
      console.error('Error saving wallet address:', error);
    }
  };

  const handleConnect = async () => {
    const address = await connectPhantomWallet();
    if (address) {
      setWalletAddress(address);
      saveWalletAddressToDatabase(address);  // Call the function to save the address
    } else {
      alert("Phantom Wallet is not installed. Please install it to continue.");
    }
  };

  const handleDisconnect = async () => {
    await disconnectPhantomWallet();
    setWalletAddress(null);
  };

  return (
    <div>
      {walletAddress ? (
        <div>
          <p>Connected Wallet: {walletAddress}</p>
          <button onClick={handleDisconnect}>Disconnect</button>
          {/* Additional actions like sending a transaction can be added here */}
        </div>
      ) : (
        <button onClick={handleConnect}>Connect to Phantom Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
