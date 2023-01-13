import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { GiSplitCross, GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const closeNav = () => {
		setNav(false);
	};

	return (
		<nav className="navbarBG navbg flex justify-between items-center h-[100px] md:justify-around w-screen fixed  md: mb-10 px-[30px] md:px-[170px] z-[99]">
			<Link href="./">
				<div className="min-h-[40px]">
					<img src="/omegaverse-logo.png" alt="Logo" width={200} height={40} />
				</div>
			</Link>
			<ul className="hidden md:flex space-x-4 w-full justify-center text-[#333333] text-size-4">
				<li>
					<Link href="./">Home</Link>
				</li>
				<li>
					<Link href="./endeavor">Endeavor</Link>
				</li>
				<li>
					<Link href="./services">Services</Link>
				</li>
				<li>
					<Link href="./team">Team</Link>
				</li>
				<li>
					<Link href="./contact">Contact Us</Link>
				</li>
			</ul>
			<a
				href="https://form.asana.com/?k=XadmS3lTRA-KFCsdbp676w&d=1200250413180775"
				target="_blank"
				className="hidden md:flex"
				rel="noreferrer"
			>
				<button className="bg-[#FF6600] text-white px-1 py-1 rounded-full w-[200px] justify-center items-center">
					Request an Quote
				</button>
			</a>
			<div onClick={handleNav} className="block md:hidden z-50">
				{nav ? (
					<GiSplitCross size={20} style={{ color: "white" }} />
				) : (
					<GiHamburgerMenu size={20} style={{ color: "white" }} />
				)}
			</div>
			<ul
				className={
					nav
						? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-[#FF6600] pl-[50px] pr-[10px] pt-[60px]"
						: "ease-in-out duration-500 fixed h-full left-[-100%] "
				}
			>
				<div className="min-h-[40px]">
					<Image
						src="/omegaverse_logo.svg"
						alt="Logo"
						width={200}
						height={40}
					/>
				</div>
				<li className="p-4 border-b border-gray-600">
					<Link href="./">
						<span onClick={closeNav}>Home</span>
					</Link>
				</li>
				<li className="p-4 border-b border-gray-600">
					<Link href="./endeavor">
						<span onClick={closeNav}>Endeavor</span>
					</Link>
				</li>
				<li className="p-4 border-b border-gray-600">
					<Link href="./services">
						<span onClick={closeNav}>Services</span>
					</Link>
				</li>
				<li className="p-4 border-b border-gray-600">
					<Link href="./team">
						<span onClick={closeNav}>Team</span>
					</Link>
				</li>
				<li className="p-4">
					<Link href="./contact">
						<span onClick={closeNav}>Contact Us</span>
					</Link>
				</li>
				<a
					href="https://form.asana.com/?k=XadmS3lTRA-KFCsdbp676w&d=1200250413180775"
					target="_blank"
					rel="noreferrer"
				>
					<button className="bg-[#FF6600] text-white px-1 py-1 rounded-full w-[200px] justify-center items-center ">
						Request an Quote
					</button>
				</a>
			</ul>
		</nav>
	);
}

export default Navbar;
