'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Truck, 
  Shield, 
  Award, 
  Heart,
  Menu,
  X,
  CheckCircle,
  Clock,
  Users,
  Smartphone,
  Download,
  PlayCircle,
  ArrowRight,
  Zap
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className={`flex items-center justify-between transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            <div className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Ghanshyam Murti Bhandar</h1>
                <p className="text-xs text-gray-600">Divine Idols & Spiritual Items</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105">About</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105">Products</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105">Contact</button>
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Shop Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 transform rotate-180 transition-transform duration-300" /> : <Menu className="w-6 h-6 transition-transform duration-300" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className={`md:hidden mt-4 pb-4 border-t transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-orange-600 transition-all duration-300 hover:translate-x-2">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-orange-600 transition-all duration-300 hover:translate-x-2">About</button>
                <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-orange-600 transition-all duration-300 hover:translate-x-2">Products</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-orange-600 transition-all duration-300 hover:translate-x-2">Contact</button>
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 w-full transform hover:scale-105 transition-all duration-300">
                  Shop Now
                </Button>
              </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-orange-100 via-red-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div>
                <Badge className="bg-orange-100 text-orange-800 mb-4 animate-pulse">Trusted Since 2010</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Divine <span className="text-orange-600">Murtis</span> for Your <span className="text-red-600">Sacred</span> Journey
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mt-6">
                  Discover premium quality car dashboard murtis and spiritual items that bring divine blessings to your daily travels and home.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
                  Explore Collection
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 transform hover:scale-105 transition-all duration-300 group">
                  <PlayCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Our Story
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 animate-bounce">10K+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 animate-bounce" style={{animationDelay: '0.1s'}}>500+</p>
                  <p className="text-sm text-gray-600">Products</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 animate-bounce" style={{animationDelay: '0.2s'}}>15+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hindu deity statues"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-2xl transform rotate-6 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Download Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Our Mobile App</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Shop spiritual items on the go! Get exclusive app-only deals and faster checkout.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Lightning Fast</h3>
                  <p className="text-white/80">Quick browse and instant checkout</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Exclusive Offers</h3>
                  <p className="text-white/80">App-only discounts and deals</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Secure Payments</h3>
                  <p className="text-white/80">Safe and encrypted transactions</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src="https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Mobile app preview"
                  className="w-48 h-96 object-cover rounded-3xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Download Now</h3>
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center justify-center space-x-3">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <div className="text-left">
                    <p className="text-xs text-gray-300">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </div>
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center justify-center space-x-3">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <div className="text-left">
                    <p className="text-xs text-green-200">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </div>
              </Button>
              <div className="text-center pt-4">
                <p className="text-white/70 text-sm">
                  ⭐ 4.8/5 rating with 10,000+ downloads
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Free Shipping</h3>
              <p className="text-gray-600 text-sm">Free delivery on orders above ₹999</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% secure payment methods</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">Authentic Products</h3>
              <p className="text-gray-600 text-sm">Certified genuine spiritual items</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Premium quality guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="bg-orange-100 text-orange-800 mb-4">Our Story</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Ghanshyam Murti Bhandar</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                For over 15 years, Ghanshyam Murti Bhandar has been a trusted name in providing premium quality religious items and spiritual artifacts. Founded with a mission to bring divine blessings into every home and journey.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We specialize in handcrafted car dashboard murtis, home temple accessories, and spiritual items that resonate with your faith and devotion. Our products are sourced from skilled artisans who understand the sanctity and significance of each piece.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-gray-900">10,000+</span>
                  </div>
                  <p className="text-gray-600 text-sm">Satisfied Customers</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-gray-900">15+ Years</span>
                  </div>
                  <p className="text-gray-600 text-sm">Of Experience</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Religious statues"
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3889862/pexels-photo-3889862.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Hindu temple"
                className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Our Products</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Divine Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collection of spiritual items and murtis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-orange-100">
              <CardHeader className="p-0">
                <img
                  src="https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Car Dashboard Murtis"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Car Dashboard Murtis</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Premium quality small murtis perfect for car dashboards. Available in various deities.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">₹299 onwards</span>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-300">View All</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-red-100">
              <CardHeader className="p-0">
                <img
                  src="https://images.pexels.com/photos/3889862/pexels-photo-3889862.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Home Temple Items"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Home Temple Items</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Complete range of temple accessories including diyas, incense holders, and more.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-red-600">₹199 onwards</span>
                  <Button size="sm" className="bg-red-500 hover:bg-red-600 transform hover:scale-105 transition-all duration-300">View All</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-yellow-100">
              <CardHeader className="p-0">
                <img
                  src="https://images.pexels.com/photos/5128071/pexels-photo-5128071.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Spiritual Accessories"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Spiritual Accessories</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Rudraksh, malas, spiritual books, and other divine accessories for daily worship.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-yellow-600">₹149 onwards</span>
                  <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300">View All</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Excellent quality murtis for car dashboard. The Ganesha murti I bought brings positive energy during my daily commute. Highly recommended!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">R</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                  <p className="text-sm text-gray-600">Mumbai</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Amazing collection and fast delivery. The home temple items are beautiful and authentic. Will definitely order again!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold">P</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Delhi</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Trusted seller with genuine products. The spiritual accessories are of premium quality. Great customer service too!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Amit Patel</p>
                  <p className="text-sm text-gray-600">Ahmedabad</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help you find the perfect spiritual items
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@ghanshyammurtibhandar.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">123 Temple Street, Spiritual Market,<br />New Delhi - 110001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                  <p className="text-orange-600 font-medium">Festival days: Extended hours</p>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 hover:border-orange-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 hover:border-orange-300" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 hover:border-orange-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 hover:border-orange-300"></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Ghanshyam Murti Bhandar</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for authentic spiritual items and car dashboard murtis since 2010.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
                  <span className="text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
                  <span className="text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
                  <span className="text-xs font-bold">i</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">About Us</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Products</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Car Dashboard Murtis</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Home Temple Items</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Spiritual Accessories</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Prayer Items</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('terms')} className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Terms & Conditions</button></li>
                <li><button onClick={() => scrollToSection('privacy')} className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Privacy Policy</button></li>
                <li><button onClick={() => scrollToSection('refund')} className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Return & Refund</button></li>
                <li><a href="#" className="hover:text-orange-400 transition-all duration-300 hover:translate-x-2">Shipping Policy</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 Ghanshyam Murti Bhandar. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Secured by</span>
              <div className="flex space-x-2">
                <Badge variant="outline" className="border-green-600 text-green-400">SSL</Badge>
                <Badge variant="outline" className="border-blue-600 text-blue-400">Trusted</Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms & Conditions Section */}
      <section id="terms" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h2>
            
            <div className="prose prose-lg text-gray-700 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h3>
                <p>By accessing and using Ghanshyam Murti Bhandar's website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Product Information</h3>
                <p>All products sold by Ghanshyam Murti Bhandar are authentic spiritual items. We strive to provide accurate descriptions and images of our products. However, actual products may vary slightly due to the handcrafted nature of spiritual items.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Orders and Payment</h3>
                <p>All orders are subject to acceptance and availability. Payment must be completed before order processing. We accept various payment methods including credit cards, debit cards, UPI, and net banking through secure payment gateways.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Shipping and Delivery</h3>
                <p>We ship across India. Delivery times may vary based on location and product availability. We are not responsible for delays caused by circumstances beyond our control.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Return and Refund Policy</h3>
                <p>Items can be returned within 7 days of delivery if they are damaged or defective. Custom or personalized items cannot be returned unless damaged during shipping.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h3>
                <p>Ghanshyam Murti Bhandar shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h2>
            
            <div className="prose prose-lg text-gray-700 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This includes your name, email address, phone number, shipping address, and payment information.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
                <p>We use your information to process orders, communicate with you, improve our services, and comply with legal obligations. We may also use your information for marketing purposes with your consent.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Information Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment information is processed through secure, encrypted connections.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies and Tracking</h3>
                <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Third-Party Services</h3>
                <p>We may use third-party services for payment processing, shipping, and analytics. These services have their own privacy policies, and we encourage you to review them.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at info@ghanshyammurtibhandar.com or call +91 98765 43210.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return & Refund Policy Section */}
      <section id="refund" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Return & Refund Policy</h2>
            
            <div className="prose prose-lg text-gray-700 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Return Eligibility</h3>
                <p>Items can be returned within 7 days of delivery if they are damaged, defective, or significantly different from the description. Items must be in original condition with all packaging and accessories.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Non-Returnable Items</h3>
                <p>The following items cannot be returned: personalized or custom-made items, items damaged by misuse, items without original packaging, and items used in religious ceremonies.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Return Process</h3>
                <p>To initiate a return, contact our customer service within 7 days of delivery. We will provide return instructions and a return authorization number. Items must be shipped back at customer's expense unless the return is due to our error.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Refund Processing</h3>
                <p>Refunds will be processed within 7-10 business days after we receive the returned item. Refunds will be credited to the original payment method. Shipping charges are non-refundable except in cases of defective products.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Exchange Policy</h3>
                <p>We offer exchanges for defective items or if you received the wrong product. Exchanges are subject to product availability and must be requested within 7 days of delivery.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Contact for Returns</h3>
                <p>For all return-related queries, contact us at returns@ghanshyammurtibhandar.com or call our customer service at +91 98765 43210.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}