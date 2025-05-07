import { useState } from 'react'
import { useContext } from 'react'
import { WalletContext } from '../../components/WalletContext'
import './Mint.css'

export default function Mint() {
	const [selectedFile, setSelectedFile] = useState(null)
	const { walletAddress } = useContext(WalletContext)
	const [nftName, setNftName] = useState('')


	const handleFileChange = e => {
		const file = e.target.files[0]
		setSelectedFile(file)
		console.log('📁 Selected file:', file)
	}
	
	const handleNameChange = e => {
		const value = e.target.value
		const formatted = value.charAt(0).toUpperCase() + value.slice(1)
		setNftName(formatted)
	}
	const isValidName = nftName.length > 0 && /^[A-Z]/.test(nftName)

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
							/>

							<button className='mint-button mint-now' disabled={!isValidName}>
								🚀 Mint now
							</button>
						</div>
					)}
				</>
			)}
		</>
	)
}
