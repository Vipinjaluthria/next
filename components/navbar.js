import React from "react";
import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Vipin list</h1>
            </div>
            <Link href="/about"><a>About</a></Link>
            <Link href="/"><a>Home</a></Link>
        </nav>
      );
}
 
export default Navbar;