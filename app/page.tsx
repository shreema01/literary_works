"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EbookCard } from "@/components/ebook-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const LARAVEL_API_URL = "http://my_backend.test/api/books";

  const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

  useEffect(() => {
    async function fetchFeaturedBooks() {
      try {
        const res = await fetch(LARAVEL_API_URL, { cache: "no-store" });
        const data = await res.json();

        let books = [];

        if (Array.isArray(data.data)) {
          books = data.data;
        } else if (Array.isArray(data)) {
          books = data;
        }

        const mappedBooks = books.map((book: any) => ({
          id: book.id,
          title: book.title,
          description: book.description,
          price: book.price,
          rating: book.rating,
          genre: book.genre,
          coverImage: book.cover_image
            ? `${process.env.NEXT_PUBLIC_LARAVEL_HOST}/${book.cover_image}`
            : "/placeholder.svg",
        }));

        setFeaturedBooks(mappedBooks);
      } catch (error) {
        console.error("Error loading featured books:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFeaturedBooks();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Stories That Stay With You
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover beautifully crafted narratives exploring imagination,
              emotion, and human experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/books">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent"
              >
                <Link href="/about">Meet the Author</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                Featured Works
              </h2>
              <p className="text-muted-foreground">
                Handpicked stories for discerning readers
              </p>
            </div>

            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link href="/books">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="text-center py-10 text-muted-foreground">
              Loading featured books...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBooks.slice(0, 4).map((book) => (
                <EbookCard key={book.id} {...book} />
              ))}
            </div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="ghost">
              <Link href="/books">
                View All Books
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

     
      <Footer />
    </div>
  );
}
