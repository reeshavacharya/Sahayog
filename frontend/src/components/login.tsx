'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Login = () => {
    const { data: session } = useSession();
    console.log('test', session);

    const getFirstName = (fullName: string): string => {
        const firstSpaceIndex = fullName?.indexOf(' ');
        if (firstSpaceIndex === -1) {
            return fullName;
        } else {
            return fullName?.substring(0, firstSpaceIndex);
        }
    };
    if (session && session.user) {
        const firstName = getFirstName(session.user.name as string);
        return (
            <> 
                <Image src={session.user.image || ''} alt={session.user.name || ''} height={40} width={40} className='rounded-full'/>
                <p className="poppins-thin text-black">Welcome, {firstName}</p>
                &nbsp; &nbsp;
                <span
                    className="poppins-thin btn btn-outline btn-error text-black"
                    onClick={() => signOut()}
                >
                    Sign Out
                </span>
            </>
        );
    }
    return (
        <span
            className="poppins-thin btn btn-outline btn-success btn-wide text-black"
            onClick={() => signIn('google')}
        >
            Login
        </span>
    );
};
export default Login;
