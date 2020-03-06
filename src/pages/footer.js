import React from 'react'

const this_year = new Date().getFullYear()

export default class PageFooter extends React.Component {

    render() {
        return (
            <div className="footer text-center" style={styles.footer}>
                <div className="container" >
                Copyright © {this_year} | Pengurusan Emas by onewoorks solutions 
                </div>
            </div>
        )
    }
}

const styles = {
    footer: {
        position: 'relative',
        marginTop: 10,
        marginBottom: 20,
        bottom:0,
        fontSize: '0.8em'
    }
}