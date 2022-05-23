import React from "react";

// https://cryptoicons.org/api/color/${coin}/600/ff00ff

const CoinLogo = ({logo}) => {

	return (
		<div className="coin__logo-contain">
			<img
				width='70'
				src={`https://s3-symbol-logo.tradingview.com/crypto/XTVC${logo}--big.svg`}
				alt={`logo coin`}
			/>
		</div>
	);
};

export default CoinLogo;
