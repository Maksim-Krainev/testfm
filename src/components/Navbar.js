import { useState, useContext } from 'react'
import { tonConnectUI } from '../tonConnectUI'
import { WalletContext } from '../components/WalletContext'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const { walletAddress } = useContext(WalletContext)
	const navigate = useNavigate()
	const location = useLocation()

	const toggleMenu = () => setMenuOpen(!menuOpen)

	const connectWallet = async () => {
		await tonConnectUI.openModal()
	}

	const disconnectWallet = () => {
		tonConnectUI.disconnect()
		// walletAddress автоматично оновиться через WalletContext
	}

	const handleSectionNav = id => {
		setMenuOpen(false)

		if (location.pathname !== '/') {
			navigate('/')
			setTimeout(() => {
				const section = document.getElementById(id)
				if (section) {
					section.scrollIntoView({ behavior: 'smooth' })
				}
			}, 100)
		} else {
			const section = document.getElementById(id)
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}

	const shortenAddress = address => {
		return address.slice(0, 6) + '...' + address.slice(-4)
	}

	return (
		<nav className='navbar'>
			<div className='navbar-logo'>
				It's <br />
				Fucken Me
			</div>

			<div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<span />
				<span />
				<span />
			</div>

			<ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
				<li>
					<button
						className='navbar-link'
						onClick={() => handleSectionNav('home')}
					>
						Home
					</button>
				</li>
				<li>
					<button
						className='navbar-link'
						onClick={() => handleSectionNav('nfts')}
					>
						NFT
					</button>
				</li>
				<li>
					<button
						className='navbar-link'
						onClick={() => handleSectionNav('about')}
					>
						About Us
					</button>
				</li>
				{walletAddress && (
					<li>
						<a href='/mint' onClick={() => setMenuOpen(false)}>
							Mint NFT
						</a>
					</li>
				)}
				{walletAddress && (
					<li>
						<a href='/my-nfts' onClick={() => setMenuOpen(false)}>
							My NFTs
						</a>
					</li>
				)}
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
