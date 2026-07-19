import { useState } from 'react';
import Web3 from 'web3';
import ABI from './ABI.json';
import './Wallet.css';

const Wallet = ({ saveState }) => {
    const [connected, setConnected] = useState(false);

    const init = async () => {
        try {
            if (!window.ethereum) {
                alert("Please install MetaMask to connect!");
                return;
            }

            const web3 = new Web3(window.ethereum);
            
            await window.ethereum.request({ 
                method: 'eth_requestAccounts' 
            });

            const contract = new web3.eth.Contract(
                ABI, 
                "0x5fbdb2315678afecb367f032d93f642f64180aa3"
            );

            setConnected(true);
            saveState({ web3, contract });
            
            console.log("✅ Wallet Connected Successfully");
        } catch (error) {
            console.error(error);
            alert("Failed to connect. Please try again.");
        }
    };

    return (
        <div className="header">
            <button 
                className="connectBTN" 
                onClick={init} 
                disabled={connected}
            >
                {connected ? "Connected ✓" : "Connect MetaMask"}
            </button>
        </div>
    );
};

export default Wallet;