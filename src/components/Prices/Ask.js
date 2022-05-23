import React, { useState, useEffect, useRef } from "react";

const Ask = ({par}) => {
	const [price, setPrice] = useState([]);
	const ws = useRef(null);
	const url = `wss://stream.binance.com:9443/ws/${par}@bookTicker`

	useEffect(() => {
		ws.current = new WebSocket(url);
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
			setPrice(message.a);
			console.log("event en efecto", message);
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
			<p className="currency">{formatterCurrency.format(price * 200)}</p>
		</div>
	);
};
export default Ask;
