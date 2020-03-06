import React from 'react'

import AppsBox from '../components/apps_box'

let allowed_apps = [
    {
        name: 'Inventory',
        link: 'https://inventory.pengurusanemas.my',
        icon: './images/apps/inventory.jpg'
    },
    {
        name: 'Customer Relation',
        link: 'https://crm.pengurusanemas.my',
        icon: './images/apps/crm.jpg',
    },
    {
        name: 'ZAK',
        link: 'https://zak.pengurusanemas.my',
        icon: './images/apps/zak.jpg',
    },
    {
        name: 'Report',
        link: 'https://accounting.pengurusanemas.my',
        icon: './images/apps/reports.jpg'
    },
    {
        name: 'Human Resource',
        link: 'https://hr.pengurusanemas.my',
        icon: './images/apps/hr.jpg'
    },
    {
        name: 'Analytic',
        link: 'https://analytic.pengurusanemas.my',
        icon: './images/apps/analytic.jpg'
    },
    {
        name: 'Billing',
        link: 'https://billing.pengurusanemas.my',
        icon: './images/apps/billing.jpg'
    },
    {
        name: 'Digital Signage',
        link: 'https://billing.pengurusanemas.my',
        icon: './images/apps/digital-signage.jpg'
    },
    {
        name: 'Point Of Sales',
        link: 'https://billing.pengurusanemas.my',
        icon: './images/apps/pos.jpg'
    },
    {
        name: 'Staff Apps',
        link: 'https://billing.pengurusanemas.my',
        icon: './images/apps/staff-apps.jpg'
    },
    {
        name: 'Website',
        link: 'https://websitekedai.com',
        icon: './images/apps/website.jpg',
    },
    {
        name: 'Ecommerce',
        link: 'https://billing.pengurusanemas.my',
        icon: './images/apps/ecommerce.jpg'
    },
    {
        name: 'Helpdesk',
        link: 'https://billing.pengurusanemas.my',
        icon: './images/apps/helpdesk.jpg'
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
        <div className='row row-cols-md-3 row-cols-lg-5 row-cols-sm-2'>{this.list_apps()}</div>
        )
    }
}