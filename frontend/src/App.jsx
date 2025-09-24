import React, { useState, useEffect } from 'react';
import { Search, MapPin, ArrowRight, Star, Clock, ShoppingCart, Leaf, Heart, Users, Truck, X, Mail, Phone, Home } from 'lucide-react';

// --- Mock Data ---
const mockFoodItems = [
  {
    id: 1,
    name: 'Fresh Garden Salad',
    description: 'Mixed greens with vegetables, expires tomorrow.',
    rating: 4.8,
    portions: 4,
    donor: 'Downtown Community Center',
    distance: '0.5 miles',
    expires: 'Expires: Tomorrow 6 PM',
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Fresh'
  },
  {
    id: 2,
    name: 'Seasonal Fruit Box',
    description: 'Assorted fresh fruits, perfect condition.',
    rating: 4.9,
    portions: 6,
    donor: 'Green Valley Market',
    distance: '1.2 miles',
    expires: 'Expires: In 2 days',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Fresh'
  },
  {
    id: 3,
    name: 'Artisan Bread & Pastries',
    description: 'Fresh baked this morning, still warm.',
    rating: 4.7,
    portions: 8,
    donor: 'Corner Bakery',
    distance: '0.8 miles',
    expires: 'Expires: Today 8 PM',
    image: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Baked'
  },
  {
    id: 4,
    name: 'Hearty Prepared Meals',
    description: 'Homemade, nutritious, and ready to eat.',
    rating: 4.9,
    portions: 5,
    donor: 'The Soup Kitchen',
    distance: '2.1 miles',
    expires: 'Expires: In 3 days',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Prepared'
  },
  {
    id: 5,
    name: 'Canned Goods Assortment',
    description: 'Various canned vegetables and beans.',
    rating: 4.5,
    portions: 15,
    donor: 'SuperMart Donations',
    distance: '3.5 miles',
    expires: 'Expires: In 6 months',
    image: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Pantry'
  },
  {
    id: 6,
    name: 'Organic Milk Gallons',
    description: 'Whole milk, nearing expiration date.',
    rating: 4.6,
    portions: 3,
    donor: 'Daily Dairy Farm',
    distance: '1.5 miles',
    expires: 'Expires: Tomorrow 10 PM',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Dairy'
  }
];

// --- Reusable Components ---
const Logo = () => (
  <div className="flex items-center space-x-2 cursor-pointer">
    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
      <Leaf className="w-5 h-5 text-white" />
    </div>
    <span className="text-2xl font-bold text-gray-800">FoodShare</span>
  </div>
);

const NavLink = ({ children, onClick }) => (
  <button onClick={onClick} className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium">
    {children}
  </button>
);

const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon, type = 'button' }) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center transition-transform duration-200 transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-500",
    secondary: "bg-white text-green-600 border-2 border-green-500 hover:bg-green-50 focus:ring-green-500",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 shadow-none",
  };
  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

// --- Page Components ---

const Header = ({ setPage, onSignInClick }) => (
  <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div onClick={() => setPage('home')}>
        <Logo />
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink onClick={() => setPage('browse')}>Browse Food</NavLink>
        <NavLink onClick={() => setPage('donate')}>Donate Food</NavLink>
        <NavLink onClick={() => setPage('how-it-works')}>How It Works</NavLink>
        <NavLink onClick={() => setPage('impact')}>Impact</NavLink>
      </nav>
      <div className="flex items-center space-x-4">
        <Button onClick={onSignInClick} variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
        <Button onClick={() => setPage('donate')}>Get Started</Button>
      </div>
    </div>
  </header>
);

const HomePage = ({ setPage }) => (
  <>
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2940&auto=format&fit=crop" 
        alt="A vibrant community market with fresh produce" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/30 text-green-100 border border-green-300/50 text-sm font-medium mb-6">
          Reducing Food Waste Together
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Connect Food Donors <br /> with Those in <span className="text-green-400">Need</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-200 mb-10">
          Join our platform to reduce food waste while helping communities. Share surplus food and make a positive impact.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <Button onClick={() => setPage('donate')} className="px-8 py-4 text-lg" icon={ArrowRight}>Get Started Today</Button>
          <Button onClick={() => setPage('browse')} variant="secondary" className="px-8 py-4 text-lg" icon={Search}>Browse Available Food</Button>
        </div>
      </div>
    </section>
    <HowItWorksPage isSection={true} />
    <ImpactPage isSection={true} />
  </>
);

