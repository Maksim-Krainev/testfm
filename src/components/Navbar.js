import { useState, useEffect } from 'react'
import './Navbar.css'
import { tonConnect } from './tonConnect' 

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [wallet, setWallet] = useState(null)

	const toggleMenu = () => setMenuOpen(!menuOpen)

	useEffect(() => {
		const unsub = tonConnect.onStatusChange(wallet => {
			setWallet(wallet)
			console.log('Connected wallet:', wallet)
			console.log('Telegram WebApp:', window.Telegram?.WebApp)

		})
		return () => unsub()
	}, [])

	const connect = async () => {
		await tonConnect.connect()
	}

	return (
		<nav className='navbar'>
			<div className='navbar-logo'>Fucken Me</div>

			<div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<span />
				<span />
				<span />
			</div>

			<ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
				<li>
					<a href='#home' onClick={() => setMenuOpen(false)}>
						Home
					</a>
				</li>
				<li>
					<a href='#nfts' onClick={() => setMenuOpen(false)}>
						NFT
					</a>
				</li>
				<li>
					<a href='#about' onClick={() => setMenuOpen(false)}>
						About Us
					</a>
				</li>
				<li className='wallet-button-wrapper'>
					<button className='wallet-button' onClick={connect}>
						{wallet?.account?.address
							? `${wallet.account.address.slice(0, 6)}...`
							: 'Connect Wallet'}
					</button>
				</li>
			</ul>
		</nav>
	)
}
