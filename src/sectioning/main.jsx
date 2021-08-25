import { Switch } from 'react-router-dom';
import Routes from '../routes/routes'

function Main({ auth }) {

    return(
        <div className="main-container">
            <Switch>
                <Routes 
                    auth={auth}
                />
            </Switch>
        </div>
    )
}

export default Main;