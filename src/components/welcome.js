import React from 'react'

const leadTypeWriter = () => {
    var txt = 'Sistem Pengurusan Emas bersepadu, rangkaian akses sistem untuk anda!';
    return txt
}

export default class Welcome extends React.Component {
    render() {
        return (
            <div class="jumbotron">
                <h1 class="display-3">Hi, <i>nama_pengguna</i>!</h1>
                <p class="lead">{ leadTypeWriter() }</p>
            </div>
        )
    }
}

