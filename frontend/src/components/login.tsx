'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import UserMenu from './userMenu';

const Login = () => {
    const { data: session } = useSession();
    console.log('test', session);

    const getFirstName = (fullName: string): string => {
        const firstSpaceIndex = fullName.indexOf(' ');
        if (firstSpaceIndex === -1) {
            return fullName;
        } else {
            return fullName.substring(0, firstSpaceIndex);
        }
    };

    return session && session.user ? (
        <div className="flex cursor-pointer items-center gap-2">
            <Link href="/profile" className='flex flex-row gap-2 items-center'>
                <Image
                    src={session.user.image || ''}
                    alt={session.user.name || ''}
                    height={40}
                    width={40}
                    className="rounded-full"
                />
                &nbsp;
                <p className="poppins-thin text-black">
                    {getFirstName(session.user.name || '')}
                </p>
            </Link>
            &nbsp;
            <UserMenu/>
        </div>
    ) : (
        <span
            className="poppins-thin btn btn-outline btn-success btn-wide text-black"
            onClick={() => signIn('google')}
        >
            Login
        </span>
    );
};
export default Login;
