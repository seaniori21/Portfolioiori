import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Sean Umali - Software Developer",
  description:
    'This is the portfolio of Sean Umali. '+
    'I am a highly motivated recent graduate with hands-on experience in software engineering, web development, and data-driven technologies. '+
          'I thrive in creating innovative, user-centric applications, with a strong passion for both front-end and back-end development. '+ 
          'My core expertise lies in React, JavaScript, and Python, along with experience in d3.js, SQL, and REST APIs. '+ 
          'I enjoy exploring new technologies and continuously improving my skills to deliver high-quality, scalable solutions. '+ 
          'I am passionate about problem-solving and always eager to collaborate in an Agile environment. '+ 
          'I\'m looking for opportunities to apply my skills in real-world projects and make a meaningful impact.'
          ,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
