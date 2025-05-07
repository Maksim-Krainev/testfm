import './HeroSection.css'
import nftGuy from '../assets/nft-guy.png'

import { useRef } from 'react'


export default function HeroSection() {
    const imageRef = useRef(null)

	const handleMouseMove = e => {
		const img = imageRef.current
		const rect = img.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		const centerX = rect.width / 2
		const centerY = rect.height / 2

		const rotateX = ((y - centerY) / centerY) * -2
		const rotateY = ((x - centerX) / centerX) * 2

		img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
		img.style.transition = 'transform 0.1s ease-out'
	}

	const handleMouseLeave = () => {
		const img = imageRef.current
		img.style.transform = 'rotateX(0deg) rotateY(0deg)'
		img.style.transition = 'transform 0.3s ease'
	}

	return (
		<section
			className='hero'
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			id='home'
		>
			<div className='hero-text'>
				<h1>It's Fucken Me!</h1>
				<p>
					Fucken Me — when your selfie is worth more than you ever imagined.
				</p>
				<button>START</button>
			</div>
			<div className='hero-image'>
				<img
					src={nftGuy}
					ref={imageRef}
					alt='Pixel Guy NFT'
					className='main-guy'
				/>

				{/* Іконки навколо */}
				<img
					src='./svg/bitgem-digital-future-system-security-svgrepo-com.svg'
					className='icon icon1'
					alt='icon'
				/>
				<img
					src='./svg/cryptocurrency-digital-future-system-security-svgrepo-com.svg'
					className='icon icon2'
					alt='icon'
				/>
				<img
					src='./svg/nft-investiment-sign-non-token-svgrepo-com.svg'
					className='icon icon3'
					alt='icon'
				/>
				<img
					src='./svg/nft-sign-svgrepo-com.svg'
					className='icon icon4'
					alt='icon'
				/>
				<img
					src='./svg/sharkalert-nft-investiment-sign-animal-svgrepo-com.svg'
					className='icon icon5'
					alt='icon'
				/>
				<img
					src='./svg/whalealert-nft-investiment-sign-animal-svgrepo-com.svg'
					className='icon icon6'
					alt='icon'
				/>
			</div>
			<a href='#nfts'>
				<img
					src='./svg/down-square-svgrepo-com.svg'
					className='icon icon7'
					alt='icon'
				/>
			</a>
		</section>
	)
}
