import { useMutation } from "@apollo/client";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthUser } from "../gql/mutations/auth";
import { login, logout } from "../reducers/auth";

const AuthContext = createContext({
    auth: null as any,
    login: (userData: any) => {
        return userData;
    },
    logout: () => {
    }
});

const AuthProvider = (props: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state: any) => state.auth.user);

    const [authUser] = useMutation(AuthUser, {
        update(_, { data: { authUser: userData } }) {
            dispatch(login(userData));
            navigate("/");
        }
    });

    const loginUser = (token: string) => {
        localStorage.setItem("fwToken", token);
        authUser({ variables: { token } });
    };

    const logoutUser = () => {
        localStorage.removeItem("fwToken");
        dispatch(logout());
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ auth, login: loginUser, logout: logoutUser }} {...props} />
    );
};

export { AuthContext, AuthProvider };