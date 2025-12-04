import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Providers from "../components/Providers";
import CartIcon from "../components/CartIcon";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "E-commerce Store",
  description: "Shop amazing products at great prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Providers>
            <CartIcon />
              <Header />
                {children}
              <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
