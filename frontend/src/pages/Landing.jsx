import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, MapPin, Calendar, Users, Star, Zap, Lock, CheckCircle, TrendingUp } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import TopNav from '../components/layout/TopNav';
import heroImg from '../assets/hero.png';
import kochiImg from '../assets/destination-kochi.png';
import munnarImg from '../assets/destination-munnar.png';
import goaImg from '../assets/destination-goa.png';
import bangaloreImg from '../assets/destination-kochi.png';
import luxuryParkImg from '../assets/hotel-luxury-park.png';
import seasideResortImg from '../assets/hotel-seaside.png';
import mountainViewImg from '../assets/hotel-luxury-park.png';
import urbanOasisImg from '../assets/hotel-seaside.png';

export default function Landing() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate('/explore?search=' + searchQuery);
    }
  };

  const handleNewsletterSubmit = () => {
    setShowNewsletterSuccess(true);
    setEmail('');
    setTimeout(() => setShowNewsletterSuccess(false), 3000);
  };

  const destinations = [
    { name: 'Kochi', count: '245 hotels', image: kochiImg },
    { name: 'Munnar', count: '128 hotels', image: munnarImg },
    { name: 'Goa', count: '456 hotels', image: goaImg },
    { name: 'Bangalore', count: '312 hotels', image: bangaloreImg },
  ];

  const featuredHotels = [
    { id: 1, name: 'Luxury Park Hotel', price: '₹3,500', rating: 4.8, image: luxuryParkImg },
    { id: 2, name: 'Seaside Resort', price: '₹2,800', rating: 4.6, image: seasideResortImg },
    { id: 3, name: 'Mountain View Inn', price: '₹2,200', rating: 4.7, image: mountainViewImg },
    { id: 4, name: 'Urban Oasis', price: '₹4,100', rating: 4.9, image: urbanOasisImg },
  ];

  const whyChooseUs = [
    { icon: Zap, title: 'Instant Booking', desc: 'Book your stay in seconds' },
    { icon: TrendingUp, title: 'Best Price Guarantee', desc: 'Lowest rates on all hotels' },
    { icon: Lock, title: 'Secure Payments', desc: 'Safe & encrypted transactions' },
    { icon: CheckCircle, title: 'Verified Reviews', desc: 'Real guest experiences' },
  ];

  const reviews = [
    { name: 'Priya Sharma', rating: 5, text: 'Amazing experience! Found the perfect hotel in minutes. Highly recommended! 🙌' },
    { name: 'Raj Kumar', rating: 5, text: 'Best platform for hotel bookings. Great deals and excellent customer service!' },
    { name: 'Neha Patel', rating: 4, text: 'Very user-friendly interface. Will definitely book again for my next vacation.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <TopNav />
      {/* ========== HERO SECTION ========== */}
      <section 
        className="relative h-screen bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Find & Book Your <br /> Perfect Stay in Seconds
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl animate-fade-in-delay">
            Discover amazing hotels, resorts, and stays at the best prices. Start your next adventure today!
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 col-span-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Where to go?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full outline-none text-gray-800 placeholder-gray-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <input type="date" className="w-full outline-none text-gray-800" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <Users className="w-5 h-5 text-blue-600" />
                  <select className="outline-none text-gray-800 bg-transparent">
                    <option>2 Guests</option>
                    <option>1 Guest</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Search Hotels
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/explore')}
            className="group flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Explore Hotels
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ========== POPULAR DESTINATIONS ========== */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Popular Destinations</h2>
          <p className="text-gray-600 text-center mb-12">Explore the most sought-after locations</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-2xl font-bold">{dest.name}</h3>
                  <p className="text-blue-200">{dest.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED HOTELS ========== */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Hotels</h2>
          <p className="text-gray-600 text-center mb-12">Our most loved properties</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{hotel.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{hotel.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{hotel.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">View →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center mb-12">We're committed to making your stay perfect</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== REVIEWS / TESTIMONIALS ========== */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What Guests Say</h2>
          <p className="text-gray-600 text-center mb-12">Real experiences from real travelers</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12">Three simple steps to your perfect stay</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Search Hotel', desc: 'Enter location, dates & guests' },
              { num: '2', title: 'Select Room', desc: 'Choose your preferred room type' },
              { num: '3', title: 'Book Instantly', desc: 'Confirm and pay securely' },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OFFERS / DEALS ========== */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Special Offers</h2>
          <p className="text-blue-100 mb-12">Limited time deals on your favorite hotels</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Flat 20% Off', code: 'SUMMER20' },
              { title: 'Free Breakfast', code: 'BREAKFAST' },
              { title: 'Book 2, Save 15%', code: 'COUPLE15' },
            ].map((offer, idx) => (
              <div
                key={idx}
                className="bg-white/20 backdrop-blur-md border border-white/30 p-8 rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <code className="text-xl bg-white/20 px-4 py-2 rounded-lg inline-block">{offer.code}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center border-2 border-blue-200">
          <h2 className="text-4xl font-bold mb-4">Ready to Plan Your Next Trip?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Join thousands of travelers who found their perfect stay with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/explore')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
            >
              Create Account
            </button>
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-20 px-4 md:px-8 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get Travel Deals</h2>
          <p className="text-gray-300 mb-8">Subscribe to our newsletter for exclusive offers and travel tips</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full outline-none text-gray-900"
            />
            <button
              onClick={handleNewsletterSubmit}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Subscribe
            </button>
          </div>

          {showNewsletterSuccess && (
            <p className="text-green-400 mt-4">✓ Thank you for subscribing!</p>
          )}
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-950 text-gray-300 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">StayHub</h3>
              <p className="text-sm">Your trusted platform for finding and booking perfect stays.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Cancellation Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition">Facebook</a>
                <a href="#" className="hover:text-white transition">Twitter</a>
                <a href="#" className="hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2024 StayHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
