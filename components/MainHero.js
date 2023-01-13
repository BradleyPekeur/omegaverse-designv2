import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import VideoScroll from "./VideoScroll";
import MobileVideoScroll from "./MobileVideoScroll";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function MainHero() {
	gsap.registerPlugin(ScrollTrigger);

	return (
		<>
			<h1>Hello</h1>
		</>
	);
}

export default MainHero;
