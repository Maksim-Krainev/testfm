import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function About() {
    useEffect(() => {
                AOS.init({ duration: 800 })
        }, [])
	return (
		<section className='about' id='about'>
			<h2>About Us</h2>
			<p className='about-text' data-aos='fade-up'>
				<svg
					viewBox='0 0 32 32'
					id='camera_Dark'
					data-name='camera/Dark'
					xmlns='http://www.w3.org/2000/svg'
					fill='#000000'
				>
					<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
					<g
						id='SVGRepo_tracerCarrier'
						stroke-linecap='round'
						stroke-linejoin='round'
					></g>
					<g id='SVGRepo_iconCarrier'>
						{' '}
						<path
							id='Path'
							d='M0,0H32V10H30V8H28V4H22V8H0Z'
							fill='#1a1a1a'
						></path>{' '}
						<path
							id='Path-2'
							data-name='Path'
							d='M22,0h6V4h2V6H24V8H22v2h2v6H22v2H16V16H14V10h2V8H14V6H10v4H2V22H14V20H24v2h6V6h2V24H0V4H22Z'
							transform='translate(0 4)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-3'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(24 6)'
							fill='#1a1a1a'
						></path>{' '}
						<path
							id='Path-4'
							data-name='Path'
							d='M0,0H4V2H0Z'
							transform='translate(4 10)'
							fill='#1a1a1a'
						></path>{' '}
						<path
							id='Path-5'
							data-name='Path'
							d='M0,0H4V2H2V4H0Z'
							transform='translate(10 10)'
							fill='#1a1a1a'
						></path>{' '}
						<path
							id='Path-6'
							data-name='Path'
							d='M0,0H6V16H0V14H2V12H4V4H2V2H0Z'
							transform='translate(24 10)'
							fill='#1a1a1a'
						></path>{' '}
						<path
							id='Path-7'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(12 12)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-8'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(14 12)'
							fill='#1a1a1a'
						></path>{' '}
						<path
							id='Path-9'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(22 12)'
							fill='#1a1a1a'
						></path>{' '}
						<path
							id='Path-10'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(24 12)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-11'
							data-name='Path'
							d='M0,0H8V8h2v2h2v2H0Z'
							transform='translate(2 14)'
							fill='#1a1a1a'
						></path>{' '}
						<path
							id='Path-12'
							data-name='Path'
							d='M0,0H2V8H0Z'
							transform='translate(10 14)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-13'
							data-name='Path'
							d='M0,0H2V6H4V8h6V6h2V0h2V8H12v2H2V8H0Z'
							transform='translate(12 14)'
							fill='#1a1a1a'
						></path>{' '}
						<path
							id='Path-14'
							data-name='Path'
							d='M0,0H2V8H0Z'
							transform='translate(26 14)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-15'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(12 22)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-16'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(24 22)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-17'
							data-name='Path'
							d='M0,0H32V4H0Z'
							transform='translate(0 28)'
							fill='#1a1a1a'
						></path>{' '}
					</g>
				</svg>
				It's Fucken Me is your portal to pixel-powered identity. We turn selfies
				into NFTs right inside Telegram — no wallets, no stress.
			</p>
			<p className='about-text' data-aos='fade-right'>
				<svg
					viewBox='0 0 32 32'
					id='boy_Light'
					data-name='boy/Light'
					xmlns='http://www.w3.org/2000/svg'
					fill='#000000'
				>
					<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
					<g
						id='SVGRepo_tracerCarrier'
						stroke-linecap='round'
						stroke-linejoin='round'
					></g>
					<g id='SVGRepo_iconCarrier'>
						{' '}
						<path
							id='Path'
							d='M0,0H12V2H8V4H6V6H4v4H2v4H0Z'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-2'
							data-name='Path'
							d='M12,0H26V2h4V4h2V8H30v2H28v2H26v4H24v2H20V16H18V14h6V12H18V10h4V8H16v2H14v2H12V22H10V20H8v6h4v6H10V28H6V26H4V24H2V20H0V14H2V10H4V6H6V4H8V2h4Z'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-3'
							data-name='Path'
							d='M0,0H6V4H4V2H0Z'
							transform='translate(26)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-4'
							data-name='Path'
							d='M8,0h6V2H10V4h6V6H10V8h2v2h4V8h2v2h2v2H18v2H16v2h2v4H12v2h2v2H4V18H0V12H2v2H4V4H6V2H8Z'
							transform='translate(8 8)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-5'
							data-name='Path'
							d='M6,0H8V24H0V22H2V20H4V12H6V10H4V8H2V4H4V2H6Z'
							transform='translate(24 8)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-6'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(26 16)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-7'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(28 18)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-8'
							data-name='Path'
							d='M0,0H2V4H4V6H6V8h4v4H0Z'
							transform='translate(0 20)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-9'
							data-name='Path'
							d='M2,0H4V8H2V4H0V2H2Z'
							transform='translate(24 20)'
							fill='#ffffff'
						></path>{' '}
						<path
							id='Path-10'
							data-name='Path'
							d='M0,0H6V2H4V4H2V2H0Z'
							transform='translate(20 28)'
							fill='#ffffff'
						></path>{' '}
					</g>
				</svg>
				We believe everyone deserves to be collectible. Our app makes it stupid
				simple — snap, mint, done.
			</p>
			<p className='about-text' data-aos='fade-left'>
				<svg
					viewBox='0 0 32 32'
					id='blackquestionmark_Light'
					data-name='blackquestionmark/Light'
					xmlns='http://www.w3.org/2000/svg'
					fill='#ffffff'
					stroke='#ffffff'
				>
					<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
					<g
						id='SVGRepo_tracerCarrier'
						stroke-linecap='round'
						stroke-linejoin='round'
					></g>
					<g id='SVGRepo_iconCarrier'>
						{' '}
						<path
							id='Path'
							d='M0,0H10V2H8V4H6V6H4v6H6v2H8V12h2V10h4v4H12v6h2v2H12v2H10v4h2v2h2v2H0Z'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-2'
							data-name='Path'
							d='M6,0H16V2h2V4h2V6h2v6H20v2H18v2H16v2H14v2H12v2h2v2h2v4H14v2H12v2H10V30H8V28h2V26h2V24H8V22h2V20H8V14h2v4h2V14h2V8H12V6H6V8H4v2H6v2H4v2H2V12H0V6H2V4H4V2H6Z'
							transform='translate(4)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-3'
							data-name='Path'
							d='M4,0H16V32H0V30H2V28H4V24H2V22H0V20H2V18H4V16H6V14H8V12h2V6H8V4H6V2H4Z'
							transform='translate(16)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-4'
							data-name='Path'
							d='M0,0H6V2H0Z'
							transform='translate(10 6)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-5'
							data-name='Path'
							d='M0,0H2V2H0Z'
							transform='translate(8 8)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-6'
							data-name='Path'
							d='M0,0H6V6H4V2H0Z'
							transform='translate(10 8)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-7'
							data-name='Path'
							d='M0,0H2V6H0Z'
							transform='translate(16 8)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-8'
							data-name='Path'
							d='M0,0H2V4H0Z'
							transform='translate(14 14)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-9'
							data-name='Path'
							d='M0,0H2V4H0Z'
							transform='translate(10 24)'
							fill='#000000'
						></path>{' '}
						<path
							id='Path-10'
							data-name='Path'
							d='M0,0H4V2H2V4H0Z'
							transform='translate(12 24)'
							fill='#000000'
						></path>{' '}
					</g>
				</svg>
				Built with love by a bunch of who live and breathe Web3.
			</p>
		</section>
	)
}
