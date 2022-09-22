import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";

function Footer() {
	return (
		<div className="bg-[#010101] min-h-[545px] w-[100vw] flex justify-center items-center border-t-[0.5px] border-indigo-500 relative">
			<div className="text-white w-full  flex justify-between md:max-w-[80vw] p-4">
				<div>
					<h4 className="sHeading text-[#FF6600] mb-6">Get in touch</h4>
					<div className="flex items-center">
						<span>
							<div className="w-6 mr-2">
								<MdEmail />
							</div>
						</span>
						<span className="pText leading-16">info@o-megaverse.com</span>
					</div>
					<div className="flex items-center">
						<span>
							<div className="w-6 mr-2">
								<FiPhoneCall />
							</div>{" "}
						</span>
						<span className="pText">+27 87 820 8800</span>
					</div>
					<div className="flex items-center">
						<span>
							<div className="w-6 mr-2">
								<ImLocation2 />
							</div>
						</span>
						<span className="pText">Cape Town</span>
					</div>
				</div>

				<div>
					<div className="flex">
						<div className="w-6">
							<img
								src="/img/social/Facebook.svg"
								alt="Facebook Button"
								width={45}
								height={45}
							/>
						</div>
						{/* <div className="w-6">
							<img
								src="/img/social/Twitter.svg"
								alt="Twitter Button"
								width={45}
								height={45}
							/>
						</div> */}
						<div className="w-6">
							<a
								href="https://www.linkedin.com/company/omegaverse/"
								target="_blank"
							>
								<img
									src="/img/social/LinkedIn.svg"
									alt="Linkedin Button"
									width={45}
									height={45}
								/>
							</a>
						</div>
					</div>

					<div className="h-[2px] w-full bg-white mb-4 pr-4"></div>

					<Link href="./">
						<div className="min-h-[40px] w-40 pr-4">
							<Image
								src="/omegaverse_logo.svg"
								alt="Logo"
								width={200}
								height={40}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
