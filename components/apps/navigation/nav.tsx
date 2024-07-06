import { LogIn } from 'lucide-react'
import Link from 'next/link'

import { auth } from '@/auth'

import UserButton from './user-button'
import { Button } from '@/components/ui/button'

export default async function Nav() {
	const session = await auth()

	return (
		<header className="py-8">
			<nav>
				<ul className="flex justify-between">
					<li>Logo</li>
					{!session && (
						<li>
							<Button asChild>
								<Link href="/auth/login" className="flex gap-2">
									<LogIn size={16} /> Login
								</Link>
							</Button>
						</li>
					)}
					{session && (
						<li>
							<UserButton user={session?.user} />
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}
