import { Navigate, useLocation } from "react-router-dom";

// Day 4 Spec: Simulated auth - just store username in localStorage
export function getAuthUser() {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  return token && user ? JSON.parse(user) : null;
}

export function fakeLogin(username) {
  const user = {
    id: 1,
    name: "Leanne Graham",
    username: username || "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031",
    website: "hildegard.org",
    company: { name: "Romaguera-Crona" },
    address: { city: "Gwenborough", street: "Kulas Light", zipcode: "92998-3874" },
  };
  localStorage.setItem("token", "demo-token-123");
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

export function fakeLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export default function ProtectedRoute({ children }) {
  const user = getAuthUser();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
}