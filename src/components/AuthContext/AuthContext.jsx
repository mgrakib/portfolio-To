import { createContext, useState } from "react";

export const AuthContext = createContext(1);

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState('home');
    const authInfo = {
        user, setuser
    }

    // console.log(user)
    return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider