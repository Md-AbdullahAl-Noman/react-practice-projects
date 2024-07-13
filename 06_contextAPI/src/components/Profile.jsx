import userContext from "../context/UserContext";
import { useContext } from "react";

export default function Profile() {
  const { user } = useContext(userContext);

  
      if(!user) return <h1>Please Login</h1>
        return <h1>Welcome to Profile:{user.username} </h1>
  
}
