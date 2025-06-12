import { createContext, useEffect, useState } from 'react'
import { tonConnectUI } from '../tonConnectUI'

export const WalletContext = createContext()

export function WalletProvider({ children }) {
	const [walletAddress, setWalletAddress] = useState(null)

	useEffect(() => {
		// Підписка на зміни статусу гаманця (викликається і на старті, і при перепідключенні)
		const unsub = tonConnectUI.onStatusChange(wallet => {
			setWalletAddress(wallet?.account?.address || null)
		})
		return () => unsub()
	}, [])

	return (
		<WalletContext.Provider value={{ walletAddress }}>
			{children}
		</WalletContext.Provider>
	)
}
