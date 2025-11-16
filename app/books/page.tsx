"use client";

import { EbookCard } from "@/components/ebook-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useState, useEffect } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

  // const LARAVEL_API_URL = "http://my_backend.test/api/books";

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(LARAVEL_API_URL, { cache: "no-store" });
        const data = await res.json();

        // Laravel returns 
        if (Array.isArray(data)) {
          setBooks(data);
        } else if (Array.isArray(data.data)) {
          setBooks(data.data);
        } else {
          console.error("Unexpected API response:", data);
          setBooks([]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading books...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 m-2">
          {books.map((book) => (
            <EbookCard
              key={book.id}
              id={book.id}
              title={book.title}
              description={book.description}
              price={book.price}
              rating={book.rating}
              genre={book.genre}
              coverImage={book.coverImage}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
