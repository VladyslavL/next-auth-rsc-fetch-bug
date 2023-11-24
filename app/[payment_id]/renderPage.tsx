"use client";

import { useEffect, useState } from "react";

export default function RenderPage({
	params,
}: {
	params: { payment_id: string };
}) {
	const [data, setData] = useState();
	useEffect(() => {
		(async () => {
			const res = await fetch(`/api/v1/posts/${params.payment_id}`);
			const json = await res.json();
			setData(json);
		})();
	}, []);
	return (
		<div className="space-y-2">
			<pre>
				<code>{JSON.stringify(data, null, 2)}</code>
			</pre>
		</div>
	);
}
