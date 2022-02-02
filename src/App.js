import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import CourseMaterial from './components/CourseMaterial'
import ContactInstructor from './components/ContactInstructor'
import AboutCourse from './components/AboutCourse'
import Footer from './components/Footer'

function App() {
	return (
		<Router>
			<NavigationBar />
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutCourse />} />
					<Route path='/course-material' element={<CourseMaterial />} />
					<Route path='/contact-instructor' element={<ContactInstructor />} />

				</Routes>
			</div>
			<Footer />

		</Router>
	)
}

export default App
