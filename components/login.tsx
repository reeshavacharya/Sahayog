'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();
  const getFirstName = (fullName: string): string => {
    const firstSpaceIndex = fullName.indexOf(' ');
    if (firstSpaceIndex === -1) {
      return fullName; 
    } else {
      return fullName.substring(0, firstSpaceIndex); 
    }
  };
  if (session && session.user) {
    const firstName = getFirstName(session.user.name as string)
    return (<>
      <p className="poppins-thin text-black">Welcome, {firstName}</p>
      &nbsp;
      <span className="btn btn-ghost poppins-thin text-black" onClick={() => signOut()}>
        Sign Out
      </span>
    </>
    )
  }
  return (
    <span className="btn btn-ghost poppins-thin text-black" onClick={() => signIn()}>
      Login
    </span>
  )
}
export default Login;