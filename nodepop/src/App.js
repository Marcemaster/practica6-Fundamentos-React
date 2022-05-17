import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/auth/RequireAuth";

import NewAdvertPage from "./pages/NewAdvertPage";
import AdvertPage from "./pages/AdvertPage";
import AdvertsPage from "./pages/AdvertsPage";

import { AuthContextProvider } from "./components/auth/context";
import { NotFoundPage } from "./components/notFound/NotFoundPage";
import Layout from "./components/layout/Layout";

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
                <Layout/>
              </RequireAuth>
            }
          >
            <Route index element={<AdvertsPage />} />
            <Route path=':advertId' element={<AdvertPage />} />
            <Route path='new' element={<NewAdvertPage />} />
          </Route>
          <Route path='/' element={<Navigate to='/adverts' />} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
