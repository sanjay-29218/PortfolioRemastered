import "../styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: String) => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };
    const handleComplete = (url: String) => {
      if (url === router.asPath) {
        setLoading(false);
      }
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  },[router.asPath]);
  return (
    <>
      {loading && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%,-50% ] ">
          <div className="small-hexagon animate-spin "></div>
        </div>
      )}
    </>
  );
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Loader />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
