import { useState, useContext } from 'react';
import { 
  CardNumberElement, 
  CardExpiryElement, 
  CardCvcElement, 
  useStripe, 
  useElements 
} from '@stripe/react-stripe-js';
import Button from '../common/Button';
import { BookingContext } from '../../context/BookingContext';
import { useNavigate } from 'react-router-dom';

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

export default function PaymentForm({ booking }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const { addBooking } = useContext(BookingContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    // Bypass actual Stripe API call for prototype simulation
    // since we don't have a real Stripe account/key yet.
    
    setProcessing(true);
    setError(null);

    // Simulate backend payment processing delay
    setTimeout(() => {
      // Create new booking record
      addBooking({
        hotelId: booking.hotel.id,
        hotelName: booking.hotel.name,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        status: 'confirmed',
        total: booking.total
      });

      setProcessing(false);
      navigate('/bookings'); // Redirect to my bookings
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
        <div className="bg-white p-3 rounded-lg border border-gray-300">
          <CardNumberElement options={ELEMENT_OPTIONS} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expiration</label>
          <div className="bg-white p-3 rounded-lg border border-gray-300">
            <CardExpiryElement options={ELEMENT_OPTIONS} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
          <div className="bg-white p-3 rounded-lg border border-gray-300">
            <CardCvcElement options={ELEMENT_OPTIONS} />
          </div>
        </div>
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <Button 
        type="submit" 
        disabled={!stripe || processing} 
        className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 mt-2"
      >
        {processing ? 'Processing...' : `Pay $${booking.total}`}
      </Button>
    </form>
  );
}
