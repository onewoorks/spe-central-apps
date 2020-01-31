import React from 'react'


export default class AppsBox extends React.Component {
    state = {
        app_name: this.props.apps.name,
        app_icon: this.props.apps.icon,
        app_link: this.props.apps.link
    }
    render(){
        return(
            <div className='col-sm-12 text-center'>
            <div className='card mb-4'>
                <div className='card-body' style={{height:120}}>
                    { this.state.app_icon}
                </div>

                <div className='card-footer'>
                    { this.state.app_name}
                </div>
            </div>
            </div>
        )
    }
}