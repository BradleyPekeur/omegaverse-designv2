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
	const aboutheadingRef = useRef(null);
	const aboutHeadingTrigger = useRef(null);
	const mainHeroContainer = useRef(null);
	const heroSection2 = useRef(null);
	const heroText = useRef(null);
	const videoIntro = useRef(null);

	const tl = useRef();
	const machinePic = useRef(null);

	const [contentTitle, setContentTitle] = useState("Rapid Prototyping");
	const [contentDesc, setContentDesc] = useState(
		"We are a large scale CNC & 3D printing, composites start up. We manufacture tooling, models, prototypes and patterns for numerous sectors."
	);
	const [contentImg, setContentImg] = useState("/img/home/Picture3A.jpg");

	function rapidClick() {
		setContentTitle("Rapid Prototyping");
		setContentDesc(
			"We are a large scale CNC & 3D printing, composites start up. We manufacture tooling, models, prototypes and patterns for numerous sectors."
		);
		setContentImg("/img/home/Picture3A.jpg");
	}

	function toolingClick() {
		setContentTitle("Tooling");
		setContentDesc(
			"Utilize 3D printed tooling in conjunction with traditional manufacturing processes to accelerate product development, iterate quickly, and reduce costs."
		);
		setContentImg("/img/home/tooling.jpg");
	}

	function modelsClick() {
		setContentTitle("Models and Props");
		setContentDesc(
			"For a wide range of industries and use cases, create high-resolution, accurate models with fine details and a smooth surface finish."
		);
		setContentImg("/img/home/3dmodels.jpg");
	}

	useEffect(() => {
		const horizontalSections = gsap.utils.toArray(".horizontal-sections");

		horizontalSections.forEach((section, i) => {
			const thisPinWrap = section.querySelector(".pin-wrap");
			const thisAnimWrap = thisPinWrap.querySelector(".animation-wrap");

			const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

			ScrollTrigger.create({
				trigger: section,
				start: "top top",
				end: () => "+=" + thisAnimWrap.scrollWidth,
				pin: thisPinWrap,
				invalidateOnRefresh: true,
				scrub: true,
			});

			const fakeHorizontalAnim = gsap.fromTo(
				thisAnimWrap,
				{
					x: () =>
						thisAnimWrap.classList.contains("to-right") ? 0 : getToValue(),
				},
				{
					x: () =>
						thisAnimWrap.classList.contains("to-right") ? getToValue() : 0,
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top top",
						end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
						invalidateOnRefresh: true,
						scrub: true,
					},
				}
			);

			const tl = gsap.timeline();
			tl.to(".block-anim", {
				duration: 1,
				ease: "power3",
				clipPath: "inset(50% 50% 50% 50% round 25vw 25vw 25.01vw 25.01vw)",
			});

			ScrollTrigger.create({
				trigger: section,
				start: () =>
					"top top-=" + (thisAnimWrap.scrollWidth - window.innerWidth),
				end: () => "+=" + window.innerWidth,
				animation: tl,
				scrub: true,
				markers: false,
			});
		});
	}, []);

	// useEffect(() => {
	// 	gsap.to(aboutheadingRef.current, {
	// 		x: 500,
	// 		duration: 2,
	// 		ease: "bounce",
	// 		scrollTrigger: {
	// 			trigger: aboutHeadingTrigger,
	// 			markers: true,
	// 			start: "top center",
	// 		},
	// 	});
	// }, []);

	gsap.registerPlugin(ScrollTrigger);
	const aboutheader = useRef(null);
	const aboutDesc = useRef(null);
	const dynoPic = useRef(null);
	const industriesCardsContainer = useRef(null);

	useEffect(() => {
		gsap.to(heroText.current, {
			x: 0,
			scale: 1,
			duration: 0.75,
			scrollTrigger: {
				trigger: "#mainHeroContainer",
				start: "top 80%",
				end: "bottom center",
				toggleActions: "play none none reset",
				preventOverlaps: true,
				fastScrollEnd: true,
			},
		});

		gsap.to(machinePic.current, {
			x: 0,
			scale: 1,
			duration: 2,
			scrollTrigger: {
				trigger: "#mainHeroContainer",
				start: "top 80%",
				end: "bottom center",
				toggleActions: "play none none reset",
				preventOverlaps: true,
				fastScrollEnd: true,
			},
		});

		gsap.to("#aboutheader", {
			x: 0,
			duration: 0.75,
			ease: "ease-in",
			scrollTrigger: {
				trigger: "#aboutContainer",

				start: "top center",
				end: "bottom top",
				toggleActions: "play none none reset",
				preventOverlaps: true,
				fastScrollEnd: true,
			},
		});

		gsap.to(aboutDesc.current, {
			opacity: 1,
			duration: 0.75,
			scrollTrigger: {
				trigger: "#aboutContainer",
				start: "top center",
				end: "bottom top",
				toggleActions: "play none none reset",
				preventOverlaps: true,
				fastScrollEnd: true,
			},
		});

		gsap.to(dynoPic.current, {
			scale: 1,
			duration: 0.75,
			scrollTrigger: {
				trigger: "#industriesContainer",
				start: "top center",
				end: "bottom top",
				toggleActions: "play none none reset",
				preventOverlaps: true,
				fastScrollEnd: true,
			},
		});

		gsap.to(industriesCardsContainer.current, {
			x: 0,
			duration: 2,

			scrollTrigger: {
				trigger: "#industriesContainer",
				start: "top center",
				end: "bottom top",
				toggleActions: "play none none reset",
				preventOverlaps: true,
				fastScrollEnd: true,
			},
		});
	}, []);

	return (
		<>
			{" "}
			<Head>
				<title>Omegaverse</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-[#010101]">
				<main className="overflow-hidden">
					<SideSocialBar />
					<MainHero />
					<div
						className="min-h-[100vh] bg-[#010101]  flex  justify-center items-center overflow-hidden"
						ref={heroSection2}
					>
						<div className="" id="mainHeroContainer">
							<div className="max-w-[80vw] flex flex-col-reverse md:flex-row items-center ">
								<div ref={heroText} className="translate-x-[-1200px]">
									<h1 className="heading  text-white w-full ">
										High Precision Engineering
									</h1>
									<p className="pText text-[#FF6600]">
										Africa’s larges milling and 3D Printing machine
									</p>
								</div>
								<div>
									<img
										src="/img/home/Machine.png"
										alt="Twitter Button"
										width={800}
										height={1028}
										ref={machinePic}
										className="scale-[3]"
									/>
								</div>
							</div>
						</div>
					</div>
				</main>

				<section className="flex  justify-center min-h-auto md:min-h-[70vh] items-center bg-[#010101]">
					<div className="flex flex-col md:flex-row max-w-[80vw] md:max-w-[70vw] h-full justify-center items-center">
						<div
							className="justify-center items-center h-full"
							id="aboutContainer"
						>
							<div className="md:w-[70%] w-full">
								<h1
									className="text-[#FF6600] mb-8 translate-x-[-600px]  sHeading"
									id="aboutheader"
									ref={aboutheader}
								>
									About Omega
								</h1>
								<p
									className="text-white pText pb-8 opacity-0"
									ref={aboutDesc}
									id="#aboutDesc"
								>
									We are a large scale CNC & 3D printing, composites start up.
									We manufacture tooling, models, prototypes and patterns for
									numerous sectors. We support local initiatives that drive
									awareness and create innovation through re-purposing waste. We
									are passionate about sustainability, our economy and
									competitiveness as a country
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					className="flex w-full justify-center bg-no-repeat min-h-[100vh] items-center bg-cover bg-center relative 
				overflow-hidden"
					id="industriesContainer"
				>
					<div className="h-full max-w-[90vw] md:max-w-[80vw] flex flex-col md:flex-row gap-10 ">
						<div className="text-white flex-1">
							<h1 className="sHeading mb-16">Industries We Serve</h1>
							<div
								className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 translate-x-[600px]"
								ref={industriesCardsContainer}
							>
								<div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
									<GiSubmarine size={50} className="p-1 mb-2" />
									<span className="pText mr-4 text-[#FF6600]">Marine</span>
								</div>
								<div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
									<BsCameraReelsFill size={50} className="p-1 mb-2" />
									<span className="pText mr-4 text-[#FF6600]">Film</span>
								</div>
								<div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
									<FaCar size={50} className="p-1 mb-2" />
									<span className="pText mr-4 text-[#FF6600]">Automotive</span>
								</div>
								{/* <div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
								<FaHandHoldingMedical size={50} className="p-1 mb-2" />
								<span className="pText mr-4 text-[#FF6600]">Medical</span>
							</div> */}
								<div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
									<ImAirplane size={50} className="p-1 mb-2" />
									<span className="pText mr-4 text-[#FF6600]">Aerospace</span>
								</div>
								<div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
									<GiMeepleArmy size={50} className="p-1 mb-2" />
									<span className="pText mr-4 text-[#FF6600]">Military</span>
								</div>
								{/* <div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
								<GiElectric size={50} className="p-1 mb-2" />
								<span className="pText mr-4 text-[#FF6600]">Electronics</span>
							</div> */}
								<div className="border border-[#FF6600] flex flex-col items-center justify-center p-5">
									<RiBuilding2Fill size={50} className="p-1 mb-2" />
									<span className="pText mr-4 text-[#FF6600]">
										Architectural
									</span>
								</div>
							</div>
							<ul className="">
								<li></li>
								<li>
									<span className="pText mr-4 text-[#FF6600]"></span>
								</li>
								<li>
									<span className="pText mr-4 text-[#FF6600]"></span>
								</li>
								<li>
									<span className="pText mr-4 text-[#FF6600]"></span>
								</li>
								<li>
									<span className="pText mr-4 text-[#FF6600]"></span>
								</li>
								<li>
									<span className="pText mr-4 text-[#FF6600]"></span>
								</li>
							</ul>
						</div>
						<div className="w-full flex-1">
							<img
								src="/img/home/dyno.png"
								alt="Main Pic"
								ref={dynoPic}
								className="scale-[3]"
							/>
						</div>
					</div>
				</section>

				<section className="relative">
					{/* <HorizontalScroller /> */}
					<div className=" text-white min-h-[550vh]">
						<div className="spacer"></div>

						<div className="horizontal-sections">
							<div className="pin-wrap">
								<div className="animation-wrap to-right">
									{/* ---------------------First Div */}
									<div
										className="section bg-cover bg-no-repeat flex items-center justify-center"
										// style={{backgroundImage:"url(./img/home/Header-yacht-1.jpg) "}}
									>
										<div className="flex flex-col md:flex-row max-w-[90vw] md:max-w-[80vw] gap-8 overflow-hidden">
											<div className="flex-1">
												<img src={contentImg} alt="Main Pic" />
											</div>
											<div className="flex-1">
												<h2 className="sHeading text-[#FF6600] mb-8">
													{contentTitle}
												</h2>
												<p className="text-white pText mb-8">{contentDesc}</p>
												<div className="flex gap-4 ">
													<button
														className="border border-[#FF6600] hover:bg-blue-700 text-white font-bold py-2 px-1 md:px-4 rounded"
														onClick={rapidClick}
													>
														Rapid Prototyping
													</button>
													<button
														className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
														onClick={toolingClick}
													>
														Tooling
													</button>
													<button
														className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
														onClick={modelsClick}
													>
														Models and Props
													</button>
												</div>
											</div>
										</div>
									</div>
									{/* ---------------------End First Div */}
									<div className="section section-amin section-gray overflow-hidden">
										<div>
											<div className="mb-20">
												<h2 className="superHeading mb-[-15px] md:mb-[-30px] lg:mb-[-50px]">
													WE CAN.
												</h2>
												<h3 className="text-[#FF6600] lightHeading ">
													just imagine
												</h3>
											</div>

											<div className="flex gap-4 justify-center items-center">
												{/* <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Visit Store
									</button> */}
												<a href="mailto:info@o-megaverse.com">
													<button className="bg-[#FF6600] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
														Get in touch
													</button>
												</a>
												<a
													href="https://form.asana.com/?k=XadmS3lTRA-KFCsdbp676w&d=1200250413180775"
													target="_blank"
													rel="noreferrer"
												>
													<button className="bg-[#FF6600] text-white py-2 px-4 rounded justify-center items-center">
														Request an Quote
													</button>
												</a>
											</div>
										</div>

										<div
											className="block-anim yellow flex justify-center items-center"
											// style={{backgroundImage:"url(./img/home/fworld.jpg) "}}
										>
											<div className="flex flex-col md:flex-row max-w-[90vw] md:max-w-[80vw] md:items-center gap-8">
												<div className="w-full flex-1 bg-orange-500">
													<img src="/img/home/Picture1.jpg" alt="Main Pic" />
												</div>
												<div className="flex-1 pl-4">
													<h1 className="sHeading">Omega 3D Printing</h1>
													<ul className="">
														<li>
															<span className="pText mr-4 text-[#FF6600]">
																Reduce
															</span>
															<span className="pText">Labour & Lead time</span>
														</li>
														<li>
															<span className="pText mr-4 text-[#FF6600]">
																Reduce
															</span>
															<span className="pText">Waste</span>
														</li>
														<li>
															<span className="pText mr-4 text-[#FF6600]">
																Improve
															</span>
															<span className="pText">Efficiency</span>
														</li>
														<li>
															<span className="pText mr-4 text-[#FF6600]">
																Create
															</span>
															<span className="pText">Products from waste</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="section section-lightblue  ">
				<h2>Some section 1</h2>
			</div>
			<div className="section ">
				<h2>Some section 2</h2>
			</div> */}
					</div>
				</section>
			</div>
		</>
	);
}
