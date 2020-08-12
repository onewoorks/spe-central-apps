import React from 'react'

import AppsBox from '../components/apps_box'

const PageMain = (props) => {
    const [ apps, setApps ] = React.useState([])
    const [ showApps, setShowApps ] = React.useState([])
    const [ isMeta, setIsMeta ] = React.useState(false)
    const [ openUrl, setOpenUrl ] = React.useState('')
    const [ icon, setIcon ] = React.useState('')

    React.useEffect(()=>{
        setApps(props.allowed_apps)
        setShowApps(props.allowed_apps)
    },[props])

    const ListApps = (props) => {
            var app_list = showApps.map((app, index) => {
            return <AppsBox 
                        key={index} 
                        apps={app} 
                        showSub={()=>showSub(app.domain)} 
                        is_meta={isMeta} 
                        icon={icon}
                        openDomain={()=>openDomain(openUrl)} 
                        {...props} />
        })
        return app_list
    }

    const showSub = (domain) => {
        let filter_apps = apps.filter(x => x.domain === domain)
        setIsMeta(true)
        setOpenUrl(filter_apps[0].link)
        setIcon(filter_apps[0].icon)
        if(typeof filter_apps[0].meta !== 'undefined'){
            setShowApps(filter_apps[0].meta.allowed)
        } else {
            window.location.href = filter_apps[0].link
        }
    }

    const openDomain = (domain_link) => window.location.href = domain_link

    return (
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 justify-content-center">
            <ListApps {...props} is_meta={isMeta}/>
        </div>
    )
}

export default PageMain
