import React from 'react'

const leadTypeWriter = () => {
    var txt = 'Sistem Pengurusan Emas bersepadu, rangkaian akses sistem untuk anda!';
    return txt
}

const Logout = (props) => {
    return <div onClick={() => props.auth.keycloak.logout()}>logout</div>
}

const Welcome = (props) => {
        let auth = props.auth
        return (
            <div className="jumbotron">
                <h1 className="display-3">Hi, <i>{auth.tokenParsed.preferred_username}</i>!</h1>
                <p className="lead">{ leadTypeWriter() }</p>
                <Logout {...props} />
            </div>
        )
}

export default Welcome