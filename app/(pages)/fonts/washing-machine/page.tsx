"use client";
import { useState } from "react";

export default function FontTester() {
	const [text, setText] = useState(
		"The quick brown fox jumps over the lazy dog"
	);
	const [size, setSize] = useState(72);
	const [uppercase, setUppercase] = useState(false);

	const displayText = uppercase ? text.toUpperCase() : text;

	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

	return (
		<div className="flex h-screen overflow-hidden w-full">
			<div className="w-[22.5vw] fixed top-[7.5vh] left-0 pl-[2vw] pr-[2vw]">
				<a href="/fonts" className="fusskia text-[2.5vh]">
					{"<-"} Back to Fonts
				</a>

				<div className="mt-[6vh] flex flex-col gap-[4vh]">
					<div>
						<p className="text-[1.4vh] uppercase mb-[1vh] tracking-widest">
							Font Size
						</p>

						<input
							type="range"
							min="16"
							max="200"
							value={size}
							onChange={(e) => setSize(Number(e.target.value))}
							className="w-full appearance-none h-[0.6vh] bg-neutral-300 rounded-full
							[&::-webkit-slider-thumb]:appearance-none
							[&::-webkit-slider-thumb]:w-[1.6vh]
							[&::-webkit-slider-thumb]:h-[1.6vh]
							[&::-webkit-slider-thumb]:bg-black
							[&::-webkit-slider-thumb]:rounded-full
							[&::-webkit-slider-thumb]:cursor-pointer"
						/>

						<p className="text-[1.4vh] mt-[0.5vh] opacity-70">{size}px</p>
					</div>

					<div>
						<p className="text-[1.4vh] uppercase mb-[1vh] tracking-widest">
							Uppercase
						</p>

						<button
							onClick={() => setUppercase(!uppercase)}
							className="border border-dashed border-neutral-600/60 border-neutral-500
							px-[1vw] py-[0.7vh] text-[1.6vh]
							hover:bg-black hover:text-white transition-all"
						>
							{uppercase ? "Enabled" : "Disabled"}
						</button>
					</div>
				</div>
			</div>

			<div className="w-[77.5vw] fixed top-[7.5vh] left-[22.5vw] overflow-y-hidden overflow-x-hidden h-[92.7vh]">
				<img
					src="/imgs/folder-light-yellow.png"
					className="w-[50vw] absolute top-0 left-0"
					alt=""
				/>

				<div className="bg-[#ffe95d] rounded-[1vh] rounded-r-none absolute top-[5vh] h-full w-full"></div>

				<p className="relative fusskia text-[2vh] left-[1.75vw] z-10 mt-[3vh]">
					Font Playground
				</p>

				<h1 className="relative text-[7vh] pl-[1.75vw] z-10 fusskia mt-[1vh] border-b border-dashed border-neutral-600/60">
					Washing Machine Font
				</h1>

				<div className="h-[75vh] overflow-y-scroll overflow-x-hidden">
					<div className="relative z-10 px-[2vw] mt-[3vh]">
						<input
							value={text}
							onChange={(e) => setText(e.target.value)}
							className="w-full border border-dashed border-neutral-600/60 
						p-[1.5vh] text-[4vh] washing-machine
						bg-white outline-none
						focus:border-black transition-all"
							placeholder="Type something..."
						/>
					</div>

					<div className="relative z-10 px-[2vw] mt-[4vh] border-y border-dashed border-neutral-600/60 py-[5vh]">
						<p
							className="washing-machine leading-tight break-words transition-all"
							style={{ fontSize: `${size}px` }}
						>
							{displayText}
						</p>
					</div>

					<div className="relative z-10 px-[2vw] mt-[4vh] grid grid-cols-2 gap-[2vw]">
						<div className="border border-dashed border-neutral-600/60 p-[2vh] bg-white">
							<h2 className="fusskia text-[3vh] mb-[2vh]">Alphabet</h2>

							<div className="flex flex-wrap gap-[2vh] text-[7vh] leading-[7vh] washing-machine">
								{alphabet.map((letter) => (
									<div key={letter}>
										{letter.toUpperCase()}
										{letter}
									</div>
								))}
							</div>
						</div>

						<div className="border border-dashed border-neutral-600/60 p-[2vh] bg-white">
							<h2 className="fusskia text-[3vh] mb-[2vh]">Numbers & Symbols</h2>

							<div className="washing-machine text-[8vh] leading-[8vh]">
								<p>0 1 2 3 4 5 6 7 8 9</p>

								<p className="mt-[2vh] text-[8vh]">- + ! ? . , : ; ' "</p>
							</div>
						</div>
					</div>

					<div className="relative z-10 px-[2vw] mt-[4vh] pb-[8vh] ">
						<div className="border border-dashed border-neutral-600/60 p-[2vh] bg-white">
							<h2 className="fusskia text-[3vh] mb-[2vh]">Paragraph</h2>

							<p className="washing-machine text-[4vh] leading-[4vh]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
