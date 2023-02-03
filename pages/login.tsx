import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { GrGoogle } from "react-icons/gr";
import { signIn, useSession } from "next-auth/react";
type Props = {}
const LoginScreen = (props: Props) => {
  return (
    <Layout>
        <div>
        </div>
        <div>
        <div className="flex items-center justify-center gap-4" onClick={() => signIn("google", { callbackUrl: "/" })}>
                    <GrGoogle />
                    <p>Login with Google</p>
                  </div>
        </div>
    </Layout>
  )
}

export default LoginScreen