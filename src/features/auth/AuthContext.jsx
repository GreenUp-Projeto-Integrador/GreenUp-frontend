import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { authApi, userApi } from "../../shared/api/endpoints";
import { tokens } from "../../shared/api/tokens";

const AuthContext = createContext(null);
const hasSession = () => !!(tokens.getAccess() || tokens.getRefresh());

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(hasSession());

  const logout = useCallback(() => {
    tokens.clear();
    setUser(null);
  }, []);

  useEffect(() => {
    if (!hasSession()) return;

    userApi.me()
      .then(setUser)
      .catch(logout)
      .finally(() => setLoading(false));
  }, [logout]);

  useEffect(() => {
    window.addEventListener("greenup:logout", logout);
    return () => window.removeEventListener("greenup:logout", logout);
  }, [logout]);

  const login = async (email, password) => {
    await authApi.login(email, password);
    setUser(await userApi.me());
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}