import React, { useState, useEffect } from "react";
import MarketList from "./MarketList";

const Market = () => {
	const [dataServer, setDataServer] = useState([]);

	useEffect(() => {
		//Elijo los pares de monedas que me indican en el challenge
		fetch('https://api.binance.com/api/v3/exchangeInfo?symbols=["BTCBUSD","ETHBUSD","BNBBUSD","LUNABUSD","SOLBUSD","LTCBUSD","MATICBUSD","AVAXBUSD","XRPBUSD","BUSDUSDT"]')
			.then(
				async response => {
					const body = await response.json();
					console.log("Respuesta socket", body);
					setDataServer(body.symbols);
				},
				err => {
					console.log("Error desde la solicitud");
				}
			)
			.catch(err => {
				console.log("Error en procesamiento");
			});
		return () => {
			console.log("Clean up");
		};
	}, []);
	return (
		<>
			<h1>Cotizaciones</h1>
			<h2>Monedas disponibles</h2>
			<MarketList coins={dataServer} />
		</>
	);
};

export default Market;
