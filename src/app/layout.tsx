import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emotion repro',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
