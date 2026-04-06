import React from "react";

const ContactPage = () => {
	return (
		<div>
			<div
				className={`w-[70vw] min-h-[20vh] bg-[#ffe647] mr-auto rounded-[0.75vh] absolute transition-all ease-in-out hover:mt-0 mt-[2vh] duration-300 top-[25vh] left-1/2 -translate-x-1/2`}
			>
				<div className="flex w-[95%] h-[3.25vh] mx-auto border-x border-b border-dashed border-neutral-600/60 relative">
					<div className="w-full flex items-center justify-between px-[0.5vw]">
						<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
						<p className="text-[1.15vh] font-medium uppercase">Profile</p>
						<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
					</div>
				</div>
				<div className="flex w-[95%] mx-auto border-x border-dashed border-neutral-600/60">
					<div className="w-full border-l-none border-dashed border-neutral-600/60 flex">
						<div className="flex flex-col w-2/5">
							<div className="p-[1.5vh]">
								<h1 className="monas text-[5vh]">Yevheniia Simaka</h1>
								<img
									src="/imgs/me3.png"
									className="w-full object-cover mt-[4vh]"
									alt=""
								/>
							</div>
							{/* <div className=" p-[1.5vh]">
								<p className="text-[2vh] font-extralight leading-[4vh] mt-[1vh]">
									Fullstack TypeScript developer who has won 14+ international
									hackathons online and in-person. Single-handedly organized a
									game development hackathon in Utah, from venue outreach and
									finding sponsors, to day-of event planning and hosting, with
									25 participants average ages 13-15yo, who made a game for the
									first time.
								</p>
								<p className="text-[2vh] font-extralight leading-[4vh] mt-[3vh]">
									Completed 3 internships working with Harvard and Cornell
									graduates on early-stage startups from idea and design through
									development and deployment. Passionate about building with
									people who love programming.
								</p>
							</div> */}
						</div>
						<div className="flex flex-col w-3/5 border-l border-neutral-600/60 border-dashed">
							<div className="flex w-full items-center justify-start border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<h2 className="w-[35%] text-[4vh] fusskia py-[0.5vh]">Email</h2>
								<p className="w-[60%] text-[2.5vh] font-extralight fusskia py-[0.5vh]">
									yevheniiasimaka@gmail.com
								</p>
							</div>
							<div className="flex w-full items-center justify-start border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<h2 className="w-[35%] text-[4vh] fusskia py-[0.5vh]">
									Instagram
								</h2>
								<p className="w-[60%] text-[2.5vh] font-extralight fusskia py-[0.5vh]">
									@i_am_jane_2008
								</p>
							</div>
							<div className="flex w-full items-center justify-start border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<h2 className="w-[35%] text-[4vh] fusskia py-[0.5vh]">
									Linkedin
								</h2>
								<p className="w-[60%] text-[2.5vh] font-extralight fusskia py-[0.5vh]">
									linkedin.com/in/yevheniia-simaka/
								</p>
							</div>
							<div className="flex w-full items-center justify-start border-y border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<h2 className="w-[35%] text-[4vh] fusskia py-[0.5vh]">
									Resume
								</h2>
								<p className="w-[60%] text-[2.5vh] font-extralight fusskia py-[0.5vh]">
									Download Here
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-[95%] h-[3.25vh] mx-auto border-x border-t border-dashed border-neutral-600/60 relative">
					<div className="w-full flex items-center justify-between px-[0.5vw]">
						<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
						<p className="text-[1.15vh] font-medium uppercase">Profile</p>
						<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
