import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import React from 'react';

const PaymentId = async ({params}) => {
    const session = await getServerSession(authOptions)
    const uid = session.user.uid
    return (
        <div>
            {uid}
        </div>
    );
};

export default PaymentId;