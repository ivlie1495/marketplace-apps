'use server'

import { db } from '@/server'

export const getPosts = async () => {
	const posts = await db.query.posts.findMany()

	if (!posts) {
		return []
	}

	return posts
}
