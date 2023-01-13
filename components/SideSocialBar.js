import React from "react";
import Image from "next/image";

function SideSocialBar() {
	return (
		<>
			<div className="hidden md:flex h-[60vh] border-r-2 border-white-500 fixed  z-50 flex-col w-[80px] mt-[150px]">
				<div className=" w-full h-full relative flex md:flex-col  items-center">
					<div className="md:absolute bottom-36">
						<a
							href="https://www.linkedin.com/company/omegaverse/"
							target="_blank"
							rel="noreferrer"
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
			</div>
		</>
	);
}

export default SideSocialBar;
