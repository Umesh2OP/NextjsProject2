"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSession, signIn, signOut } from "next-auth/react"
import { toast } from "sonner"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

export default function Navbar() {
  const { data: session } = useSession()

  const handleLogin = () => {
    toast("Redirecting to Google login…")
    signIn("google")
  }

  const handleLogout = () => {
    toast.success("Logging you out successfully 👋")
    signOut()
  }

  return (
    <nav className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-red-300">
          MyBlog
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="px-3 py-2 hover:text-red-500">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blog" className="px-3 py-2 hover:text-red-500">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Section */}
        <div className="flex items-center gap-3">
          {session ? (
            <>
              <span className="text-sm">Hello, {session.user?.name}</span>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
          )}
        </div>
      </div>
    </nav>
  )
}
