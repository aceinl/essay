import Image from "next/image"
import Link from "next/link"
import { Bell, Search, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between min-h-[64px]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="UK Essays"
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold">UKEssays.com</span>
              <span className="text-xs hidden sm:inline">YOUR FINAL GRADE - GUARANTEED</span>
            </div>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
  <div className="relative hidden sm:block">
    <Input
      type="search"
      placeholder="Search"
      className="w-48 md:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/50"
    />
    <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/50" />
  </div>
  <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 px-2 sm:px-3">
    Support
  </Button>
  <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-primary-foreground hover:bg-primary-foreground/10 px-2 sm:px-3">
    <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
    <span className="hidden sm:inline">Alerts</span>
  </Button>
  <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-primary-foreground hover:bg-primary-foreground/10 px-2 sm:px-3">
    <User className="h-4 w-4 sm:h-5 sm:w-5" />
    <span className="hidden sm:inline">Sign in</span>
  </Button>
</div>
        </div>
      </div>
    </header>
  )
}
