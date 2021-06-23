import { useContext } from "react";
import { AuthContext } from "../components/AuthContextProvider";

export const useAuth = () => {
	const value = useContext(AuthContext);

	return value;
};
