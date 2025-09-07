export default function Footer() {
  return (
    <footer className="w-full border-t bg-background mt-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
        </div>
      </div>
    </footer>
  )
}
