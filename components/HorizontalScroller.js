import React, { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HorizontalScroller() {
	const [contentTitle, setContentTitle] = useState("Rapid Prototyping");
	const [contentDesc, setContentDesc] = useState(
		"We are a large scale CNC & 3D printing, composites start up. We manufacture tooling, models, prototypes and patterns for numerous sectors."
	);
	const [contentImg, setContentImg] = useState("/img/home/Picture3.jpg");

	function rapidClick() {
		setContentTitle("Rapid Prototyping");
		setContentDesc(
			"We are a large scale CNC & 3D printing, composites start up. We manufacture tooling, models, prototypes and patterns for numerous sectors."
		);
		setContentImg("/img/home/Picture3.jpg");
	}

	function toolingClick() {
		setContentTitle("Tooling");
		setContentDesc(
			"Utilize 3D printed tooling in conjunction with traditional manufacturing processes to accelerate product development, iterate quickly, and reduce costs."
		);
		setContentImg("/img/home/fworld.jpg");
	}

	function modelsClick() {
		setContentTitle("Models and Props");
		setContentDesc(
			"For a wide range of industries and use cases, create high-resolution, accurate models with fine details and a smooth surface finish."
		);
		setContentImg("/img/home/Picture2.jpg");
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

	return (
		<div className=" text-white min-h-[200vh]">
			<div className="spacer"></div>

			<div className="horizontal-sections">
				<div className="pin-wrap">
					<div className="animation-wrap to-right">
						{/* ---------------------First Div */}
						<div
							className="section bg-cover bg-no-repeat flex items-center justify-center"
							// style={{backgroundImage:"url(./img/home/Header-yacht-1.jpg) "}}
						>
							<div className="flex flex-col md:flex-row max-w-[90vw] md:max-w-[80vw] gap-8">
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
						<div className="section section-amin section-gray">
							<div>
								<h2 className="sHeading">
									Lets create something{" "}
									<span className="text-[#FF6600]">together</span>
								</h2>
								<div className="flex gap-4 justify-center items-center">
									<button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Visit Store
									</button>
									<button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Get in touch
									</button>
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

			<div className="section section-lightblue  ">
				<h2>Some section 1</h2>
			</div>
			<div className="section ">
				<h2>Some section 2</h2>
			</div>
		</div>
	);
}

export default HorizontalScroller;
