import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
	const pannellumRef = useRef(null);
	const streetPath = "http://localhost:5173" + "/images/street.jpg";
	const marketPath = "http://localhost:5173" + "/images/market.jpg";
	const spacePath = "http://localhost:5173" + "/images/space.jpg";
	const checkvarPath = "http://localhost:5173" + "/images/checkvar.jpg";

	useEffect(() => {
		if (window?.pannellum) {
			window?.pannellum.viewer(pannellumRef.current, {
				autoLoad: true,
				// hotSpotDebug: true,
				default: {
					firstScene: "circle",
				},

				scenes: {
					circle: {
						title: "Mason Circle",
						type: "equirectangular",
						panorama: streetPath,
						hotSpots: [
							{
								pitch: -20.878490061179196,
								yaw: -76.42090726998491,
								type: "scene",
								text: "Spring House or Dairy",
								sceneId: "house",
							},
							{
								pitch: -5,
								yaw: 45,
								type: "custom",
								cssClass: "w-30 h-30", // Sử dụng các class Tailwind
								createTooltipFunc: (hotSpotDiv) => {
									if (!hotSpotDiv.querySelector("img")) {
										const img = document.createElement("img");
										img.src = checkvarPath;
										img.className =
											"w-12 h-12  hover:scale-110 transition-transform"; // Class Tailwind cho ảnh
										hotSpotDiv.appendChild(img);
									}
								},
								clickHandlerFunc: () => {
									console.log("Hotspot clicked!");
								},
								hoverHandlerFunc: () => {
									console.log("Hotspot hovered!");
								},
							},
						],
					},

					house: {
						title: "Spring House or Dairy",
						type: "equirectangular",
						panorama: marketPath,
						hotSpots: [
							{
								pitch: -17.94519612423656,
								yaw: -67.96151368559049,
								type: "scene",
								text: "Mason Circle",
								sceneId: "circle",
							},
						],
					},
				},
			});
		}
	}, []);
	return <div ref={pannellumRef} style={{ width: 1000, height: 600 }} />;
}

export default App;
