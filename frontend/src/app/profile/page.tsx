'use client';

import { useSession } from 'next-auth/react';

import HeaderAndFooterLayout from '@app/shared/HOC/HeaderAndFooterLayout';

const ProfilePage = () => {
    const { data: session } = useSession();

    return (
        <HeaderAndFooterLayout>
            <div className="flex w-full flex-col items-center justify-center gap-4">
                <span>PROFILE</span>
                <div className="flex min-w-[300px] flex-col gap-4 rounded-lg bg-brand-200 px-5 py-4 drop-shadow-lg">
                    <div>
                        <img
                            src={session?.user?.image || ''}
                            alt={session?.user?.name || ''}
                            className="rounded-full"
                            height={100}
                            width={100}
                        />
                    </div>
                    <span>{session?.user?.name || ''}</span>
                </div>
            </div>
        </HeaderAndFooterLayout>
    );
};

export default ProfilePage;
