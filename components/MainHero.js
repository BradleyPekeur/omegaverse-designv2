import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import VideoScroll from "./VideoScroll";
import MobileVideoScroll from "./MobileVideoScroll";

function MainHero() {
	const heroSection = useRef(null);
	const heroSection2 = useRef(null);
	const heroText = useRef(null);
	const videoIntro = useRef(null);

	const tl = useRef();
	const machinePic = useRef(null);

	useEffect(() => {
		gsap.to(heroText.current, {
			x: 0,
			scale: 1,
			duration: 0.75,
			scrollTrigger: {
				trigger: "#mainHeroContainer",
				start: "top center",
				end: "bottom top",
				toggleActions: "play none none reset",
			},
		});

		gsap.to(machinePic.current, {
			x: 0,
			scale: 1,
			duration: 2,
			scrollTrigger: {
				trigger: "#mainHeroContainer",
				start: "top center",
				end: "bottom top",
				toggleActions: "play none none reset",
			},
		});
	}, []);

	return (
		<>
			<div className="relative">
				<div className="hidden md:flex">
					<VideoScroll />
				</div>
				{/* <div className="flex md:hidden">
					<MobileVideoScroll />
				</div> */}
			</div>

			<div
				className="min-h-[100vh] bg-[#010101]  flex  justify-center items-center "
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
		</>
	);
}

export default MainHero;
