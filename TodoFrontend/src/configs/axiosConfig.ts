import axios from "axios";
import React, { useContext } from "react";
import {control} from "../utils/control.tsx";

const baseUrl = "http://localhost:3333/todo/";

const timeout = 15000;
export const userConfig = axios.create({
  baseURL: baseUrl,
  timeout: timeout
})

export const siteConfig = axios.create({
  baseURL: baseUrl,
  timeout: timeout,
  headers: { 'Authorization': 'Bearer ' + control()?.jwt }
})


export const axiosConfig = axios.create({
  baseURL: baseUrl,
});

const AxiosContext = React.createContext(axiosConfig);

export const useAxios = () => useContext(AxiosContext);
