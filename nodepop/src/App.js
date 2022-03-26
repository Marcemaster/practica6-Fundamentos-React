import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/auth/RequireAuth";

import NewAdvertPage from "./pages/NewAdvertPage";
import AdvertPage from "./pages/AdvertPage";
import AdvertsPage from "./pages/AdvertsPage";


import { AuthContextProvider } from "./components/auth/context";
import { NotFoundPage } from "./components/notFound/NotFoundPage";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className='App'>
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes>
          <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />

          <Route
            path='/adverts'
            element={
              <RequireAuth>
                <AdvertsPage />
              </RequireAuth>
            }
          />
          <Route
            path='/adverts/:id'
            element={
              <RequireAuth>
                <AdvertPage />
              </RequireAuth>
            }
          />
          <Route
            path='/adverts/new'
            element={
              <RequireAuth>
                <NewAdvertPage />
              </RequireAuth>
            }
          />
          <Route path='/' element={<Navigate to='/adverts' />} />
          <Route path='/404' element={<NotFoundPage/>} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
