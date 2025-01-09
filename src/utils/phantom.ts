export const isPhantomInstalled = (): boolean => {
  return window.solana && window.solana.isPhantom;
};

export const connectWallet = async (): Promise<string | undefined> => {
  if (isPhantomInstalled()) {
    try {
      const response = await window.solana.connect();
      console.log("Connected to wallet with address:", response.publicKey.toString());
      return response.publicKey.toString();
    } catch (error) {
      console.error("User rejected the connection:", error);
    }
  } else {
    console.log("Phantom Wallet is not installed");
  }
};
