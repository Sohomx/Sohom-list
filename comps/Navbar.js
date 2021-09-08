import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={128} />
        <a href="https://twitter.com/sohoooom">Sohom Pal</a>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas/">
        <a> Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
