const Nav = lazy(() => import("../components/shared/Nav"));
const Footer = lazy(() => import("../components/shared/footer"));
import React, { lazy } from "react";

import { Helmet } from "react-helmet-async";

import BTSGal from "../components/bts/btsgal";

const BTS = () => {
  return (
    <>
      <Helmet>
        <title>Behind The Scenes | Music Through The Lens</title>
        <meta
          name="description"
          content="Go behind the scenes of concert photography. Explore our gallery of candid moments, equipment setups, and the unseen world of music photographers."
        />
        <meta
          name="keywords"
          content="behind the scenes, concert photography, music photographer, backstage, photography equipment"
        />
        <meta
          property="og:title"
          content="Behind The Scenes | Music Through The Lens"
        />
        <meta
          property="og:description"
          content="Discover the unseen world of concert photography. Explore our behind-the-scenes gallery of candid moments and equipment setups."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://music-through-the-lens.onrender.com/bts"
        />
        <link rel="preload" as="image" href="../assets/imgs/trailerimg.webp" />
        <link
          rel="canonical"
          href="https://music-through-the-lens.onrender.com/bts"
        />
      </Helmet>{" "}
      <Nav />
      <main className="">
        <BTSGal />
      </main>{" "}
      <Footer />{" "}
    </>
  );
};

export default BTS;
