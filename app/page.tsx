import { createPost, getPosts } from '@/server/actions/posts'

export default async function Home() {
	const data = await getPosts()

	return (
		<main>
			{data.map((post) => (
				<p key={post.id}>{post.title}</p>
			))}
			<form action={createPost}>
				<input
					type="text"
					name="title"
					placeholder="Title"
					className="bg-black text-white"
				/>
				<button type="submit">Submit</button>
			</form>
		</main>
	)
}
