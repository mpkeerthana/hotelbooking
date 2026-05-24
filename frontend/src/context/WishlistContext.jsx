import { createContext, useState } from 'react';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (hotel) => {
    if (!wishlist.find((h) => h.id === hotel.id)) {
      setWishlist([...wishlist, hotel]);
    }
  };

  const removeFromWishlist = (hotelId) => {
    setWishlist(wishlist.filter((h) => h.id !== hotelId));
  };

  const isInWishlist = (hotelId) => {
    return wishlist.some((h) => h.id === hotelId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
