import React from "react";

const FontsPage = () => {
	return (
		<div>
			<div className="flex pl-[2vw] pt-[2vh] overflow-x-hidden h-screen overflow-y-hidden w-screen">
				<div className="w-[22.5%] h-fit fixed top-[7.5vh] left-[2vw]">
					<a href="/" className="fusskia text-[2.5vh]">
						{"<-"} See all works.
					</a>
				</div>
				<div className="w-[77.5vw] fixed top-[7.5vh] left-[22.5vw] h-fit border-b-4">
					<img
						src="/imgs/folder-light-yellow.png"
						className="w-[50vw] absolute top-0 left-0"
						alt=""
					/>
					<div className="bg-[#ffe95d] rounded-[1vh] rounded-r-none absolute top-[5vh] h-full w-full"></div>
					<p className="relative fusskia text-[2vh] left-[1.75vw] z-10 mt-[3vh] w-fit">
						05
					</p>
					<h2 className="relative text-[7vh] left-[1.75vw] z-10 fusskia mt-[1vh]">
						My Fonts
					</h2>
					<div className="flex w-full items-center justify-between z-10 relative px-[2vw] pb-[1vh]">
						<p className="w-full text-[1.75vh]">Title</p>
						<p className="w-full text-[1.75vh]">Font</p>
					</div>
					<div className="flex flex-col z-10 relative border-t-2 border-dashed border-neutral-900/25 min-h-[30vh] max-h-[65vh] overflow-y-auto border-b-2">
						<div className="flex h-[18vh] overflow-hidden transition-all ease-in-out hover:h-[41vh] duration-600 flex-shrink-0">
							<div className="w-full pl-[2vw] pt-[2vh]">
								<h2 className="fusskia text-[3vh]">Flowy Font</h2>
								<h2 className=" text-[1.75vh]">April, 2025</h2>
							</div>
							<div className="bg-white w-full h-full border-l-2 border-dashed border-neutral-900/25 p-[2vh] py-[1vh]">
								<h2 className="text-[9vh] leading-[8vh] jnae">
									Aa Bb Cc Dd Ee
								</h2>
								<h2 className="text-[9vh] leading-[8vh] jnae">
									Gg Hh Ii Jj Kk
								</h2>
								<p className="text-[3.25vh] leading-[3.25vh] jnae mt-[1.5vh]">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aspernatur, praesentium! Laboriosam, error accusantium?
									Aspernatur quibusdam ipsa dicta, possimus rem officia? Dolore
									dolores doloribus vitae illum quos excepturi quam suscipit?
									Sapiente. Lorem ipsum dolor sit amet.
								</p>
							</div>
						</div>

						<div className="flex h-[18vh] overflow-hidden transition-all ease-in-out hover:h-[41vh] duration-600 shrink-0 border-y-2 border-neutral-900/25 border-dashed">
							<div className="w-full pl-[2vw] pt-[2vh]">
								<h2 className="fusskia text-[3vh]">Written Scribble Font</h2>
								<h2 className=" text-[1.75vh]">April, 2025</h2>
							</div>
							<div className="bg-white w-full h-full border-l-2 border-dashed border-neutral-900/25 p-[2vh] py-[1vh]">
								<h2 className="text-[9vh] leading-[8vh] written-scribble">
									Aa Bb Cc Dd Ee
								</h2>
								<h2 className="text-[9vh] leading-[8vh] written-scribble">
									Gg Hh Ii Jj Kk
								</h2>
								<p className="text-[3.25vh] leading-[3.25vh] written-scribble mt-[1.5vh]">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aspernatur, praesentium! Laboriosam, error accusantium?
									Aspernatur quibusdam ipsa dicta, possimus rem officia? Dolore
									dolores doloribus vitae illum quos excepturi quam suscipit?
									Sapiente. Lorem ipsum dolor sit amet.
								</p>
							</div>
						</div>
						<div className="flex h-[18vh] overflow-hidden transition-all ease-in-out hover:h-[41vh] duration-600 flex-shrink-0 border-dashed">
							<div className="w-full pl-[2vw] pt-[2vh]">
								<h2 className="fusskia text-[3vh]">Written Scribble Font</h2>
								<h2 className=" text-[1.75vh]">April, 2025</h2>
							</div>
							<div className="bg-white w-full h-full border-l-2 border-dashed border-neutral-900/25 p-[2vh] py-[1vh]">
								<h2 className="text-[9vh] leading-[8vh] written-scribble">
									Aa Bb Cc Dd Ee
								</h2>
								<h2 className="text-[9vh] leading-[8vh] written-scribble">
									Gg Hh Ii Jj Kk
								</h2>
								<p className="text-[3.25vh] leading-[3.25vh] written-scribble mt-[1.5vh]">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aspernatur, praesentium! Laboriosam, error accusantium?
									Aspernatur quibusdam ipsa dicta, possimus rem officia? Dolore
									dolores doloribus vitae illum quos excepturi quam suscipit?
									Sapiente. Lorem ipsum dolor sit amet.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FontsPage;
