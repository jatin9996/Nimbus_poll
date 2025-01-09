// Utils to interact with the Phantom wallet

// Check if Phantom is available in the window object
// Extend the Window interface to include solana
declare global {
  interface Window { solana: any; }
}

export const isPhantomAvailable = (): boolean => {
  return window.solana && window.solana.isPhantom;
};

// Connect to the Phantom Wallet
export const connectPhantomWallet = async (onlyIfTrusted = false): Promise<string | undefined> => {
  const provider = window.solana;
  if (!provider) {
    console.error("Phantom Wallet is not available");
    return undefined;
  }

  try {
    const response = await provider.connect({ onlyIfTrusted });
    return response.publicKey.toString();
  } catch (error) {
    console.error("Failed to connect Phantom Wallet:", error);
    return undefined;
  }
};

// Disconnect from the Phantom Wallet
export const disconnectPhantomWallet = async (): Promise<void> => {
  const provider = window.solana;
  if (!provider) {
    console.error("Phantom Wallet is not available");
    return;
  }

  try {
    await provider.request({ method: "disconnect" });
  } catch (error) {
    console.error("Failed to disconnect Phantom Wallet:", error);
  }
};

// Listen for account changes
export const onAccountChanged = (callback: (publicKey: string | null) => void): void => {
  const provider = window.solana;
  if (!provider) {
    console.error("Phantom Wallet is not available");
    return;
  }

  provider.on('accountChanged', (publicKey: any) => {
    if (publicKey) {
      callback(publicKey.toString());
    } else {
      callback(null);
    }
  });
};

// Listen for connection changes
export const onConnectionChanged = (callback: (isConnected: boolean) => void): void => {
  const provider = window.solana;
  if (!provider) {
    console.error("Phantom Wallet is not available");
    return;
  }

  provider.on('connect', () => callback(true));
  provider.on('disconnect', () => callback(false));
};

export const isPhantomInstalled = () => {
    // Implementation of isPhantomInstalled
};

export const connectWallet = () => {
    // function implementation
};
