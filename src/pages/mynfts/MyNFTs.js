import { useEffect, useState, useContext } from 'react'
import { WalletContext } from '../../components/WalletContext'
import './MyNFTs.css'

export default function MyNFTs() {
	const { walletAddress } = useContext(WalletContext)
	const [nfts, setNfts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!walletAddress) return

		// Тимчасові мок-дані
		const mockNFTs = [
			{
				address: '0:mock1',
				image:
					'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg',
				metadata: { name: 'Pixel Samurai #001' },
			},
			{
				address: '0:mock2',
				image:
					'https://www.spot.uz/media/img/2022/04/pjXQH916492512110620_l.jpg',
				metadata: { name: 'Pepe Cyberpunk' },
			},
			{
				address: '0:mock1',
				image:
					'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg',
				metadata: { name: 'Pixel Samurai #001' },
			},
			{
				address: '0:mock2',
				image:
					'https://www.spot.uz/media/img/2022/04/pjXQH916492512110620_l.jpg',
				metadata: { name: 'Pepe Cyberpunk' },
			},
			{
				address: '0:mock1',
				image:
					'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg',
				metadata: { name: 'Pixel Samurai #001' },
			},
			{
				address: '0:mock2',
				image:
					'https://www.spot.uz/media/img/2022/04/pjXQH916492512110620_l.jpg',
				metadata: { name: 'Pepe Cyberpunk' },
			},
			{
				address: '0:mock1',
				image:
					'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg',
				metadata: { name: 'Pixel Samurai #001' },
			},
			{
				address: '0:mock2',
				image:
					'https://www.spot.uz/media/img/2022/04/pjXQH916492512110620_l.jpg',
				metadata: { name: 'Pepe Cyberpunk' },
			},
		]

		setTimeout(() => {
			setNfts(mockNFTs)
			setLoading(false)
		}, 1000)
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
										src={nft.image || ''}
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
