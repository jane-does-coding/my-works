import React from "react";

const FontsPage = () => {
	return (
		<div>
			<div className="flex pl-[2vw] mt-[2vh] overflow-x-hidden h-screen w-[100vw]">
				<div className="w-[22.5%] h-fit">
					<h2 className="fusskia text-[2.5vh] fixed">{"<-"} See all works.</h2>
				</div>
				<div className="w-[77.5%] relative h-fit">
					<img
						src="/imgs/folder-light.png"
						className="w-[50vw] absolute top-0 left-0"
						alt=""
					/>
					<div className="bg-[#DFDFDF] rounded-[1vh] rounded-r-none absolute top-[5vh] h-full w-full"></div>
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
					<div className="flex flex-col z-10 relative border-t-2 border-dotted border-neutral-500">
						<div className="flex">
							<div className="w-full pl-[2vw] pt-[2vh]">
								<h2 className="fusskia text-[3vh]">Flowy Font</h2>
								<h2 className=" text-[1.75vh]">April, 2025</h2>
							</div>
							<div className="bg-white w-full h-full border-l-2 border-dotted border-neutral-500 p-[2vh]">
								<h2 className="text-[10vh] leading-[10vh] jnae">
									Aa Bb Cc Dd Ee
								</h2>
								<p className="text-[3vh] leading-[3vh] jnae">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aspernatur, praesentium! Laboriosam, error accusantium?
									Aspernatur quibusdam ipsa dicta, possimus rem officia? Dolore
									dolores doloribus vitae illum quos excepturi quam suscipit?
									Sapiente.
								</p>
							</div>
						</div>
						<div className="flex border-y-2 border-dotted border-neutral-500">
							<div className="w-full pl-[2vw] pt-[2vh]">
								<h2 className="fusskia text-[3vh]">Written Scribble Font</h2>
								<h2 className=" text-[1.75vh]">April, 2025</h2>
							</div>
							<div className="bg-white w-full h-full border-l-2 border-dotted border-neutral-500 p-[2vh]">
								<h2 className="text-[10vh] leading-[10vh] written-scribble">
									Aa Bb Cc Dd Ee
								</h2>
								<p className="text-[3vh] leading-[3vh] written-scribble">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aspernatur, praesentium! Laboriosam, error accusantium?
									Aspernatur quibusdam ipsa dicta, possimus rem officia? Dolore
									dolores doloribus vitae illum quos excepturi quam suscipit?
									Sapiente.
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
