import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Telegram from '@twa-dev/sdk'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Mint from './pages/mint/Mint'
import MyNFTs from './pages/mynfts/MyNFTs'

import './App.css'

function App() {
	useEffect(() => {
		Telegram.ready()
		Telegram.expand()
	}, [])

	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/mint' element={<Mint />} />
					<Route path='/my-nfts' element={<MyNFTs />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
