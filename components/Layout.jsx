import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Nav from "./Nav";
import CircularProgress from "@mui/material/CircularProgress";
export default function Layout({ title, children }) {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col bg-[#21272f] justify-between ">
        <header>
          <Nav setLoading={setLoading} />
        </header>
        {Loading&&<div className="absolute top-[50%] left-[50%] translate-[-50%,-50%]"><CircularProgress/></div>}
        <main className="container m-auto mt-4 px-4">
          {children}
        </main>
        <footer className="flex h-10 text-white justify-center items-center shadow-inner">
          <p>Sanjay Ltd.</p>
        </footer>
      </div>
    </>
  );
}
