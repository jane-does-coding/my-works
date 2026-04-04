import Image from "next/image";

export default function Home() {
	return (
		<div className="h-screen max-h-screen w-full">
			<div className="flex flex-col h-screen w-full pt-[1vh]">
				<div className="flex px-[2vw] w-full items-center justify-between mt-[2vh]">
					<h1 className="text-[8vh] monas w-1/2">Works</h1>
					<h1 className="text-[8vh] monas w-1/2 opacity-25">Archieve</h1>
				</div>

				{/* Folder 01 */}
				<a
					href="/websites"
					className="folder fixed bottom-[-10vh] hover:bottom-[-9vh] transition-all duration-200 left-0 bg-green-200/0 group"
				>
					<p className="absolute top-[2.5vh] fusskia text-[3vh] left-[1.75vw] z-10">
						01
					</p>
					<h2 className="absolute top-[6.5vh] text-[5.5vh] left-[1.75vw] z-10 fusskia">
						My Websites
					</h2>

					<img
						src="/imgs/folder-light-yellow.png"
						className="w-[50vw] h-[60vh] group-hover:drop-shadow-neutral-800/40 transition-all ease-in-out drop-shadow-2xl drop-shadow-neutral-700/20 z-9 relative"
						alt=""
					/>

					<div className="absolute transition-all duration-300 top-[8vh] group-hover:top-[-13vh] -rotate-8 left-[5vw] bg-white rounded-[0.25vh] border border-dashed w-[16vw] h-[23vh]">
						<img
							src="/imgs/paint.png"
							className="object-cover w-full h-full drop-shadow-2xl drop-shadow-neutral-800/30 "
							alt=""
						/>
					</div>
					<div className="absolute transition-all duration-300 top-[8vh] group-hover:top-[-9vh] -rotate-2 left-[17vw] bg-white rounded-[0.25vh] border border-dashed w-[15vw] h-[20vh]">
						<img
							src="/imgs/crumbled.png"
							className="object-cover w-full h-full drop-shadow-2xl drop-shadow-neutral-800/30 "
							alt=""
						/>
					</div>
					<div className="absolute transition-all duration-300 top-[8vh] group-hover:top-[-11vh] rotate-9 right-[5vw] bg-white rounded-[0.25vh] border border-dashed w-[17vw] h-[21vh]">
						<img
							src="/imgs/what-the-duck.png"
							className="object-cover w-full h-full drop-shadow-2xl drop-shadow-neutral-800/30 "
							alt=""
						/>
					</div>
				</a>

				{/* Folder 02 */}
				<a
					href="/hackathons"
					className="folder fixed bottom-[-10vh] hover:bottom-[-9vh] transition-all duration-200 right-0 bg-green-200/0 group"
				>
					<p className="absolute top-[2.5vh] fusskia text-[3vh] left-[1.75vw] z-10">
						02
					</p>
					<h2 className="absolute top-[6.5vh] text-[5.5vh] left-[1.75vw] z-10 fusskia">
						Hackathon Wins
					</h2>

					<img
						src="/imgs/folder-light.png"
						className="w-[50vw] h-[60vh] group-hover:drop-shadow-neutral-800/40 transition-all ease-in-out drop-shadow-2xl drop-shadow-neutral-700/20 relative z-9"
						alt=""
					/>

					<div className="absolute transition-all duration-300 top-[7vh] group-hover:top-[-12vh] -rotate-8 left-[8vw] bg-white rounded-[0.25vh] border border-dashed w-[14vw] h-[18vh]">
						<img
							src="/imgs/flagship.png"
							className="object-cover w-full h-full drop-shadow-2xl drop-shadow-neutral-800/30 "
							alt=""
						/>
					</div>
					<div className="absolute transition-all duration-300 top-[7vh] group-hover:top-[-9vh] rotate-1 left-[20.25vw] bg-white rounded-[0.25vh] border border-dashed w-[12.5vw] h-[20vh] overflow-hidden">
						<img
							src="/imgs/waystar.png"
							className="object-cover w-full h-full drop-shadow-2xl drop-shadow-neutral-800/30  scale-115"
							alt=""
						/>
					</div>
					<div className="absolute transition-all duration-300 top-[7vh] group-hover:top-[-14vh] rotate-9 right-[5vw] bg-white rounded-[0.25vh] border border-dashed w-[12.5vw] h-[25vh]">
						<img
							src="/imgs/skillsUSA.png"
							className="object-cover w-full h-full drop-shadow-2xl drop-shadow-neutral-800/30 "
							alt=""
						/>
					</div>
				</a>

				{/* Folder 03 */}
				<a
					href="/graphic"
					className="folder fixed bottom-[-25vh] hover:bottom-[-24vh] transition-all duration-200 left-0 bg-green-200/0 group"
				>
					<p className="absolute top-[2.5vh] fusskia text-[3vh] left-[1.75vw] z-10">
						03
					</p>
					<h2 className="absolute top-[6.5vh] text-[5.5vh] left-[1.75vw] z-10 fusskia">
						Graphic Designs
					</h2>

					<img
						src="/imgs/folder-light.png"
						className="w-[40vw] h-[60vh] group-hover:drop-shadow-neutral-800/40 transition-all ease-in-out drop-shadow-2xl drop-shadow-neutral-700/20 relative z-9"
						alt=""
					/>

					<div className="absolute transition-all duration-300 top-[7vh] group-hover:top-[-10vh] -rotate-8 left-[4vw] bg-white rounded-[0.25vh] border border-dashed w-[12.5vw] h-[25vh]"></div>
					<div className="absolute transition-all duration-300 top-[7vh] group-hover:top-[-15vh] -rotate-1 left-[15vw] bg-white rounded-[0.25vh] border border-dashed w-[12.5vw] h-[25vh]"></div>
					<div className="absolute transition-all duration-300 top-[7vh] group-hover:top-[-9vh] rotate-9 left-[25vw] bg-white rounded-[0.25vh] border border-dashed w-[12.5vw] h-[25vh]"></div>
				</a>

				{/* Folder 04 */}
				<a
					href="/events"
					className="folder fixed bottom-[-25vh] hover:bottom-[-24vh] transition-all duration-200 right-0 bg-green-200/0 group"
				>
					<p className="absolute top-[2.5vh] fusskia text-[3vh] left-[1.75vw] z-10">
						04
					</p>
					<h2 className="absolute top-[6.5vh] text-[5.5vh] left-[1.75vw] z-10 fusskia">
						Events Organized
					</h2>

					<img
						src="/imgs/folder-gray.png"
						className="w-[60vw] h-[60vh] group-hover:drop-shadow-neutral-800/40 transition-all ease-in-out drop-shadow-2xl drop-shadow-neutral-700/20 relative z-9"
						alt=""
					/>

					<div className="absolute transition-all duration-300 top-[8vh] group-hover:top-[-13vh] -rotate-12 left-[9vw] bg-white rounded-[0.25vh] border border-dashed w-[15vw] h-[25vh]">
						<img
							src="/imgs/campfire2.png"
							className="object-cover w-full h-full drop-shadow-2xl drop-shadow-neutral-800/30 "
							alt=""
						/>
					</div>
					<div className="absolute transition-all duration-300 top-[8vh] group-hover:top-[-10vh] -rotate-2 left-[23vw] bg-white rounded-[0.25vh] border border-dashed w-[17.5vw] h-[20vh]">
						<img
							src="/imgs/campfire.png"
							className="object-cover w-full h-full drop-shadow-2xl drop-shadow-neutral-800/30 "
							alt=""
						/>
					</div>
					<div className="absolute transition-all duration-300 top-[8vh] group-hover:top-[-11vh] rotate-9 left-[40vw] bg-white rounded-[0.25vh] border border-dashed w-[15vw] h-[23vh]">
						<img
							src="/imgs/midnight.png"
							className="object-cover w-full h-full drop-shadow-2xl drop-shadow-neutral-800/30 "
							alt=""
						/>
					</div>
				</a>

				{/* Folder 05 */}
				<a
					href="/fonts"
					className="folder fixed bottom-[-40vh] hover:bottom-[-39vh] transition-all duration-200 left-0 bg-green-200/0 group"
				>
					<p className="absolute top-[2.5vh] fusskia text-[3vh] left-[1.75vw] z-10">
						05
					</p>
					<h2 className="absolute top-[6.5vh] text-[5.5vh] left-[1.75vw] z-10 fusskia">
						My Fonts
					</h2>

					<img
						src="/imgs/folder-light-yellow.png"
						className="w-[50vw] h-[60vh] group-hover:drop-shadow-neutral-800/40 transition-all ease-in-out drop-shadow-2xl drop-shadow-neutral-700/20 relative z-9"
						alt=""
					/>

					<div className="absolute transition-all duration-300 top-[9vh] group-hover:top-[-15vh] -rotate-8 left-[5vw] bg-white rounded-[0.25vh] border border-dashed w-[23vw] h-[25vh] p-[1.5vh]">
						<h2 className="jnae text-[10vh] leading-[8vh]">Aa Bb Cc</h2>
						<p className="jnae text-[5vh] leading-[4vh]">
							Lorem ipsum dolor sit, amet consecte adipisicing elit. Earum, id.
						</p>
					</div>
					<div className="absolute transition-all duration-300 top-[9vh] group-hover:top-[-9vh] rotate-4 left-[24vw] bg-white rounded-[0.25vh] border border-dashed w-[22vw] h-[20vh] p-[1.5vh]">
						<h2 className="written-scribble text-[11vh] leading-[8vh]">
							Aa Bb Cc
						</h2>
						<p className="written-scribble text-[5vh] leading-[4vh]">
							Lorem ipsum dolor sit, amet consecte adipisicing elit. Earum, id.
						</p>
					</div>
				</a>

				{/* Folder 06 */}
				<a
					href="/uiux-design"
					className="folder fixed bottom-[-40vh] hover:bottom-[-39vh] transition-all duration-200 right-0 bg-green-200/0 group"
				>
					<p className="absolute top-[2.5vh] fusskia text-[3vh] left-[1.75vw] z-10">
						06
					</p>
					<h2 className="absolute top-[6.5vh] text-[5.5vh] left-[1.75vw] z-10 fusskia">
						UI/UX Designs
					</h2>

					<img
						src="/imgs/folder-light.png"
						className="w-[50vw] h-[60vh] group-hover:drop-shadow-neutral-800/40 transition-all ease-in-out drop-shadow-2xl drop-shadow-neutral-700/20 relative z-9"
						alt=""
					/>

					<div className="absolute transition-all duration-300 top-[7vh] group-hover:top-[-14vh] -rotate-8 left-[6vw] bg-white rounded-[0.25vh] border border-dashed w-[15vw] h-[25vh]"></div>
					<div className="absolute transition-all duration-300 top-[7vh] group-hover:top-[-10vh] left-[17vw] bg-white rounded-[0.25vh] border border-dashed w-[17vw] h-[20vh]"></div>
					<div className="absolute transition-all duration-300 top-[7vh] group-hover:top-[-12vh] rotate-9 left-[33vw] bg-white rounded-[0.25vh] border border-dashed w-[13.5vw] h-[25vh]"></div>
				</a>
			</div>
		</div>
	);
}
