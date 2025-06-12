import { useEffect, useState, useContext } from 'react'
import { WalletContext } from '../../components/WalletContext'
import './MyNFTs.css'

export default function MyNFTs() {
	const { walletAddress } = useContext(WalletContext)
	const [nfts, setNfts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!walletAddress) return

		setLoading(true)
		fetch(`https://tonapi.io/v2/accounts/${walletAddress}/nfts`)
			.then(res => res.json())
			.then(data => {
				// data.nft_items — масив NFT
				setNfts(data.nft_items || [])
			})
			.catch(e => {
				console.error('Error fetching NFTs:', e)
				setNfts([])
			})
			.finally(() => setLoading(false))
	}, [walletAddress])

	return (
		<>
			{!walletAddress && (
				<div className='preview-box'>
					<p className='preview-label' style={{ color: '#ff4444' }}>
						🚫 Please connect your wallet to view your NFTs
					</p>
				</div>
			)}

			{walletAddress && (
				<div className='nft-gallery'>
					<h1>Your NFT Collection</h1>
					{loading ? (
						<p className='preview-label'>Loading your NFTs...</p>
					) : nfts.length === 0 ? (
						<p className='preview-label'>No NFTs found in your wallet.</p>
					) : (
						<div className='nft-grid'>
							{nfts.map(nft => (
								<div className='nft-card' key={nft.address}>
									<img
										src={nft.preview?.url || nft.metadata?.image || ''}
										alt={nft.metadata?.name || 'NFT'}
									/>
									<p className='nft-title'>
										{nft.metadata?.name || 'Unnamed NFT'}
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</>
	)
}
