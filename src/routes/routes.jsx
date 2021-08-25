import { Route } from "react-router-dom";
import Pro from '../components/pro';
import UnPro from '../components/unPro';
import Links from '../components/links'
const Routes = ({ auth }) => {

    return (
        <>
            <Route
                exact
                path="/"
                render={() => <Links />}
            />
            <Route
                exact
                path="/protected"
                render={() => <Pro />}
                auth={auth}
            />
            <Route
                exact
                path="/unprotected"
                render={() => <UnPro/>}
            />
        </>
    )
}

export default Routes;