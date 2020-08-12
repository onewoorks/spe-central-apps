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
        <div className="col-12 text-center" onClick={()=>props.showSub()}>
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

const MetaBox = props => {
    return (
        <div className="col-12 text-center" onClick={()=>props.openDomain()}>
            <div className="card mb-4 app-item">
                <div className="card-body">
                    <img
                        alt=""
                        src={props.icon}
                        className="img-fluid"
                        style={{ maxHeight: 100 }}
                    />
                </div>

                <div className="card-footer text-uppercase">
                    {props.apps.domain}
                </div>
            </div>
        </div>
    )
}

const AppsBox = props => {
    if(typeof props.apps.name !== 'undefined' && props.apps.name.toLowerCase() === 'logout'){
        return <LogoutBox {...props} />
    } else {
        return (!props.is_meta) ? <NormalBox {...props} /> : <MetaBox {...props} />
    }   
}

export default AppsBox
