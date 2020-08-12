import React from 'react'
import Keycloak from 'keycloak-js'
import './App.css'

import PageMain from './pages/main'
import PageFooter from './pages/footer'

import Welcome from './components/welcome'

function App() {
    const [auth, setAuth] = React.useState({})
    React.useEffect(() => {
        const keycloak = Keycloak({
            realm: process.env.REACT_APP_SSO_REALM ,
            'url': 'https://sso.pengurusanemas.my/auth',
            'ssl-required': 'external',
            clientId: 'apps_central',
            'public-client': true,
            'confidential-port': 0,
        })
        keycloak
            .init({
                onLoad: 'login-required',
                promiseType: 'native',
                checkLoginIframe: false,
            })
            .then((authenticated) => {
                setAuth({
                    keycloak: keycloak,
                    tokenParsed: keycloak.idTokenParsed,
                    authenticated: authenticated,
                    apps: keycloak.resourcesAccess,
                })
            })
    }, [])

    if (auth.keycloak) {
        if (auth.authenticated) {
            return (
                <div className="container-fluid">
                    <div style={{ marginTop: 20 }}>
                        <Welcome auth={auth} />
                        <PageMain
                            logout={auth.keycloak}
                            allowed_apps={auth.tokenParsed.apps_allowed}
                        />
                    </div>
                    <PageFooter />
                </div>
            )
        } else {
            return <div>unable to authenticate!</div>
        }
    }

    return <div>Initializing authenthication</div>
}

export default App
