import { useState } from "react";
import "./App.css";
import AppBarHeader from "./components/Navbar/AppBarHeader";
import HeroSection from "./components/Hero/HeroSection";
import Learn from "./components/Section/Learn";
import Features from "./components/Section/Features";
import Footer from "./components/Footer/Footer";
import { CssBaseline } from "@mui/material";
import CustomImageList from "./components/Gallery/ImgMediaCard";
import Container from "@mui/material/Container";
import Newsletter from "./components/NewsLetter/NewsLetter";

function App() {
  return (
    <>
      <CssBaseline />

      <AppBarHeader />
      <Container maxWidth="xl">
        <HeroSection />
        <Features />
        <CustomImageList />
        <Learn />
        <Newsletter />
      </Container>
      <Footer />
    </>
  );
}

export default App;
