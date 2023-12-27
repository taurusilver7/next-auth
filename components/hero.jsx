"use client";

import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						Before they sold out
						<br className="hidden lg:inline-block" />
						readymade gluten
					</h1>
					<p className="mb-8 leading-relaxed">
						Copper mug try-hard pitchfork pour-over freegan heirloom
						neutra air plant cold-pressed tacos poke beard tote bag.
						Heirloom echo park mlkshk tote bag selvage hot chicken
						authentic tumeric truffaut hexagon try-hard chambray.
					</p>
					<div className="flex justify-center">
						<Button
							variant=""
							className="bg-sky-500 hover:bg-sky-600 focus:outline-none rounded-lg"
						>
							Get in touch
						</Button>
						<Button
							variant="ghost"
							className="focus:outline-none rounded-lg"
						>
							View Plans
						</Button>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded-l"
						alt="hero"
						src="https://i.morioh.com/2023/06/19/e654d35c.webp"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
