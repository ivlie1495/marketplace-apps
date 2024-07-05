'use server'

import { revalidatePath } from 'next/cache'

import { db } from '@/server'
import { posts } from '@/server/schema'

export const getPosts = async () => {
	const posts = await db.query.posts.findMany()

	if (!posts) {
		return []
	}

	return posts
}

export const createPost = async (formData: FormData) => {
	const title = formData.get('title')?.toString()

	if (!title) {
		return null
	}

	const post = await db.insert(posts).values({
		title,
	})

	if (!post) {
		return null
	}

	revalidatePath('/')

	return post
}
