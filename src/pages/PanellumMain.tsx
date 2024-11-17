import React, { useEffect, useRef } from "react";

function PanellumMain() {
	const pannellumRef = useRef(null);
	const panoramaPath = process.env.PUBLIC_URL + "/images/room.jpg";

	useEffect(() => {
		if (window?.pannellum) {
			window?.pannellum.viewer(pannellumRef.current, {
				type: "equirectangular",
				panorama: panoramaPath,
				autoLoad: true,
				compass: true,
			});
		}
	}, [panoramaPath]);
	return (
		<div>
			<h2>360-Degree Viewer</h2>
			<div ref={pannellumRef} style={{ width: "600px", height: "400px" }}></div>
		</div>
	);
}

export default PanellumMain;
