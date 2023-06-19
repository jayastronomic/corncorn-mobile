import React, { createContext, useState, useEffect } from "react";
import { createAccount, logIn } from "../network/users";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({});
  const register = (payload) => {
    createAccount(payload)
      .then((user) => {
        setAuthUser(user);
        AsyncStorage.setItem("user", JSON.stringify(user));
      })
      .catch((e) => console.log(e));
  };

  const login = (payload) => {
    logIn(payload)
      .then((user) => {
        setAuthUser(user);
        AsyncStorage.setItem("user", JSON.stringify(user));
        console.log(user);
      })
      .catch((e) => console.log(e));
  };

  const isLoggedIn = async () => {
    try {
      let user = await AsyncStorage.getItem("user");
      user = JSON.parse(user);
      if (user) {
        setAuthUser(user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ register, authUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
