import MainLayout from "@components/layouts/main-layout";
import "@styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout title="XXXXXXXXXXXXXXXXXXXXXXX">
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
