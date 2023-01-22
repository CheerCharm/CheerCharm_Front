import React, { useState } from "react";
import * as S from "./CheerList.style";
import cheer1 from "../../assets/images/CharmPage/cheer1.svg";
import cheer2 from "../../assets/images/CharmPage/cheer2.svg";
import cheer3 from "../../assets/images/CharmPage/cheer3.svg";

const CheerList = ({ cheers, setModal }) => {
	const src = [cheer1, cheer2, cheer3];
	return (
		<>
			{cheers.length === 0 ? (
				<h1>텅</h1>
			) : (
				<>
					{cheers &&
						cheers.map((ch, idx) => {
							return (
								<S.CheerRect onClick={() => setModal(true)}>
									<S.CheerImg src={src[idx % 3]} />
									<S.CheerText>{ch.name}</S.CheerText>
								</S.CheerRect>
							);
						})}
				</>
			)}
		</>
	);
};

export default React.memo(CheerList);