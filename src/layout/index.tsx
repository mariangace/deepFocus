import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Container from "./Container/Container";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
