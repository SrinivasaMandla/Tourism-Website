import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Tours from './Components/Tours';
import Booking from './Components/Booking';
import SearchResults from './Components/SearchResults';
import { AuthProvider } from './Components/Authentication';
import BookSuccess from './Components/BookSuccess';

export default function Router() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tours/:id" element={<Booking />} />
        <Route path="/Booking/successful" element={<BookSuccess/>}/>
        <Route path="/tours/search" element={<SearchResults />} />
      </Routes>
      </AuthProvider>
    </>
  )
}
