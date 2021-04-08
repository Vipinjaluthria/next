import React from "react";
import Link from "next/link"
import Image from "next/image";

const Navbar = () => {
    return (
      
       
        <nav>
            <div className="logo">
               <Image src="/logo.png" width={120} height={87}/>
            </div>
            <Link href="/about"><a>About</a></Link>
            <Link href="/"><a>Home</a></Link>
            <Link href="/ninja">Ninja's</Link>
        </nav>
    
      );
}
 
export default Navbar;