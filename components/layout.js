import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    
  return (
    <container>
    <Header/>
    <div>{children}</div>
    <Footer/>
    </container>
    );
  
  }