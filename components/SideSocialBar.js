import React from "react";
import Image from "next/image";

function SideSocialBar() {
	return (
		<div className="hidden md:flex h-[80vh] border-r-4 border-white-500 fixed  z-50 flex-col w-[80px] mt-24">
			<div className=" w-full h-full relative flex md:flex-col  items-center">
				{/* <div className='md:absolute bottom-12'><img src="img/social/Facebook.svg" alt="Facebook Button"  width={45} height={45}/></div>
        <div className='md:absolute bottom-24'><img src="/img/social/Twitter.svg" alt="Twitter Button"  width={45} height={45}/></div> */}
				<div className="md:absolute bottom-36">
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
		</div>
	);
}

export default SideSocialBar;
