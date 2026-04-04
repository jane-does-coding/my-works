import React from "react";

const EventsPage = () => {
	return (
		<div>
			<div className="flex pl-[2vw] pt-[2vh] overflow-x-hidden h-screen overflow-y-hidden w-screen">
				<div className="w-[22.5%] h-fit fixed top-[7.5vh] left-[2vw]">
					<a href="/" className="fusskia text-[2.5vh]">
						{"<-"} See all works.
					</a>
				</div>
				<div className="w-[77.5%] fixed top-[7.5vh] left-[22.5vw] h-fit border-b-4">
					<img
						src="/imgs/folder-dark.png"
						className="w-[50vw] absolute top-0 left-0"
						alt=""
					/>
					<div className="bg-[#5F5F5F] rounded-[1vh] rounded-r-none absolute top-[5vh] h-full w-full"></div>
					<p className="relative fusskia text-[2vh] left-[1.75vw] z-10 mt-[3vh] w-fit text-white">
						04
					</p>
					<h2 className="text-white relative text-[7vh] left-[1.75vw] z-10 fusskia mt-[1vh] text-white">
						Events Organized
					</h2>
					<div className="flex w-full items-center justify-between z-10 relative px-[2vw] pb-[1vh]">
						<p className="w-3/5 text-[1.75vh] text-white">Title</p>
						<p className="w-2/5 text-[1.75vh] text-white">Image</p>
					</div>
					<div className="flex flex-col z-10 relative border-t-2 border-dashed border-neutral-200/35 min-h-[30vh] max-h-[65vh] overflow-y-auto border-b-2">
						<div className="flex h-[25vh] overflow-hidden transition-all ease-in-out hover:h-[45vh] duration-600 flex-shrink-0">
							<div className="w-3/5 pl-[2vw] pt-[2vh]">
								<h2 className="text-white fusskia text-[3vh]">Campfire Utah</h2>
								<h2 className="text-white  text-[1.75vh]">Februrary, 2026</h2>
								<p className="text-white text-[2vh] mt-[2.5vh] pr-[2vw]">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
									consectetur optio fuga a qui illo ducimus? Lorem, ipsum dolor
									sit amet consectetur adipisicing elit. Laborum tenetur
									sapiente numquam quas animi doloremque commodi hic eum!
								</p>
								<p className="text-white text-[2vh] mt-[6vh] pr-[2vw]">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
									consectetur optio fuga a qui illo ducimus? Lorem, ipsum dolor
									sit amet consectetur adipisicing elit. Voluptate repellendus
									vero expedita fugit reprehenderit suscipit debitis ex sint
									amet inventore!
								</p>
							</div>
							<div className="w-2/5 h-full border-l-2 border-dashed border-neutral-200/35 p-0">
								<img
									src="/imgs/campfire.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
						</div>

						<div className="flex h-[25vh] overflow-hidden transition-all ease-in-out hover:h-[45vh] duration-600 shrink-0 border-t-2 border-neutral-200/35 border-dashed">
							<div className="w-3/5 pl-[2vw] pt-[2vh]">
								<h2 className="text-white fusskia text-[3vh]">Midnight</h2>
								<h2 className="text-white  text-[1.75vh]">January, 2026</h2>
								<p className="text-white text-[2vh] mt-[2.5vh] pr-[2vw]">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
									consectetur optio fuga a qui illo ducimus? Lorem, ipsum dolor
									sit amet consectetur adipisicing elit. Laborum tenetur
									sapiente numquam quas animi doloremque commodi hic eum!
								</p>
								<p className="text-white text-[2vh] mt-[6vh] pr-[2vw]">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
									consectetur optio fuga a qui illo ducimus? Lorem, ipsum dolor
									sit amet consectetur adipisicing elit. Voluptate repellendus
									vero expedita fugit reprehenderit suscipit debitis ex sint
									amet inventore!
								</p>
							</div>
							<div className="w-2/5 h-full border-l-2 border-dashed border-neutral-200/35 p-0">
								<img
									src="/imgs/midnight.png"
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

export default EventsPage;
