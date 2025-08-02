import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Building2, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import OmegaHouse from './pages/OmegaHouse'
import HaleBarns from './pages/HaleBarns'
import Stretford from './pages/Stretford'
import AccessibleHousing from './pages/AccessibleHousing'
import SocialHousing from './pages/SocialHousing'
import Partners from './pages/Partners'
import Contact from './pages/Contact'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/omega-house', label: 'Omega House' },
    { path: '/accessible-housing', label: 'Accessible Housing' },
    { path: '/social-housing', label: 'Social Housing' },
    { path: '/partners', label: 'Partners' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Abihomes</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="text-lg font-semibold">Abihomes Ltd</span>
            </div>
            <p className="text-gray-400 text-sm">
              Quality property development and accessible housing specialists in Manchester.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white">Property Development</Link></li>
              <li><Link to="/accessible-housing" className="hover:text-white">Accessible Housing</Link></li>
              <li><Link to="/social-housing" className="hover:text-white">Social Housing</Link></li>
              <li><Link to="/services" className="hover:text-white">Commercial Conversions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Projects</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/omega-apartments" className="hover:text-white">Omega Apartments</Link></li>
              <li><Link to="/projects" className="hover:text-white">Residential Projects</Link></li>
              <li><Link to="/projects" className="hover:text-white">Commercial Projects</Link></li>
              <li><Link to="/projects" className="hover:text-white">Conversions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/partners" className="hover:text-white">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Abihomes Ltd. Quality Property Development & Accessible Housing.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">ISO 9001 Certified</span>
            <span className="text-xs text-gray-500">Construction Line Gold</span>
            <span className="text-xs text-gray-500">NHBC Registered</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/omega-house" element={<OmegaHouse />} />
            <Route path="/hale-barns" element={<HaleBarns />} />
            <Route path="/stretford" element={<Stretford />} />
            <Route path="/accessible-housing" element={<AccessibleHousing />} />
            <Route path="/social-housing" element={<SocialHousing />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

