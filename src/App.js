import { useEffect } from 'react'
import Telegram from '@twa-dev/sdk'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import './App.css'

function App() {
	useEffect(() => {
		Telegram.ready()
		Telegram.expand()
	}, [])

	return (
		<div className='App'>
			<Navbar />
			<Home />
		</div>
	)
}

export default App
