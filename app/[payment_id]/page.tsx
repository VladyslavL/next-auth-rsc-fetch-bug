import RenderPage from "./renderPage";

export default async function Page({
	params,
}: {
	params: { payment_id: string };
}) {
	const res = await fetch(
		`${process.env.NEXTAUTH_URL}/api/v1/posts/${params.payment_id}`
	);

	const data = await res.text();

	return (
		<div className="space-y-2">
			<pre className="whitespace-pre-line">
				<code>{JSON.stringify(data, null, 2)}</code>
			</pre>

			<RenderPage params={params} />
		</div>
	);
}
