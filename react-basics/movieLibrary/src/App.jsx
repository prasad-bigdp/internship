import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState } from "react"
import Movies from "./components/Movies"
import { Routes,Route } from "react-router-dom"
import Login from "./components/login"
import NotFound from "./components/NotFound"
import Signup from "./components/Signup"
import MoviesPage from "./pages/MoviesPage"
function App() {

	return (
		<>
			<Header/>
			<Routes>
				<Route path='' Component={MoviesPage} />
				<Route path='/login' Component={Login} />
				<Route path='/signup' Component={Signup} />
				<Route path='*' Component={NotFound} />
			</Routes>
			
			<Footer />
		</>
	)
}
export default App
