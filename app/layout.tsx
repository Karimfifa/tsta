import { ClerkProvider, SignIn, SignedOut,SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <Link  href="/sign-up">Login</Link>
          </SignedOut>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
          {children}</body>
      </html>
    </ClerkProvider>
  )
}