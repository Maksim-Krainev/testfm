import { useState, useContext } from 'react'
import { WalletContext } from '../../components/WalletContext'
import { tonConnectUI } from '../../tonConnectUI'
import './Mint.css'

export default function Mint() {
	const [selectedFile, setSelectedFile] = useState(null)
	const { walletAddress } = useContext(WalletContext)
	const [nftName, setNftName] = useState('')
	const [nftDescription, setNftDescription] = useState('')
	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState('')
	const [result, setResult] = useState(null)

	const handleFileChange = e => {
		const file = e.target.files[0]
		setSelectedFile(file)
	}
	const handleNameChange = e => {
		const value = e.target.value
		const formatted = value.charAt(0).toUpperCase() + value.slice(1)
		setNftName(formatted)
	}
	const isValidName = nftName.length > 0 && /^[A-Z]/.test(nftName)

	function fileToBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onload = () => resolve(reader.result)
			reader.onerror = error => reject(error)
			reader.readAsDataURL(file)
		})
	}

	const handleMint = async () => {
		if (!selectedFile || !walletAddress || !isValidName) return
		setLoading(true)
		setStatus('Uploading image and preparing transaction...')
		setResult(null)

		try {
			const photo = await fileToBase64(selectedFile)
			const timestamp = new Date().toISOString()
			const requestBody = {
				photo,
				wallet_address: walletAddress,
				metadata: {
					name: nftName,
					description: `${nftDescription} Minted by ${walletAddress.slice(
						0,
						8
					)}...${walletAddress.slice(-4)} on Fucken.Me`,
					attributes: [
						{ trait_type: 'Minted By', value: walletAddress },
						{ trait_type: 'Mint Date', value: timestamp },
						{ trait_type: 'Platform', value: 'Fucken.Me' },
						{ trait_type: 'Collection', value: 'Fucken You Collection' },
					],
				},
			}
			console.log('Request body:', requestBody);
			console.log('Request body (JSON):', JSON.stringify(requestBody, null, 2))

			try {
				const res = await fetch('https://mint.fucken.me/item/mint', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(requestBody),
				})

				const raw = await res.text()
				console.log('Raw backend response:', raw)

				if (!res.ok) {
					throw new Error('Backend error: ' + raw)
				}

				let data
				try {
					data = JSON.parse(raw)
				} catch (e) {
					throw new Error('Response is not JSON: ' + e.message)
				}

				if (!data.transaction) {
					throw new Error('No transaction in backend response')
				}

				console.log('NFT Minted:', data)
				setResult(data)
				setStatus('NFT minted successfully!')
			} catch (err) {
				console.error('Minting failed:', err)
				setStatus('Error: ' + err.message)
			}
		} catch (err) {
			console.error('Main mint error:', err)
			setStatus('Error: ' + err.message)
		} finally {
			setLoading(false)
		}
	}
	
	const handleSignAndSend = async transaction => {
		console.log('Send TX:', transaction)
		try {
			await tonConnectUI.sendTransaction(transaction)
			setStatus('Transaction sent to wallet!')
		} catch (err) {
			console.error('Send transaction error:', err)
			setStatus('Send error')
		}
	}

	return (
		<>
			{!walletAddress && (
				<div className='preview-box'>
					<p className='preview-label' style={{ color: '#ff4444' }}>
						🚫 Please connect your wallet to mint an NFT
					</p>
				</div>
			)}

			{walletAddress && (
				<>
					<div className='hero'>
						<div className='hero-text'>
							<h1>Mint your NFT</h1>
							<p>Choose an image you want to mint as NFT on TON.</p>

							<label
								className='mint-button'
								style={{ display: 'inline-block', cursor: 'pointer' }}
							>
								📸 Take a photo or choose from gallery
								<input
									type='file'
									accept='image/*'
									capture='environment'
									style={{ display: 'none' }}
									onChange={handleFileChange}
									onClick={e => (e.target.value = null)}
								/>
							</label>

							<label
								className='mint-button'
								style={{ display: 'inline-block', cursor: 'pointer' }}
							>
								🗂️ Upload an image
								<input
									type='file'
									accept='image/*'
									style={{ display: 'none' }}
									onChange={handleFileChange}
									onClick={e => (e.target.value = null)}
								/>
							</label>
						</div>
					</div>

					{selectedFile && (
						<div className='preview-box'>
							<div className='preview-header'>
								<p className='preview-label'>
									✅ Selected: <br />
									{selectedFile.name}
								</p>
								<button
									className='remove-button'
									onClick={() => setSelectedFile(null)}
									disabled={loading}
								>
									✖
								</button>
							</div>

							<img
								src={URL.createObjectURL(selectedFile)}
								alt='preview'
								className='preview-image'
							/>
							<input
								type='text'
								placeholder='Enter NFT name'
								className='nft-name-input'
								value={nftName}
								onChange={handleNameChange}
								disabled={loading}
							/>
							<textarea
								placeholder='Enter NFT description'
								className='nft-desc-input'
								value={nftDescription}
								onChange={e => setNftDescription(e.target.value)}
								rows={3}
								maxLength={300}
								disabled={loading}
							/>

							<button
								className='mint-button mint-now'
								disabled={!isValidName || loading}
								onClick={handleMint}
							>
								{loading ? '⏳ Minting...' : '🚀 Mint now'}
							</button>
							{status && (
								<div
									style={{
										marginTop: 16,
										color: status.startsWith('Error') ? '#ff4444' : '#44cc77',
									}}
								>
									{status}
								</div>
							)}
							{result && (
								<div style={{ marginTop: 24 }}>
									<h3>NFT Minted Successfully!</h3>
									<p>
										<strong>NFT Index:</strong> #{result.item_index}
									</p>
									<p>
										<strong>NFT ID:</strong> {result.nft_id}
									</p>
									<p>
										<strong>Image:</strong>{' '}
										<a href={result.image_url} target='_blank' rel='noreferrer'>
											View on IPFS
										</a>
									</p>
									<p>
										<strong>Metadata:</strong>{' '}
										<a
											href={result.metadata_url}
											target='_blank'
											rel='noreferrer'
										>
											View on IPFS
										</a>
									</p>
									<p>
										<strong>Image Hash:</strong> {result.ipfs?.image_hash}
									</p>
									<p>
										<strong>Metadata Hash:</strong> {result.ipfs?.metadata_hash}
									</p>
									<br />
									<p>
										<em>
											Note: It may take a few moments for the NFT to appear on
											the blockchain.
										</em>
									</p>
								</div>
							)}
						</div>
					)}
				</>
			)}
			{result && result.transaction && (
				<button
					className='mint-button'
					style={{ marginTop: 16 }}
					onClick={() => handleSignAndSend(result.transaction)}
				>
					Sign the transaction in your wallet
				</button>
			)}
		</>
	)
}
