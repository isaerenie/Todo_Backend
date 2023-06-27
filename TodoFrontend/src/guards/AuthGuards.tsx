import {control} from "../utils/control.tsx";
import {Navigate, useLocation} from "react-router-dom";
import {ReactNode} from "react";

export type AuthGuardProps = {
    children:ReactNode;
}

export const AuthGuard=({children}:AuthGuardProps)=>{
 const location = useLocation();
    const jwt = control()?.jwt;
    if (jwt) {
        return children;
    }
    else {
        return <Navigate to="/unauthorized" state={{from:location}}/>;
    }

}
