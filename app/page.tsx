import { getPosts } from '@/server/actions/get-posts'

export default async function Home() {
	const data = await getPosts()

	return (
		<main>
			{data.map((post) => (
				<p key={post.id}>{post.title}</p>
			))}
		</main>
	)
}
