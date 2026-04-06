const UIUXDesigns = () => {
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
					<div className="bg-[#DFDFDF] rounded-[1vh] rounded-r-none absolute top-[5vh] min-h-[70vh] h-full w-full"></div>
					<p className="relative fusskia text-[2vh] left-[1.75vw] z-10 mt-[3vh] w-fit text-black">
						06
					</p>
					<h2 className="relative text-[7vh] left-[1.75vw] z-10 fusskia mt-[1vh] text-black">
						UI/UX Designs
					</h2>
					<div className="flex w-full items-center justify-between z-10 relative px-[2vw] pb-[1vh]">
						<p className="w-3/5 text-[1.75vh] text-black">Title</p>
						<p className="w-2/5 text-[1.75vh] text-black">Image</p>
					</div>
					<div className="flex flex-col z-10 relative border-t border-dashed border-neutral-600/60 min-h-[30vh] max-h-[65vh] overflow-y-auto">
						<div className="grid grid-cols-3 min-h-[50vh] gap-[2vw] py-[3vh] px-[2vw] overflow-hidden transition-all ease-in-out duration-500 shrink-0 border-b border-dashed border-neutral-600/60">
							<h1 className="fusskia text-[5vh]">Coming Soon</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UIUXDesigns;
