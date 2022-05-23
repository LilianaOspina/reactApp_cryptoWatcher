import React, { useState, useEffect, useRef } from "react";

const Bid = ({ par}) => {
	const [price, setPrice] = useState([]);
	const ws = useRef(null);

	useEffect(() => {
		ws.current = new WebSocket(`wss://stream.binance.com:9443/ws/${par}@bookTicker`);
		ws.current.onopen = () => console.log("conectados al websocket");
		ws.current.onclose = () => console.log("cerrado");

		const wsCurrent = ws.current;
		return () => {
			wsCurrent.close();
		};
	}, []);

	useEffect(() => {
		ws.current.onmessage = msj => {
			const message = JSON.parse(msj.data);
			setPrice(message.b);
			console.log("Mensaje desde el ws", message);
		};
	});


	const formatterCurrency = new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
		minimumFractionDigits: 4,
	});

	return (
		<div>
			<p>ARS</p>
			<p className='currency'>
				{formatterCurrency.format((1 / price) * 200)}
			</p>
		</div>
	);
};
export default Bid;
