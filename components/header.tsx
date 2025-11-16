"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-serif font-semibold">
            <BookOpen className="h-6 w-6" />
            <span>Literary Works</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/books" className="text-sm font-medium hover:text-accent transition-colors">
              Books
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
            <Button asChild variant="default" size="sm">
              <Link href="/books">Browse Collection</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-border/40">
            <Link
              href="/"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Books
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button asChild variant="default" size="sm" className="w-full">
              <Link href="/books" onClick={() => setMobileMenuOpen(false)}>
                Browse Collection
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
