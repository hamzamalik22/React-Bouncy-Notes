import { createContext, useState, useContext, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import {ID} from 'appwrite'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(false);

  useEffect(() => {
    checkUserStatus()
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);

    try {
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      )

      let accountDetails = await account.get()

      console.log("Account Details :", accountDetails);
      setUser(accountDetails)
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const logoutUser = () => {
    account.deleteSession('current');
    setUser(null)
  };

  const registerUser = async (userInfo) => {
    setLoading(true);

    try {
        
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        userInfo.name,
      )

      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password1
      )

      let accountDetails = await account.get()
      setUser(accountDetails)

    } catch (error) {
      console.error(error)
    }


    setLoading(false);


  };

  const checkUserStatus = async () => {
    try {
        let accountDetails = await account.get()
        setUser(accountDetails)
    } catch (error) {
        
    }

    setLoading(false);

  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
