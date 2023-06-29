import axios from "axios";
import React, { useContext } from "react";
import {control} from "../utils/control.tsx";

// Apiler için base url ve timeout değerleri
const baseUrl = "http://localhost:3333/todo/api/v1/";
const baseUrl1 = "http://localhost:3333/auth/";
const timeout = 15000;

// Axios instance oluşturulması
export const userConfig = axios.create({
  baseURL: baseUrl1,
  timeout: timeout
})
export const siteConfig = axios.create({
  baseURL: baseUrl,
  timeout: timeout,
  headers: { 'Authorization': 'Bearer ' + control()?.jwt }
})

// Axios context oluşturulması ve kullanılması için custom hook oluşturulması.
const AxiosContext = React.createContext(siteConfig);
export const useAxios = () => useContext(AxiosContext);
