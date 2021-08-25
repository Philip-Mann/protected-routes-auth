import Home from "./home"
import { Route, Redirect } from "react-router-dom";

const Pro = ({ component: Component, auth, ...rest }) => {
    
    return (
        <>
        <Route {...rest} render={(props) => (
            auth === true
                ? <Component {...props} />
                : <Redirect to="/" />
        )} />
        <Home />
        </>
    )
}

export default Pro;