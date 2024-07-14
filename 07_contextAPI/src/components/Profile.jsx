import { useContext } from "react";
import UserContext from "../context/UserContext";
export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Please Login</h1>;
  return (
    <>
      <h1>Welcome to Profile: {user.username}</h1>
      <h3>Password : {user.password}</h3>
    </>
  );
}
