import { useEffect, useState } from 'react'
import { tonConnectUI } from '../../tonConnectUI'
import './MyNFTs.css'

export default function MyNFTs() {
	const [nfts, setNfts] = useState([])
	const [loading, setLoading] = useState(true)
    const [walletStatus, setWalletStatus] = useState('loading')

	// useEffect(() => {
	// 	const address = tonConnectUI.account?.address

	// 	if (!address) return

	// 	const fetchNFTs = async () => {
	// 		setLoading(true)
	// 		try {
	// 			const res = await fetch(
	// 				`https://tonapi.io/v2/accounts/${address}/nfts`,
	// 				{
	// 					headers: {
	// 						Accept: 'application/json',
	// 					},
	// 				}
	// 			)
	// 			const data = await res.json()
	// 			setNfts(data.nft_items || [])
	// 		} catch (err) {
	// 			console.error('Failed to load NFTs:', err)
	// 		} finally {
	// 			setLoading(false)
	// 		}
	// 	}

	// 	fetchNFTs()
	// }, [])

    useEffect(() => {
			const unsub = tonConnectUI.onStatusChange(wallet => {
				if (wallet?.account?.address) {
					setWalletStatus('connected')
				} else {
					setWalletStatus('not-connected')
				}
			})
			return () => unsub()
		}, [])

    useEffect(() => {
			const mockNFTs = [
				{
					address: '0:mock1',
					image:
						'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?semt=ais_hybrid&w=740',
					metadata: { name: 'Pixel Samurai #001' },
				},
				{
					address: '0:mock2',
					image:
						'https://www.spot.uz/media/img/2022/04/pjXQH916492512110620_l.jpg',
					metadata: { name: 'Pepe Cyberpunk' },
				},
				{
					address: '0:mock3',
					image: 'https://i1.poltava.to/uploads/2023/04/26/nftmonkey.jpg',
					metadata: { name: 'TON Ape #7' },
				},
				{
					address: '0:mock4',
					image:
						'https://cdn-static.artguide.com/storage/news/9281/regular_detail_picture.jpg',
					metadata: { name: 'Glitchy Bot' },
				},
				{
					address: '0:mock1',
					image:
						'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?semt=ais_hybrid&w=740',
					metadata: { name: 'Pixel Samurai #001' },
				},
				{
					address: '0:mock2',
					image:
						'https://www.spot.uz/media/img/2022/04/pjXQH916492512110620_l.jpg',
					metadata: { name: 'Pepe Cyberpunk' },
				},
				{
					address: '0:mock3',
					image: 'https://i1.poltava.to/uploads/2023/04/26/nftmonkey.jpg',
					metadata: { name: 'TON Ape #7' },
				},
				{
					address: '0:mock4',
					image:
						'https://cdn-static.artguide.com/storage/news/9281/regular_detail_picture.jpg',
					metadata: { name: 'Glitchy Bot' },
				},
			]

			setTimeout(() => {
				setNfts(mockNFTs)
				setLoading(false)
			}, 1000)
		}, [])


	return (
		<>
			{walletStatus === 'not-connected' && (
				<div className='preview-box'>
					<p className='preview-label' style={{ color: '#ff4444' }}>
						🚫 Please connect your wallet to mint an NFT
					</p>
				</div>
			)}
			{walletStatus === 'connected' && (
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
										src={nft.preview?.url || nft.image || ''}
										alt={nft.name}
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
