'use client'

import {signOut} from 'next-auth/react'

const LogoutBtn = () => {
    

    return (
        <button onClick={()=> signOut()} className="btn rounded-none bg-transparent border-white text-white">Logout</button>
    );
};

export default LogoutBtn;