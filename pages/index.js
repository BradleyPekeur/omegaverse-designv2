import Head from "next/head";
import Image from "next/image";
// import HorizontalScroller from "../components/HorizontalScroller";
import MainHero from "../components/MainHero";
import Navbar from "../components/Navbar";
import SideSocialBar from "../components/SideSocialBar";
import styles from "../styles/Home.module.css";

import { ImAirplane } from "react-icons/im";
import { GiSubmarine, GiMeepleArmy, GiElectric } from "react-icons/gi";
import { FaCar, FaHandHoldingMedical } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { RiBuilding2Fill } from "react-icons/ri";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Omegaverse v2</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-[#010101]">
				<SideSocialBar />
				<section className="heroSection w-screen h-[94vh] bg-hero-background bg-cover bg-no-repeat flex items-center  text-white pt-[100px]">
					<div className="md:w-[40%]">
						<h1 className="  leading-[100%] mb-[50px] heading">
							High Precision Engineering
						</h1>
						<p className="pText mb-[50px] font-light">
							Africa’s larges milling and 3D Printing machine
						</p>
						<button className="text-[16px] px-[50px] py-[16px] bg-[#FF6600] rounded-full">
							Get in touch
						</button>
					</div>
				</section>
				<section className="text-white flex justify-evenly md:flex-row flex-col">
					<div className="w-full max-h-[635px] px-[20px] md:px-[90px] py-[100px]  ">
						<h4 className="text-[36px] leading-[100%] h-[100px] ">
							Accelerated Product Development
						</h4>
						<p className="leading-[150%] pText font-light">
							As a leading provider of large-scale CNC and 3D printing services,
							our company specializes in the manufacture of precision tooling,
							models, prototypes and patterns for a wide range of industries.
							Utilizing cutting-edge technology and advanced composite
							materials, we strive to meet the unique needs of each client and
							deliver exceptional results.
						</p>
					</div>
					<div className="bg-[#1C1C1C] w-full max-h-[635px] px-[20px] md:px-[90px] py-[100px]">
						<h4 className="text-[36px] leading-[100%] h-[100px] ">Tooling</h4>
						<p className="leading-[150%] pText font-light">
							By integrating 3D printed tooling with traditional manufacturing
							techniques, our approach allows for accelerated product
							development, efficient iteration and cost reduction in the
							manufacturing process.
						</p>
					</div>
					<div className="bg-[#5D5D5D] w-full max-h-[635px] px-[20px] md:px-[90px] py-[100px]">
						<h4 className="text-[36px] leading-[100%] h-[100px] ">
							Models and props
						</h4>
						<p className="leading-[150%] pText  font-light">
							Our advanced capabilities in the field of 3D printing and
							manufacturing technologies allow us to create highly detailed and
							precise models with exceptional surface finishes, catering to a
							broad spectrum of industries and specific use cases.
						</p>
					</div>
				</section>
				<section className="bg-[#EDEDED] text-[#333333] flex gap-4  px-[20px] md:px-[90px] py-[90px] w-screen md:flex-row flex-col">
					<div className="basis-1/2 flex flex-col ">
						<div className="mb-16">
							<h4 className="text-[36px] leading-[100%] mb-[50px]">About</h4>
							<p className="leading-[150%] pText font-light">
								Our advanced capabilities in the field of 3D printing and
								manufacturing technologies allow us to create highly detailed
								and precise models with exceptional surface finishes, catering
								to a broad spectrum of industries and specific use cases.
							</p>
						</div>
						<div>
							<h4 className="text-[36px] leading-[100%] mb-[50px]">
								Industries we serve
							</h4>
							<div className="flex w-[70%] justify-between">
								<div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<GiSubmarine size={20} />
										</span>
										<span>Marine</span>
									</div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<BsCameraReelsFill />
										</span>
										<span>Film</span>
									</div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<FaCar />
										</span>
										<span>Automotive</span>
									</div>
								</div>
								<div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<ImAirplane />
										</span>
										<span>Aerospace</span>
									</div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<GiMeepleArmy />
										</span>
										<span>Military</span>
									</div>
									<div className="flex items-center mb-4">
										<span className="mr-[16px]">
											<RiBuilding2Fill />
										</span>
										<span>Architectural</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<img src="/img/home/image1.png" alt="" className="w-[70%]" />
					</div>
				</section>
				<section className="bg-mid-background bg-cover text-[#333333] py-[10px] px-[90px] flex items-center">
					<div className="basis-1/2">
						<h4 className="text-[36px] leading-[100%] mb-[50px]">
							The 5-Axis Machine
						</h4>
						<p className="leading-[150%] text-[20px] font-light">
							The 5-Axis Machine is an advanced tool designed for shaping,
							sculpting, and milling. With a large working area of 20m in
							length, 5m in width and 2.5m in height, this machine is capable of
							handling even the most demanding projects. <br></br>
							<br></br>The machine's two independent bridges provide maximum
							flexibility and precision, while the customizable heads enable
							versatile and efficient milling.<br></br>
							<br></br> Whether you're working on a large sculpture, a complex
							architectural model or other type of project, The 5-Axis Machine
							has the power and precision to get the job done. With its advanced
							capabilities, The 5-Axis Machine is the perfect choice for any
							project or service that requires high precision and flexibility.
						</p>
					</div>
					<div className="basis-1/2">
						<img src="/img/home/Machine.png" alt="" />
					</div>
				</section>
			</div>
		</>
	);
}
