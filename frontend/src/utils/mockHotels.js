import luxuryParkImg from '../assets/hotel-luxury-park.png';
import seasideResortImg from '../assets/hotel-seaside.png';
import mountainViewImg from '../assets/hotel-luxury-park.png';
import downtownBoutiqueImg from '../assets/destination-kochi.png';
import sunsetViewImg from '../assets/destination-goa.png';
import historicInnImg from '../assets/destination-munnar.png';

import roomImg from '../assets/hotel-seaside.png';
import lobbyImg from '../assets/hero.png';
import restaurantImg from '../assets/destination-goa.png';

const commonReviewList = [
  {
    author: 'John Doe',
    rating: 5,
    date: '2024-04-10',
    comment: 'Excellent stay! The staff was very friendly and attentive. Highly recommended!',
  },
  {
    author: 'Jane Smith',
    rating: 4,
    date: '2024-03-28',
    comment: 'Great location and comfortable rooms. Will visit again.',
  },
];

export const INITIAL_HOTELS = [
  {
    id: 1,
    name: 'Luxury Park Hotel',
    location: 'New York, USA',
    price: 250,
    rating: 4.8,
    reviews: 324,
    image: luxuryParkImg,
    images: [luxuryParkImg, roomImg, lobbyImg, restaurantImg],
    description: 'Experience luxury at its finest at our 5-star hotel in the heart of New York. Our world-class amenities and exceptional service will make your stay unforgettable.',
    amenities: ['WiFi', 'Pool', 'Gym', 'Parking', 'Restaurant', 'Room Service', 'Business Center', 'Air Conditioning'],
    reviewList: commonReviewList,
  },
  {
    id: 2,
    name: 'Beach Resort',
    location: 'Miami, USA',
    price: 180,
    rating: 4.5,
    reviews: 256,
    image: seasideResortImg,
    images: [seasideResortImg, roomImg, lobbyImg, restaurantImg],
    description: 'Relax by the beach in our premium resort. Enjoy the ocean breeze and world-class amenities.',
    amenities: ['WiFi', 'Beach Access', 'Restaurant', 'Pool', 'Room Service'],
    reviewList: commonReviewList,
  },
  {
    id: 3,
    name: 'Mountain Escape',
    location: 'Denver, USA',
    price: 150,
    rating: 4.3,
    reviews: 189,
    image: mountainViewImg,
    images: [mountainViewImg, roomImg, lobbyImg, restaurantImg],
    description: 'A quiet and scenic getaway in the mountains. Perfect for hiking and relaxing in nature.',
    amenities: ['WiFi', 'Gym', 'Fireplace', 'Parking', 'Restaurant'],
    reviewList: commonReviewList,
  },
  {
    id: 4,
    name: 'Downtown Boutique',
    location: 'Chicago, USA',
    price: 200,
    rating: 4.6,
    reviews: 412,
    image: downtownBoutiqueImg,
    images: [downtownBoutiqueImg, roomImg, lobbyImg, restaurantImg],
    description: 'Stay in the heart of the city in our modern boutique hotel. Close to all major attractions.',
    amenities: ['WiFi', 'Restaurant', 'Business Center', 'Gym'],
    reviewList: commonReviewList,
  },
  {
    id: 5,
    name: 'Sunset View Hotel',
    location: 'Los Angeles, USA',
    price: 220,
    rating: 4.4,
    reviews: 298,
    image: sunsetViewImg,
    images: [sunsetViewImg, roomImg, lobbyImg, restaurantImg],
    description: 'Enjoy beautiful sunsets and top-tier services at our LA location.',
    amenities: ['Pool', 'WiFi', 'Parking', 'Air Conditioning'],
    reviewList: commonReviewList,
  },
  {
    id: 6,
    name: 'Historic Inn',
    location: 'Boston, USA',
    price: 190,
    rating: 4.7,
    reviews: 356,
    image: historicInnImg,
    images: [historicInnImg, roomImg, lobbyImg, restaurantImg],
    description: 'Experience history and comfort in our charming historic inn.',
    amenities: ['WiFi', 'Room Service', 'Gym', 'Restaurant'],
    reviewList: commonReviewList,
  },
];
