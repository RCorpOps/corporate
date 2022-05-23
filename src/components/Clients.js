import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import person from "../assets/person.png";
import arrow from "../assets/arrow.svg";
const Clients = () => {
	const responsive = {
		0: { items: 1 },
		568: { items: 1 },
		1024: { items: 1 },
	};

	const items = [
		<div
			className="item bg-white px-2 flex mx-auto flex-col items-center w-5/6 border-2 border-pink rounded relative"
			data-value="1"
		>
			<span className="pointer-events-none text-2xl leading-loose text-grey text-center max-w-2xl rounded select-none mt-20 mb-9">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
				repellendus nam temporibus aliquam accusantium doloribus aspernatur?
				Tempora quae iusto corrupti eos! Nobis libero expedita numquam.
			</span>
			<span className="mb-3 text-2xl text-black font-medium">
				Shirley Smith
			</span>
			<span className="mb-8 text-sm text-pink">OUR CUSTOMERS</span>
			<img
				style={{ width: "54px" }}
				className=" rounded-full mb-20"
				src={person}
				alt=""
			/>
			<span></span>
		</div>,
		<div
			className="item bg-white w-5/6 border-2 border-pink rounded relative flex flex-col items-center mx-auto"
			data-value="2"
		>
			<span className="pointer-events-none text-2xl leading-10 text-grey text-center max-w-2xl rounded select-none mt-20 mb-9">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
				repellendus nam temporibus aliquam accusantium doloribus aspernatur?
				Tempora quae iusto corrupti eos! Nobis libero expedita numquam.
			</span>
			<span className="mb-3">Shirley Smith</span>
			<span className="mb-8">OUR CUSTOMERS</span>
			<img
				style={{ width: "54px" }}
				className=" rounded-full mb-20"
				src={person}
				alt=""
			/>
		</div>,
		<div
			className="item bg-white w-5/6 border-2 border-pink rounded relative flex flex-col items-center mx-auto"
			data-value="3"
		>
			<span className="pointer-events-none text-2xl leading-10 text-grey text-center sel max-w-2xl roundedect-none mt-20 mb-9">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
				repellendus nam temporibus aliquam accusantium doloribus aspernatur?
				Tempora quae iusto corrupti eos! Nobis libero expedita numquam.
			</span>
			<span className="mb-3">Shirley Smith</span>
			<span className="mb-8">OUR CUSTOMERS</span>
			<img
				style={{ width: "54px" }}
				className="w-14 rounded-full mb-20"
				src={person}
				alt=""
			/>
		</div>,
	];
	return (
		<div className="bg-white-pink pb-40">
			<div className="container mx-auto flex flex-col items-center justify-center">
				<span className="text-center text-black text-5xl mb-12 mt-28">
					What Our <font className="font-medium">Clients</font> Say <br /> About
					Us.
				</span>
				<AliceCarousel disableDotsControls items={items} />
			</div>
		</div>
	);
};

export default Clients;
