import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';




export const metadata = {
  title: "GentStyle",
  description: "Home page of GentStyle",
  icons:{
    icon:'/icons/shirt.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body
  
      >
     <Navbar/>
        {children}
        <Footer/>
      </body>
     
    </html>
  );
}
