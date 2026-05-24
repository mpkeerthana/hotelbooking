import { createContext, useState } from 'react';

export const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      hotelId: 1,
      hotelName: 'Luxury Park Hotel',
      checkIn: '2024-05-15',
      checkOut: '2024-05-18',
      status: 'confirmed',
    },
  ]);

  const addBooking = (booking) => {
    setBookings([...bookings, { ...booking, id: Date.now() }]);
  };

  const cancelBooking = (bookingId) => {
    setBookings(bookings.map((b) => (b.id === bookingId ? { ...b, status: 'cancelled' } : b)));
  };

  const updateBooking = (bookingId, updatedData) => {
    setBookings(bookings.map((b) => (b.id === bookingId ? { ...b, ...updatedData } : b)));
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        cancelBooking,
        updateBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