const FoodCard = ({ item, onClaim }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">{item.category}</span>
      </div>
      <p className="text-gray-600 mb-4 text-sm flex-grow">{item.description}</p>
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span className="flex items-center"><Star className="w-4 h-4 text-yellow-400 mr-1" /> {item.rating}</span>
        <span className="flex items-center"><ShoppingCart className="w-4 h-4 mr-1" /> {item.portions} portions</span>
      </div>
      <div className="text-sm text-gray-500 mb-4">
        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {item.donor} • {item.distance}</span>
      </div>
      <div className="text-sm font-semibold text-red-500 mb-4">
        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {item.expires}</span>
      </div>
      <Button onClick={() => onClaim(item)} className="w-full mt-auto">Claim This Food</Button>
    </div>
  </div>
);

const BrowsePage = ({ onClaim }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredItems = mockFoodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Available Near You</h1>
        <p className="text-lg text-gray-600 mb-8">Claim fresh food donations from your community.</p>
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            placeholder="Search for food..."
            className="flex-grow p-3 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-3 border-2 border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All</option>
            <option>Fresh</option>
            <option>Baked</option>
            <option>Prepared</option>
            <option>Pantry</option>
            <option>Dairy</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => <FoodCard key={item.id} item={item} onClaim={onClaim} />)
          ) : (
            <p className="text-gray-600 col-span-full text-center">No food items match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const DonatePage = ({ onDonate }) => {
  const [formData, setFormData] = useState({
    foodName: '',
    description: '',
    category: 'Fresh Produce',
    portions: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onDonate(formData);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Share Your Surplus</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Thank you for making a difference. Please fill out the details below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="foodName" className="block text-lg font-medium text-gray-700 mb-2">
                Food Item Name
              </label>
              <input
                type="text"
                id="foodName"
                value={formData.foodName}
                onChange={handleInputChange}
                placeholder="e.g., Artisan Sourdough Bread"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                placeholder="e.g., 5 loaves, baked this morning."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              >
                <option>Fresh Produce</option>
                <option>Bakery</option>
                <option>Prepared Meals</option>
                <option>Pantry Staples</option>
                <option>Dairy & Proteins</option>
              </select>
            </div>
            <div>
              <label htmlFor="portions" className="block text-lg font-medium text-gray-700 mb-2">
                Number of Portions
              </label>
              <input
                type="number"
                id="portions"
                value={formData.portions}
                onChange={handleInputChange}
                placeholder="e.g., 10"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Upload Photo</label>
              <div className="mt-2 flex justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full py-4 text-lg">
              Post Donation
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};


const HowItWorksPage = ({ isSection = false }) => (
  <section className={`py-20 ${isSection ? 'bg-gray-50' : 'bg-white'}`}>
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        A simple process to connect surplus food with local needs in three easy steps.
      </p>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
          <div className="bg-green-100 p-6 rounded-full mb-4">
            <Truck className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">1. Post a Donation</h3>
          <p className="text-gray-600">
            Individuals and businesses can easily list surplus food items, specifying details like type,
            quantity, and pickup location.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
          <div className="bg-green-100 p-6 rounded-full mb-4">
            <Users className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">2. Find Food Nearby</h3>
          <p className="text-gray-600">
            Charities, food banks, and individuals in need can browse our map and listings to find available food in
            their local area.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
          <div className="bg-green-100 p-6 rounded-full mb-4">
            <Heart className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">3. Make a Difference</h3>
          <p className="text-gray-600">
            Once a match is made, parties coordinate a pickup. You've successfully reduced waste and helped someone
            in your community.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ImpactPage = ({ isSection = false }) => (
  <section className={`py-20 ${isSection ? 'bg-white' : 'bg-gray-50'}`}>
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Together, we are creating a more sustainable and equitable food system.</p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-green-500 text-white rounded-xl shadow-lg">
          <h3 className="text-5xl font-bold">1.2M+</h3>
          <p className="mt-2 text-xl">Meals Served</p>
        </div>
        <div className="p-8 bg-green-500 text-white rounded-xl shadow-lg">
          <h3 className="text-5xl font-bold">500k+</h3>
          <p className="mt-2 text-xl">Tonnes of CO2 Saved</p>
        </div>
        <div className="p-8 bg-green-500 text-white rounded-xl shadow-lg">
          <h3 className="text-5xl font-bold">5,000+</h3>
          <p className="mt-2 text-xl">Community Partners</p>
        </div>
      </div>
    </div>
  </section>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative transform transition-all duration-300 scale-95 animate-modal-pop"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

const ClaimForm = ({ item, onSubmit }) => {
  const [formData, setFormData] = useState({ email: '', location: '', phone: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-gray-600 mb-6">
        You are claiming: <span className="font-semibold text-green-600">{item.name}</span>. Please provide your details for pickup coordination.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="relative mt-1">
            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Location</label>
          <div className="relative mt-1">
            <Home className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <div className="relative mt-1">
            <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>
        <Button type="submit" className="w-full py-3">
          Confirm Claim
        </Button>
      </div>
    </form>
  );
};

// --- Main App Component ---
export default function App() {
  const [page, setPage] = useState('home');
  const [modalState, setModalState] = useState({ isOpen: false, title: '', message: '', content: null });

  const showModal = (title, message, content = null) => {
    setModalState({ isOpen: true, title, message, content });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, title: '', message: '', content: null });
  };

  const handleOpenClaimForm = (item) => {
    showModal(`Claim "${item.name}"`, null, <ClaimForm item={item} onSubmit={handleConfirmClaim} />);
  };

  const handleConfirmClaim = (item, claimantData) => {
    console.log("Claim confirmed for:", item.name, "by", claimantData.email);
    closeModal();
    setTimeout(() => {
      showModal("Success!", `Your claim for ${item.name} has been submitted. The donor will be in touch to coordinate pickup.`);
    }, 300);
  };

  const handleDonate = (formData) => {
    showModal("Thank You!", `Your donation of "${formData.foodName}" has been posted. You are making a real difference!`);
    setPage('browse');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    closeModal();
    setTimeout(() => {
      showModal("Welcome Back!", "You have been successfully signed in.");
    }, 300);
  };

  const openSignInModal = () => {
    showModal(
      "Sign In",
      null,
      <form onSubmit={handleSignIn}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              className="w-full mt-1 p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="w-full mt-1 p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <Button type="submit" className="w-full py-3">
            Sign In
          </Button>
        </div>
      </form>
    );
  };

  const renderPage = () => {
    switch (page) {
      case 'browse':
        return <BrowsePage onClaim={handleOpenClaimForm} />;
      case 'donate':
        return <DonatePage onDonate={handleDonate} />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'impact':
        return <ImpactPage />;
      case 'home':
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Header setPage={setPage} onSignInClick={openSignInModal} />
      <main>{renderPage()}</main>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-gray-400">Reducing food waste, one meal at a time.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <button onClick={() => setPage('browse')} className="hover:text-green-400 transition-colors">
                    Browse Food
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('donate')} className="hover:text-green-400 transition-colors">
                    Donate Food
                  </button>
                </li>
                <li>
                  <button onClick={() => setPage('how-it-works')} className="hover:text-green-400 transition-colors">
                    How It Works
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>123 Green Way, Sustania</li>
                <li>contact@foodshare.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">© 2025 FoodShare. All rights reserved.</div>
        </div>
      </footer>
      <Modal isOpen={modalState.isOpen} onClose={closeModal} title={modalState.title}>
        {modalState.content ? modalState.content : <p className="text-gray-600">{modalState.message}</p>}
        {!modalState.content && (
          <Button onClick={closeModal} className="w-full mt-6">
            Got it, thanks!
          </Button>
        )}
      </Modal>
    </div>
  );
}
