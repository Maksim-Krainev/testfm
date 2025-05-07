import { useEffect, useState } from 'react'
import { tonConnectUI } from '../../tonConnectUI'
import './Mint.css'

export default function Mint() {
	const [selectedFile, setSelectedFile] = useState(null)
	const [walletStatus, setWalletStatus] = useState('loading')

	// Перевіряємо авторизацію через onStatusChange
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

	const handleFileChange = e => {
		const file = e.target.files[0]
		setSelectedFile(file)
		console.log('📁 Selected file:', file)
	}

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
								>
									✖
								</button>
							</div>

							<img
								src={URL.createObjectURL(selectedFile)}
								alt='preview'
								className='preview-image'
							/>

							<button className='mint-button mint-now'>🚀 Mint now</button>
						</div>
					)}
				</>
			)}
		</>
	)
}
