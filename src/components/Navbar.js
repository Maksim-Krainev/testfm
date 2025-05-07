import { useState, useEffect } from 'react'
import { tonConnectUI } from '../tonConnectUI'
import './Navbar.css'

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [walletAddress, setWalletAddress] = useState(null)

	const toggleMenu = () => setMenuOpen(!menuOpen)

	const connectWallet = async () => {
		await tonConnectUI.openModal()
	}

	const disconnectWallet = () => {
		tonConnectUI.disconnect()
		setWalletAddress(null)
	}

	// Під час завантаження сторінки
	useEffect(() => {
		const unsub = tonConnectUI.onStatusChange(wallet => {
			if (wallet?.account?.address) {
				setWalletAddress(wallet.account.address)
			} else {
				setWalletAddress(null)
			}
		})
		return () => unsub()
	}, [])

	// Функція скорочення адреси
	const shortenAddress = address => {
		return address.slice(0, 6) + '...' + address.slice(-4)
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
					{walletAddress ? (
						<div className='wallet-info'>
							<span className='wallet-address'>
								{shortenAddress(walletAddress)}
							</span>
							<button
								className='wallet-button logout'
								onClick={disconnectWallet}
							>
								Logout
							</button>
						</div>
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
