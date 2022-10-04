import React, { useEffect } from "react";
import Iframe from "react-iframe";

// useEffect(() => {
// 	Array.from(document.getElementsByTagName("iframe")).forEach((iframe) => {
// 		iframe.contentWindow.addEventListener(
// 			"load",
// 			() => {
// 				const doc = iframe.contentWindow.document;
// 				iframe.height = doc.body.scrollHeight;
// 			},
// 			true
// 		);
// 		iframe.contentWindow.addEventListener(
// 			"resize",
// 			() => {
// 				iframe.height = iframe.contentWindow.document.body.scrollHeight + 40;
// 			},
// 			true
// 		);
// 	});
// }, []);

function rfq() {
	return (
		<>
			<div className="min-h-[100vh] ">
				<iframe
					src="https://form.asana.com/?k=XadmS3lTRA-KFCsdbp676w&d=1200250413180775"
					width={"100%"}
					height={"100%"}
				></iframe>
			</div>
		</>
	);
}

export default rfq;
