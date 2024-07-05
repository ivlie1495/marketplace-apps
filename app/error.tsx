'use client'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<div className="flex min-h-56 w-full flex-col items-center justify-center text-lg">
			<h2>{error.message}</h2>
			<button onClick={reset}>Try again</button>
		</div>
	)
}
