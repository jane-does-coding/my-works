import React from "react";

const FeaturedWorks = () => {
	return (
		<div className="w-[100vw] h-screen overflow-x-hidden relative overflow-y-scroll">
			<div className="bg-blue-400/0 z-80 relative h-[95vh] top-[5vh]"></div>
			<div className="fixed top-[5vh] left-0 z-10">
				<img
					src="/imgs/folder-light.png"
					className="w-[45vw] h-[80vh]"
					alt=""
				/>
				<div className="w-[100vw] h-[88vh] bg-[#DFDFDF] top-[7vh] left-0 absolute">
					<h2 className="absolute text-[2.5vh] uppercase left-[1.75vw] z-10 fusskia top-[-4vh]">
						Featured Work 01
					</h2>
					<div className="flex border-b border-dashed border-neutral-600/60 py-[4vh] px-[2vw] items-center justify-center">
						<h1 className="fusskia text-[7.5vh] leading-[8vh] w-[60%]">
							Campfire, Game Jam for Students in Utah{" "}
						</h1>
						<div className="w-[25%] ml-auto h-[15vh] flex flex-col relative justify-center items-start">
							<p className="text-[2vh] font-extralight">Februrary, 2026</p>
							<p className="mb-auto text-[2vh] font-extralight">
								Organizing, Hackathon, Events
							</p>
							<p className="mt-auto relative text-[2vh] font-extralight">
								A Hackathon made by Teenagers, for Teenagers
							</p>
						</div>
					</div>
					<div className="flex h-[63vh] bg-blue-400/0 py-[4vh]">
						<div className="flex flex-col w-[30%]">
							<p className="text-[2.5vh] font-extralight leading-[4vh] mt-[1vh] px-[2vw]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								totam, ipsa explicabo facilis eveniet laudantium quas
								repudiandae itaque sit? Beatae. Lorem ipsum dolor, sit amet
								consectetur adipisicing elit. Fuga, libero.
							</p>
							<a href="/" className="fusskia text-[2.5vh] pl-[2vw] mt-[4vh]">
								View Project {"->"}
							</a>
						</div>
						<div className="flex flex-col w-[45%] pr-[2vh]">
							<img
								src="/imgs/campfire.png"
								className="w-full h-full object-cover"
								alt=""
							/>
						</div>
						<div className="flex flex-col items-center justify-center w-[25%] gap-[2vh] pr-[2vh]">
							<img
								src="/imgs/campfire.png"
								className="w-full h-[48%] object-cover"
								alt=""
							/>
							<img
								src="/imgs/campfire2.png"
								className="w-full h-[48%] object-cover"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute top-[95vh] left-0 z-80">
				<img
					src="/imgs/folder-light-yellow.png"
					className="w-[45vw] h-[80vh] ml-[25vw]"
					alt=""
				/>
				<div className="w-[100vw] h-[88vh] bg-[#ffe95d] top-[7vh] left-0 absolute z-10">
					<h2 className="absolute text-[2.5vh] uppercase left-[1.75vw] z-10 fusskia top-[-4vh] ml-[25vw]">
						Featured Work 02
					</h2>
					<div className="flex border-b border-dashed border-neutral-600/60 py-[4vh] px-[2vw] items-center justify-center">
						<h1 className="fusskia text-[7.5vh] leading-[8vh] w-[60%]">
							Campfire, Game Jam for Students in Utah{" "}
						</h1>
						<div className="w-[25%] ml-auto h-[15vh] flex flex-col relative justify-center items-start">
							<p className="text-[2vh] font-extralight">Februrary, 2026</p>
							<p className="mb-auto text-[2vh] font-extralight">
								Organizing, Hackathon, Events
							</p>
							<p className="mt-auto relative text-[2vh] font-extralight">
								A Hackathon made by Teenagers, for Teenagers
							</p>
						</div>
					</div>
					<div className="flex h-[63vh] bg-blue-400/0 py-[4vh]">
						<div className="flex flex-col w-[30%]">
							<p className="text-[2.5vh] font-extralight leading-[4vh] mt-[1vh] px-[2vw]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								totam, ipsa explicabo facilis eveniet laudantium quas
								repudiandae itaque sit? Beatae. Lorem ipsum dolor, sit amet
								consectetur adipisicing elit. Fuga, libero.
							</p>
							<a href="/" className="fusskia text-[2.5vh] pl-[2vw] mt-[4vh]">
								View Project {"->"}
							</a>
						</div>
						<div className="flex flex-col w-[45%] pr-[2vh]">
							<img
								src="/imgs/campfire.png"
								className="w-full h-full object-cover"
								alt=""
							/>
						</div>
						<div className="flex flex-col items-center justify-center w-[25%] gap-[2vh] pr-[2vh]">
							<img
								src="/imgs/campfire.png"
								className="w-full h-[48%] object-cover"
								alt=""
							/>
							<img
								src="/imgs/campfire2.png"
								className="w-full h-[48%] object-cover"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed top-[5vh] left-[56vw] z-1 overflow-visible">
				<img
					src="/imgs/folder-dark.png"
					className="w-[45vw] -scale-x-100 h-[80vh] z-0"
					alt=""
				/>
				<div className="w-[100vw] h-[88vh] bg-[#1d3c70] top-[7vh] left-0 absolute z-10">
					<a
						href="/"
						className="absolute text-[2.5vh] uppercase left-[8vw] text-white z-10 fusskia top-[-4vh] ml-[25vw]"
					>
						See all Work
					</a>
				</div>
			</div>
		</div>
	);
};

export default FeaturedWorks;
