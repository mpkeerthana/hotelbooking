import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { BookingProvider } from './context/BookingContext'
import { WishlistProvider } from './context/WishlistContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BookingProvider>
          <WishlistProvider>
            <AppRoutes />
          </WishlistProvider>
        </BookingProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

