import Head from "next/head";
import React from "react";
import { Home } from "../components/Home";;

const SandboxHome = () => (
  <>
    <Head>
      <title>Vivid Test</title>
      <link href="/favicon.ico" rel="icon" />
    </Head>
    <div
      style={{
        backgroundColor: "rgb(33, 33, 35)",
        color: "#fafafa",
        height: "fit-content",
        minHeight: "100vh",
        width: "fit-content",
        minWidth: "100vw",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Vivid-generated components */}
      <Home override={{ resize: "both", overflow: "hidden" }} />
    </div>
  </>
);

export default SandboxHome;
