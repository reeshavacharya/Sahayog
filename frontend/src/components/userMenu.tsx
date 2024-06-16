import { signOut } from "next-auth/react"
import Image from 'next/image';
import downArrow from '../components/Icons/downArrow.svg'

const UserMenu = () => {
    return (
        <div className="dropdown dropdown-bottom dropdown-left">
            <button
                className="poppins-thin btn btn-circle btn-ghost text-black">
                <Image src={downArrow}
                    alt={'D'}
                    height={15}
                    width={15}
                    className="rounded-full" />
            </button>
            <ul tabIndex={0} className="poppins-medium dropdown-content z-[1] menu p-4 shadow bg-brand-100 rounded-box w-52 darker-shadow">
                <li><a href="/">Home</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a className="text-error" onClick={() => signOut({ callbackUrl: '/' })}>Log Out</a></li>
            </ul>
        </div>
    )
}
export default UserMenu