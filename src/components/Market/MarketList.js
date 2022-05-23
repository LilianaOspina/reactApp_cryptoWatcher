import React from "react";
import Names from "../Names/Names"
import CoinLogo from "../Logo/CoinLogo";
import Chart from "../Charts/Chart";
import Ask from "../Prices/Ask";
import Bid from "../Prices/Bid";

const MarketList = ({ coins }) => {
	return (
			<ul>
				{coins.map((coin, index) => {
                    return (
						<li className='marketlist' key={index + 1}>
							<div className='marketlist__logo-contain'>
								<CoinLogo logo={coin.baseAsset} />
							</div>
							<div className='marketlist__txt-contain'>
								<Names
									title={coin.baseAsset}
									fullname={coin.symbol}
								/>
							</div>
							<div className='marketlist__chart-contain'>
								<Chart />
							</div>
							<div className='marketlist__price-contain'>
								{coin.symbol === "BUSDUSDT" ? (
									<Bid par={coin.symbol.toLowerCase()} />
								) : (
									<Ask par={coin.symbol.toLowerCase()} />
								)}
							</div>
						</li>
					);
                })}
            </ul>
	);
};

export default MarketList;
