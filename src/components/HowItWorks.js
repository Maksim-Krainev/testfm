import './HowItWorks.css'
import step1 from '../assets/wallet.png'
import step2 from '../assets/selfy.png'
import step3 from '../assets/crypto.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function HowItWorks() {
    useEffect(() => {
			AOS.init({ duration: 800 })
	}, [])

	return (
		<section className='how-it-works' id='nfts'>
			<h2>How It Works</h2>
			<div className='steps-container'>
				<div className='steps'>
					<div className='step' data-aos='fade-up'>
						<img src={step1} alt='Connect Wallet' />
						<h3>1. Connect Wallet</h3>
						<p>Use Telegram to securely connect your crypto wallet.</p>
					</div>
					<div className='step' data-aos='flip-left'>
						<img src={step2} alt='Take Selfie' />
						<h3>2. Snap or Upload</h3>
						<p>Take a selfie or upload a photo to start the NFT magic.</p>
					</div>
					<div className='step' data-aos='fade-right'>
						<img src={step3} alt='Get NFT' />
						<h3>3. Mint NFT</h3>
						<p>Receive your unique NFT instantly.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
