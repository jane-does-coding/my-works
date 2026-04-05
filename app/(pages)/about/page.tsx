"use client";
import { useState } from "react";

const AboutPage = () => {
	const [openedSlide, setOpenSlide]: any = useState("profile"); // experiences, skills, profile

	return (
		<div>
			<div className="flex flex-col items-center justify-between mt-[7vh] pb-[15vh] max-w-[100vw] overflow-hidden relative">
				<h1 className="text-[8vh] monas w-1/2 mr-auto ml-[2vw]">About me</h1>
				<div
					onClick={() => setOpenSlide("experiences")}
					className="w-[97.5vw] min-h-[20vh] bg-[#DFDFDF] mr-auto rounded-[0.75vh] relative transition-all ease-in-out hover:mt-[0] mt-[2vh] duration-300"
				>
					<div className="absolute bg-white w-[1.25vh] h-[1.25vh] top-[1vh] left-[1vh] rounded-full"></div>

					<div className="flex w-[96%] h-[3.25vh] mx-auto border-x border-b border-dashed border-neutral-600/60 relative">
						<div className="w-[30.06%] h-full border-r border-dashed border-neutral-600/60 flex items-center justify-between px-[0.5vw]">
							<p className="text-[1.15vh] font-medium uppercase">About</p>
							<p className="text-[1.15vh] font-medium uppercase">Details</p>
						</div>
						<div className="w-[69.9%] flex items-center justify-between px-[0.5vw]">
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
							<p className="text-[1.15vh] font-medium uppercase">Experiences</p>
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
						</div>
					</div>
					<div className="flex w-[96%] mx-auto border-x border-dashed border-neutral-600/60">
						<div className="w-[30%]">
							<img
								src={"/imgs/campfire.png"}
								className="sticky top-[7.5vh] mt-[7.5vh] border-y border-dashed border-neutral-600/60"
							/>
						</div>
						<div className="w-[70%] border-l border-dashed border-neutral-600/60">
							<h2 className="text-[5vh] fusskia pl-[1vw] py-[0.5vh]">
								Experiences
							</h2>
							<div className="flex w-full items-center justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">Year</p>
								<p className="w-1/3 text-[1.75vh]">Company</p>
								<p className="w-1/3 text-[1.75vh]">Position</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">2026/06 - 2027/08</p>
								<div className="w-1/3 flex flex-col">
									<p className="text-[1.75vh]">Hack Club</p>
									<p className="text-[1.75vh]">Vermont, US</p>
								</div>
								<p className="w-1/3 text-[1.75vh]">Gap Year Internship</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">2025/11 - 2026/02</p>
								<div className="w-1/3 flex flex-col">
									<p className="text-[1.75vh]">Hack Club</p>
									<p className="text-[1.75vh]">Utah, US</p>
								</div>
								<p className="w-1/3 text-[1.75vh]">Campfire Organizer</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">2025/06 - 2025/08</p>
								<div className="w-1/3 flex flex-col">
									<p className="text-[1.75vh]">Referred.fyi</p>
									<p className="text-[1.75vh]">New York, US, Remote</p>
								</div>
								<p className="w-1/3 text-[1.75vh]">Developer & Designer</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">2024/04 - 2024/10</p>
								<div className="w-1/3 flex flex-col">
									<p className="text-[1.75vh]">The Nova Accelerator</p>
									<p className="text-[1.75vh]">New York, US, Remote</p>
								</div>
								<p className="w-1/3 text-[1.75vh]">Fullstack Developer</p>
							</div>
							<h2 className="text-[5vh] fusskia pl-[1vw] py-[0.5vh] pt-[1vh] border-t border-dashed border-neutral-600/60">
								Education
							</h2>
							<div className="flex w-full items-center justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">Year</p>
								<p className="w-1/3 text-[1.75vh]">School</p>
								<p className="w-1/3 text-[1.75vh]">Details</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">2022/09 - 2026/05</p>
								<div className="w-1/3 flex flex-col">
									<p className="text-[1.75vh]">Salt Lake Academy HighSchool</p>
									<p className="text-[1.75vh]">Utah, US</p>
								</div>
								<p className="w-1/3 text-[1.75vh]">3.97 GPA</p>
							</div>
							<h2 className="text-[5vh] fusskia pl-[1vw] py-[0.5vh] pt-[1vh] border-t border-dashed border-neutral-600/60">
								Hackathon Wins
							</h2>
							<div className="flex w-full items-center justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">Year</p>
								<p className="w-1/3 text-[1.75vh]">Title</p>
								<p className="w-1/3 text-[1.75vh]">Host</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">2026/03</p>
								<div className="w-1/3 flex flex-col">
									<p className="text-[1.75vh]">
										2nd Place, SkillsUSA Web Development and Design
									</p>
									<p className="text-[1.75vh]">Utah, US</p>
								</div>
								<p className="w-1/3 text-[1.75vh]">SkillsUSA</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">2025/11</p>
								<div className="w-1/3 flex flex-col">
									<p className="text-[1.75vh]">2nd Place, Hack the SDLC</p>
									<p className="text-[1.75vh]">Utah, US</p>
								</div>
								<p className="w-1/3 text-[1.75vh]">Waystar</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">2026/02</p>
								<div className="w-1/3 flex flex-col">
									<p className="text-[1.75vh]">2nd Place, Campfire Flagship</p>
									<p className="text-[1.75vh]">California, US</p>
								</div>
								<p className="w-1/3 text-[1.75vh]">Hack Club</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<p className="w-1/3 text-[1.75vh]">2024/04</p>
								<div className="w-1/3 flex flex-col">
									<p className="text-[1.75vh]">2nd Place, Summit Hacks</p>
									<p className="text-[1.75vh]">Devpost</p>
								</div>
								<p className="w-1/3 text-[1.75vh]">Summit</p>
							</div>
						</div>
					</div>
					<div className="flex w-[96%] h-[3.25vh] mx-auto border-x border-t border-dashed border-neutral-600/60 relative">
						<div className="w-[30.06%] h-full border-r border-dashed border-neutral-600/60 flex items-center justify-between px-[0.5vw]">
							<p className="text-[1.15vh] font-medium uppercase">About</p>
							<p className="text-[1.15vh] font-medium uppercase">Details</p>
						</div>
						<div className="w-[69.9%] flex items-center justify-between px-[0.5vw]">
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
							<p className="text-[1.15vh] font-medium uppercase">Experiences</p>
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
						</div>
					</div>
				</div>
				<div
					onClick={() => setOpenSlide("skills")}
					className={`w-[45vw] min-h-[20vh] bg-[#ffe647] mr-auto rounded-[0.75vh] absolute transition-all ease-in-out hover:mt-[0] mt-[2vh] duration-300 top-[30vh] ${
						openedSlide === "skills" || openedSlide === "profile"
							? "left-0"
							: "left-[95vw]"
					}`}
				>
					<div className="flex w-[92%] h-[3.25vh] mx-auto border-x border-b border-dashed border-neutral-600/60 relative">
						<div className="w-[100%] flex items-center justify-between px-[0.5vw]">
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
							<p className="text-[1.15vh] font-medium uppercase">Skillsets</p>
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
						</div>
					</div>
					<div className="flex w-[92%] mx-auto border-x border-dashed border-neutral-600/60">
						<div className="w-[100%] border-l-none border-dashed border-neutral-600/60">
							<h2 className="text-[5vh] fusskia pl-[1vw] py-[0.5vh]">
								Skillsets
							</h2>
							<div className="flex w-full items-center justify-start border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<h2 className="text-[4vh] fusskia pl-[0vw] py-[0.5vh]">01</h2>
								<h2 className="text-[4vh] fusskia pl-[1vw] py-[0.5vh]">
									Web Development
								</h2>
							</div>
							<div className="flex w-full items-center justify-start border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<h2 className="text-[4vh] fusskia pl-[0vw] py-[0.5vh]">02</h2>
								<h2 className="text-[4vh] fusskia pl-[1vw] py-[0.5vh]">
									Web Design
								</h2>
							</div>
							<div className="flex w-full items-center justify-start border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<h2 className="text-[4vh] fusskia pl-[0vw] py-[0.5vh]">03</h2>
								<h2 className="text-[4vh] fusskia pl-[1vw] py-[0.5vh]">
									Branding
								</h2>
							</div>
							<div className="flex w-full items-center justify-start border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<h2 className="text-[4vh] fusskia pl-[0vw] py-[0.5vh]">04</h2>
								<h2 className="text-[4vh] fusskia pl-[1vw] py-[0.5vh]">
									Graphic Design
								</h2>
							</div>
							<div className="flex w-full items-center justify-start border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
								<h2 className="text-[4vh] fusskia pl-[0vw] py-[0.5vh]">05</h2>
								<h2 className="text-[4vh] fusskia pl-[1vw] py-[0.5vh]">
									Event Organizing
								</h2>
							</div>

							<h2 className="text-[1.25vh] font-semibold uppercase text-center py-[1.5vh] border-t border-dashed border-neutral-600/60">
								Web Development
							</h2>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw]">
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] border-r border-dashed border-neutral-600/60">
									Typescript
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw] border-r border-dashed border-neutral-600/60">
									Javascript
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw]">
									Next.js
								</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw]">
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] border-r border-dashed border-neutral-600/60">
									React
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw] border-r border-dashed border-neutral-600/60">
									Tailwind css
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw]">
									Responsive Design
								</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw]">
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] border-r border-dashed border-neutral-600/60">
									Svelte
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw] border-r border-dashed border-neutral-600/60">
									Postman
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw]">
									Docker
								</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw]">
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] border-r border-dashed border-neutral-600/60">
									MongoDB
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw] border-r border-dashed border-neutral-600/60">
									Prisma
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw]">
									Node.js
								</p>
							</div>
							<h2 className="text-[1.25vh] font-semibold uppercase text-center py-[1.5vh] border-t border-dashed border-neutral-600/60">
								Web Design
							</h2>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw]">
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] border-r border-dashed border-neutral-600/60">
									Mobile-first Design
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw] border-r border-dashed border-neutral-600/60">
									Figma
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw]">
									Mockups
								</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw]">
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] border-r border-dashed border-neutral-600/60">
									UI/UX Design
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw] border-r border-dashed border-neutral-600/60">
									Landing Pages
								</p>
								<p className="w-1/3 text-[1.5vh] py-[1.25vh] pl-[1vw]">
									Dashboards
								</p>
							</div>
							<h2 className="text-[1.25vh] font-semibold uppercase text-center py-[1.5vh] border-t border-dashed border-neutral-600/60">
								Languages
							</h2>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw]">
								<p className="w-1/2 text-[1.5vh] py-[1.25vh] border-r border-dashed border-neutral-600/60">
									Russian
								</p>
								<p className="w-1/2 text-[1.5vh] py-[1.25vh] pl-[1vw]">
									Native/Fluent
								</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw]">
								<p className="w-1/2 text-[1.5vh] py-[1.25vh] border-r border-dashed border-neutral-600/60">
									Ukrainian
								</p>
								<p className="w-1/2 text-[1.5vh] py-[1.25vh] pl-[1vw] ">
									Native/Fluent
								</p>
							</div>
							<div className="flex w-full items-start justify-center border-t border-dashed border-neutral-600/60 px-[1vw]">
								<p className="w-1/2 text-[1.5vh] py-[1.25vh] border-r border-dashed border-neutral-600/60">
									English
								</p>
								<p className="w-1/2 text-[1.5vh] py-[1.25vh] pl-[1vw] ">
									Native/Fluent
								</p>
							</div>
						</div>
					</div>
					<div className="flex w-[92%] h-[3.25vh] mx-auto border-x border-t border-dashed border-neutral-600/60 relative">
						<div className="w-[100%] flex items-center justify-between px-[0.5vw]">
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
							<p className="text-[1.15vh] font-medium uppercase">Experiences</p>
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
						</div>
					</div>
				</div>
				<div
					onClick={() => setOpenSlide("profile")}
					className={`w-[70vw] min-h-[20vh] bg-white mr-auto rounded-[0.75vh] absolute transition-all ease-in-out hover:mt-[0] mt-[2vh] duration-300 top-[42.5vh] ${
						openedSlide === "profile" ? "left-0" : "left-[95vw]"
					}`}
				>
					<div className="flex w-[95%] h-[3.25vh] mx-auto border-x border-b border-dashed border-neutral-600/60 relative">
						<div className="w-[100%] flex items-center justify-between px-[0.5vw]">
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
							<p className="text-[1.15vh] font-medium uppercase">Profile</p>
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
						</div>
					</div>
					<div className="flex w-[95%] mx-auto border-x border-dashed border-neutral-600/60">
						<div className="w-[100%] border-l-none border-dashed border-neutral-600/60">
							<div className="flex">
								<div className="w-[35%] p-[1.5vh]">
									<h1 className="monas text-[5vh]">Yevheniia Simaka</h1>
									<img
										src="/imgs/me3.png"
										className="w-full object-cover mt-[4vh]"
										alt=""
									/>
								</div>
								<div className="w-[65%] p-[1.5vh]">
									<p className="text-[2.5vh] font-extralight leading-[4vh] mt-[1vh]">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Dolore aperiam in, minus odio ducimus blanditiis vel amet
										magni doloremque neque iusto tempora eligendi illo velit.
										Quaerat mollitia soluta illum architecto!
									</p>
									<p className="text-[2.5vh] font-extralight leading-[4vh] mt-[3vh]">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Dolore aperiam in, minus odio ducimus blanditiis vel amet
										magni doloremque neque iusto tempora eligendi illo velit.
										Quaerat mollitia soluta illum architecto!
									</p>
								</div>
							</div>
							<div className="flex flex-col">
								<div className="flex w-full items-center justify-start border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
									<h2 className="w-[35%] text-[4vh] fusskia py-[0.5vh]">
										Email
									</h2>
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
								<div className="flex w-full items-center justify-start border-t border-dashed border-neutral-600/60 px-[1vw] py-[1.5vh]">
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
						<div className="w-[100%] flex items-center justify-between px-[0.5vw]">
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
							<p className="text-[1.15vh] font-medium uppercase">Profile</p>
							<div className="w-[0.75vh] h-[0.75vh] bg-neutral-800"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
