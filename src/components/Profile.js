import React, { useContext } from "react";
import Interests from "./Interests";
import {UserContext} from "../context/User"
import { ThemeContext } from "../context/Theme";

function Profile() {
  const [user, setUser] = useContext(UserContext)
  const {theme, setTheme}= useContext(ThemeContext)

  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
