import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tonConnectUI } from '../../tonConnectUI'
import Telegram from '@twa-dev/sdk'
import './Mint.css'

export default function Mint() {
	const navigate = useNavigate()
	const [isMobile, setIsMobile] = useState(false)
	const [selectedFile, setSelectedFile] = useState(null)

	useEffect(() => {
		if (!tonConnectUI.account?.address) {
			navigate('/')
		}
	}, [navigate])

	useEffect(() => {
		Telegram.ready(() => {
			const platform = Telegram.WebApp.platform
			setIsMobile(platform === 'android' || platform === 'ios')
		})
	}, [])

	const handleFileChange = e => {
		const file = e.target.files[0]
		setSelectedFile(file)
		console.log('📁 Selected file:', file)
	}

	return (
		<div className='hero'>
			<div className='hero-text'>
				<h1>Mint your NFT</h1>
				<p>Choose an image you want to mint as NFT on TON.</p>

				{isMobile ? (
					<label>
						<input
							type='file'
							accept='image/*'
							capture='environment'
							style={{ display: 'none' }}
							onChange={handleFileChange}
						/>
						<button className='mint-button'>
							📸 Take a photo or choose from gallery
						</button>
					</label>
				) : (
					<label>
						<input
							type='file'
							accept='image/*'
							style={{ display: 'none' }}
							onChange={handleFileChange}
						/>
						<button className='mint-button'>🗂️ Upload an image</button>
					</label>
				)}

				{selectedFile && (
					<div style={{ marginTop: '1rem' }}>
						<p>✅ Selected: {selectedFile.name}</p>
						<img
							src={URL.createObjectURL(selectedFile)}
							alt='preview'
							style={{
								maxWidth: '100%',
								marginTop: '1rem',
								border: '3px solid #ff7722',
							}}
						/>
					</div>
				)}
			</div>

			<div className='hero-image'>
				<img
					className='main-guy'
					src='https://media.tenor.com/svWZcxwx2HAAAAAi/peepo-pixel-peepo.gif'
					alt='nft-guy'
				/>
			</div>
		</div>
	)
}
