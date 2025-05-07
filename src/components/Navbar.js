import { useState, useEffect } from 'react'
import { tonConnect } from '../tonConnect' // шлях до tonConnect.js
import './Navbar.css'

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [walletAddress, setWalletAddress] = useState(null)

	const toggleMenu = () => setMenuOpen(!menuOpen)

	const connectWallet = async () => {
		try {
			await tonConnect.connect()
			const address = tonConnect.wallet?.account?.address
			setWalletAddress(address)
		} catch (err) {
			console.error('Wallet connection failed:', err)
		}
	}

	// Якщо користувач уже підключений
	useEffect(() => {
		if (tonConnect.wallet) {
			setWalletAddress(tonConnect.wallet.account.address)
		}
	}, [])

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
					{walletAddress ? (
						<span className='wallet-address'>{walletAddress}</span>
					) : (
						<button className='wallet-button' onClick={connectWallet}>
							Connect Wallet
						</button>
					)}
				</li>
			</ul>
		</nav>
	)
}
