import React from "react"
import ClientLanding from "../components/landing/ClientLanding"

//to be removed
const fakeClient = {
    "user_id": 2,
    "username": "pineapple48",
    "role_id": 1
}

const Client = (props) =>{
    return (
        <div>
            <ClientLanding userInfo={fakeClient} />
        </div>
    )
}

export default Client;
