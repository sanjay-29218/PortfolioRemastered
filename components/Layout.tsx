import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Nav from "./Nav";
import CircularProgress from "@mui/material/CircularProgress";
type Props = {
  title?: string;
};
export default function Layout({ title, children }: React.PropsWithChildren<Props>) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title ? title + " - Sanjay Portfolio" : "Sanjay Portfolio"}</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col bg-[#21272f] justify-between ">
        <header>
          <Nav  />
        </header>
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
