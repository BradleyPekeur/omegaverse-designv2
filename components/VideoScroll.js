import React, { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function VideoScroll() {
	console.clear();

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const showDiv = () => {
			// console.log(window.scrollY);
			if (window.scrollY >= 1000) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};

		window.addEventListener("scroll", showDiv);
	});

	useEffect(() => {
		/* The encoding is super important here to enable frame-by-frame scrubbing. */

		// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
		// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

		const video = document.querySelector(".video-background");
		let src = video.currentSrc || video.src;
		console.log(video, src);

		/* Make sure the video is 'activated' on iOS */
		function once(el, event, fn, opts) {
			var onceFn = function (e) {
				el.removeEventListener(event, onceFn);
				fn.apply(this, arguments);
			};
			el.addEventListener(event, onceFn, opts);
			return onceFn;
		}

		once(document.documentElement, "touchstart", function (e) {
			video.play();
			video.pause();
		});

		/* ---------------------------------- */
		/* Scroll Control! */

		gsap.registerPlugin(ScrollTrigger);

		let tl = gsap.timeline({
			defaults: { duration: 1 },
			scrollTrigger: {
				trigger: "#container",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
			},
		});

		once(video, "loadedmetadata", () => {
			tl.fromTo(
				video,
				{
					currentTime: 0,
				},
				{
					currentTime: video.duration || 1,
				}
			);
		});

		/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
		setTimeout(function () {
			if (window["fetch"]) {
				fetch(src)
					.then((response) => response.blob())
					.then((response) => {
						var blobURL = URL.createObjectURL(response);

						var t = video.currentTime;
						once(document.documentElement, "touchstart", function (e) {
							video.play();
							video.pause();
						});

						video.setAttribute("src", blobURL);
						video.currentTime = t + 0.01;
					});
			}
		}, 1000);

		/* ---------------------------------- */
	}, []);

	return (
		<>
			<div>
				<div className="fixed top-0 left-0 min-h-screen min-w-screen z-50"></div>
				<video
					src="/video/OMEGAVERSE.mp4"
					preload="auto"
					muted
					autoPlay
					className={`video-background ${visible ? "hidden" : "flex"}`}
				></video>
				<div id="container"></div>
			</div>
		</>
	);
}

export default VideoScroll;
