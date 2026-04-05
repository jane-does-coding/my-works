const AboutPage = () => {
	return (
		<div>
			<div className="flex flex-col items-center justify-between mt-[7vh]">
				<h1 className="text-[8vh] monas w-1/2 mr-auto ml-[2vw]">About me</h1>
				<div className="w-[97.5vw] min-h-[20vh] bg-[#DFDFDF] mr-auto rounded-[1vh] relative transition-all ease-in-out hover:mt-[0] mt-[2vh] duration-300">
					<div className="absolute bg-white w-[1.25vh] h-[1.25vh] top-[1vh] left-[1vh] rounded-full"></div>
					{/* <div className="h-[3.5vh] border-b border-dashed border-neutral-600/60 flex items-center justify-start w-full relative">
						<div className="w-[2.1%] h-full border-r border-dashed border-neutral-600/60"></div>
						<div className="w-[29%] h-full border-r border-dashed border-neutral-600/60"></div>
						<div className="w-[2.05%] h-full border-l border-dashed border-neutral-600/60 ml-auto"></div>
					</div> */}
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
							<h2>Preview</h2>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
