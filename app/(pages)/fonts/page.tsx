const FontsPage = () => {
	return (
		<div>
			<div className="flex h-screen overflow-y-hidden overflow-x-hidden w-full max-w-[100vw]">
				<div className="w-[22.5vw] h-fit fixed top-[7.5vh] left-0 pl-[2vw] bg-blue-300/0">
					<a href="/" className="fusskia text-[2.5vh]">
						{"<-"} See all works.
					</a>
				</div>
				<div className="w-[77.5vw] fixed top-[7.5vh] left-[22.5vw] h-fit border-b-4 bg-green-400/0">
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
					<div className="flex flex-col z-10 relative border-t border-dashed border-neutral-900/25 min-h-[30vh] max-h-[65vh] overflow-y-auto border-b">
						<a
							href="/fonts/flowy"
							className="flex h-[18vh] cursor-pointer overflow-hidden transition-all ease-in-out hover:h-[41vh] duration-500 shrink-0"
						>
							<div className="w-full pl-[2vw] pt-[2vh] relative">
								<h2 className="fusskia text-[3vh]">Flowy Font</h2>
								<h2 className=" text-[1.75vh]">April, 2025</h2>
								<p className=" text-[1.75vh] absolute top-[2vh] right-[2vw]">
									Check it out {"->"}
								</p>
							</div>
							<div className="bg-white w-full h-full border-l border-dashed border-neutral-900/25 p-[2vh] py-[1vh]">
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
						</a>

						<a
							href="/fonts/written-scribble"
							className="flex h-[18vh] cursor-pointer overflow-hidden transition-all ease-in-out hover:h-[41vh] duration-500 shrink-0 border-y border-neutral-900/25 border-dashed"
						>
							<div className="w-full pl-[2vw] pt-[2vh] relative">
								<h2 className="fusskia text-[3vh]">Written Scribble Font</h2>
								<h2 className=" text-[1.75vh]">April, 2025</h2>
								<p className=" text-[1.75vh] absolute top-[2vh] right-[2vw]">
									Check it out {"->"}
								</p>
							</div>
							<div className="bg-white w-full h-full border-l border-dashed border-neutral-900/25 p-[2vh] py-[1vh]">
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
						</a>
						<a
							href="/fonts/washing-machine"
							className="flex h-[18vh] cursor-pointer overflow-hidden transition-all ease-in-out hover:h-[41vh] duration-500 shrink-0 border-y border-neutral-900/25 border-dashed"
						>
							<div className="w-full pl-[2vw] pt-[2vh] relative">
								<h2 className="fusskia text-[3vh]">Written Scribble Font</h2>
								<h2 className=" text-[1.75vh]">April, 2025</h2>
								<p className=" text-[1.75vh] absolute top-[2vh] right-[2vw]">
									Check it out {"->"}
								</p>
							</div>
							<div className="bg-white w-full h-full border-l border-dashed border-neutral-900/25 p-[2vh] py-[1vh]">
								<h2 className="text-[7vh] leading-[8vh] washing-machine">
									Aa Bb Cc Dd Ee
								</h2>
								<h2 className="text-[7vh] leading-[8vh] washing-machine">
									Gg Hh Ii Jj Kk
								</h2>
								<p className="text-[2.75vh] leading-[3.5vh] washing-machine mt-[1.5vh]">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aspernatur, praesentium! Laboriosam, error accusantium?
									Aspernatur quibusdam ipsa dicta, possimus rem officia? Dolore
									dolores doloribus vitae illum quos excepturi quam suscipit?
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FontsPage;
