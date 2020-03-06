import React from 'react'

const LogoutBox = (props) => {
    return (
        <div onClick={()=> props.logout.logout() } className="col-12 text-center ">
            <div className="card mb-4 app-item">
                <div className="card-body">
                    <img
                        alt=""
                        src={props.apps.icon}
                        className="img-fluid"
                        style={{ maxHeight: 100 }}
                    />
                </div>

                <div className="card-footer text-uppercase bg-danger text-light" >
                    {props.apps.name}
                </div>
            </div>
        </div>
    )
}

const NormalBox = (props) => {
    return (
        <div className="col-12 text-center">
            <div className="card mb-4 app-item">
                <div className="card-body">
                    <img
                        alt=""
                        src={props.apps.icon}
                        className="img-fluid"
                        style={{ maxHeight: 100 }}
                    />
                </div>

                <div className="card-footer text-uppercase">
                    {props.apps.name}
                </div>
            </div>
        </div>
    )
}

const AppsBox = props => {
    if(props.apps.name.toLowerCase() === 'logout'){
        return <LogoutBox {...props} />
    } else {
        return <NormalBox {...props} />
    }   
}

export default AppsBox
