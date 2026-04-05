const HackathonsPage = () => {
	return (
		<div>
			<div className="flex overflow-x-hidden h-screen overflow-y-hidden w-screen">
				<div className="w-[22.5%] h-fit fixed top-[7.5vh] left-[2vw]">
					<a href="/" className="fusskia text-[2.5vh]">
						{"<-"} See all works.
					</a>
				</div>
				<div className="w-[77.5%] fixed top-[7.5vh] left-[22.5vw] h-fit border-b-4">
					<img
						src="/imgs/folder-light.png"
						className="w-[50vw] absolute top-0 left-0"
						alt=""
					/>
					<div className="bg-[#DFDFDF] rounded-[1vh] rounded-r-none absolute top-[5vh] h-full w-full"></div>
					<p className="relative fusskia text-[2vh] left-[1.75vw] z-10 mt-[3vh] w-fit">
						02
					</p>
					<h2 className="relative text-[7vh] left-[1.75vw] z-10 fusskia mt-[1vh]">
						Hackathon Wins
					</h2>
					<div className="flex w-full items-center justify-between z-10 relative px-[2vw] pb-[1vh]">
						<p className="w-full text-[1.75vh]">Title</p>
						<p className="w-full text-[1.75vh]">Image</p>
					</div>
					<div className="flex flex-col z-10 relative border-t-2 border-dashed border-neutral-900/25 min-h-[30vh] max-h-[65vh] overflow-y-auto border-b-2">
						<div className="flex h-[18vh] overflow-hidden transition-all ease-in-out hover:h-[41vh] duration-600 shrink-0">
							<div className="w-1/2 pl-[2vw] pt-[2vh]">
								<h2 className="fusskia text-[3vh]">
									SkillsUSA Web Development and Design
								</h2>
								<h2 className=" text-[1.75vh]">March, 2026</h2>
							</div>
							<div className="w-1/2 h-full border-l-2 border-dashed border-neutral-900/35 p-0">
								<img
									src="/imgs/skillsUSA.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
						</div>
						<div className="flex h-[18vh] overflow-hidden transition-all ease-in-out hover:h-[41vh] duration-600 border-t-2 border-neutral-900/35 border-dashed shrink-0">
							<div className="w-1/2 pl-[2vw] pt-[2vh]">
								<h2 className="fusskia text-[3vh]">
									Hack Club Flagship Game Jam
								</h2>
								<h2 className=" text-[1.75vh]">Februrary, 2026</h2>
							</div>
							<div className="w-1/2 h-full border-l-2 border-dashed border-neutral-900/35 p-0">
								<img
									src="/imgs/flagship.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
						</div>
						<div className="flex h-[18vh] overflow-hidden transition-all ease-in-out hover:h-[41vh] duration-600 border-t-2 border-neutral-900/35 border-dashed shrink-0">
							<div className="w-1/2 pl-[2vw] pt-[2vh]">
								<h2 className="fusskia text-[3vh]">Waystar</h2>
								<h2 className=" text-[1.75vh]">December, 2025</h2>
							</div>
							<div className="w-1/2 h-full border-l-2 border-dashed border-neutral-900/35 p-0">
								<img
									src="/imgs/waystar.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HackathonsPage;
