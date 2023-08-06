import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const {user} = useContext(UserContext);
    // console.log(algo, 456);

    return (
        <>
            <h1>HomePage <small>{user?.name}</small>  </h1>
            <hr />
        </>
    )
}