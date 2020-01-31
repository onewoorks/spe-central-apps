import React from 'react'

import AppsBox from '../components/apps_box'

let allowed_apps = [
    {
        name: 'inventory',
        link: 'https://inventory.pengurusanemas.my',
        icon: 'https://apps_icon.onewoorks-solutions.com/icon/inventory.png'
    },
    {
        name: 'Customer Relation',
        link: 'https://crm.pengurusanemas.my',
        icon: 'https://apps-icon.onewoorks-solutions.com/icon/crm.png',
    },
    {
        name: 'ZAK',
        link: 'https://zak.pengurusanemas.my',
        icon: 'https://apps-icon.onewoorks-solutions.com/icon/zak.png',
    },
    {
        name: 'Accounting',
        link: 'https://accounting.pengurusanemas.my',
        icon: 'https://apps-icon.onewoorks-solutions.com/icon/accounting.png',
    },
    {
        name: 'Website',
        link: 'https://websitekedai.com',
        icon: '',
    },
    {
        name: 'Human Resource',
        link: 'https://hr.pengurusanemas.my',
        icon: ''
    }
]

export default class PageMain extends React.Component{


    list_apps = () => {
        let apps = allowed_apps
        var app_list =  apps.map((app, index)=>{
            return <AppsBox key={index} apps={app} />
        })
        return app_list
    }

    render(){
        return(
        <div className='row row-cols-md-4'>{this.list_apps()}</div>
        )
    }
}