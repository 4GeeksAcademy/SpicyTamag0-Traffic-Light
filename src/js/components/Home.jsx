import React from "react";
import {useState} from "react";

const TrafficLight = () => {
	const [ color, setColor] = useState("red");

	const [ colors, setColors] = useState(["red", "yellow", "green"]);

	const changingColor = () => {
		const currentIndex = colors.indexOf(color);
		const nextIndex = (currentIndex + 1) % colors.length;
		setColor(colors[nextIndex]);
	};

	const addPurple = () => {
		if (!colors.includes("purple")) {
			setColors([...colors, "purple"]);
		}
	};

	return (
		<div>
			<div className="stick"></div>
			<div className="traffic-light">
				<div onClick={() => setColor("red")} className={"light red" + (color == "red" ? " glow" : "")}></div>
				<div onClick={() => setColor("yellow")} className={"light yellow" + (color == "yellow" ? " glow" : "")}></div>
				<div onClick={() => setColor("green")} className={"light green" + (color == "green" ? " glow" : "")}></div>
			</div>
			
			<button onClick={changingColor}>Cambiar color</button>
			
		</div>
	);
};

export default TrafficLight;