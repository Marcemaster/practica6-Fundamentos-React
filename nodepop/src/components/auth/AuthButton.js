import Button from "../common/Button";

import { logout } from "../auth/service";
import { useAuth } from "./context";

function AuthButton({ className }) {
  const { isLogged, handleLogout: onLogout } = useAuth();

  const handleLogoutClick = async () => {
    if (window.confirm("Are you sure?")) {
      await logout();
      onLogout();
    }
  };

  return (
    <Button className={className} onClick={handleLogoutClick}>
      Logout
    </Button>
  );
}

export default AuthButton;
