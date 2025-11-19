import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, Download, BookOpen, Clock, Award } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Book({ params }: { params: { id: string } }) {
  const { id } = params;

  // const API_URL = `http://my_backend.test/api/books/${id}`;

  const API_URL = `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/${id}`;

  let book = null;

  try {
    const response = await fetch(API_URL, { cache: "no-store" });
    const data = await response.json();

    // Handle Laravel response variations
    if (data && data.data) {
      book = data.data;
    } else {
      book = data;
    }
  } catch (error) {
    
    console.error("Error fetching book:", error);
  }

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Book Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Cover Image */}
            <div className="space-y-6">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted shadow-2xl">
                <img
                  src={book.coverImage || "/placeholder.svg"}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

           
           {/* Book Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {book.genre}
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
                  {book.title}
                </h1>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(book.rating)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{book.rating}
                  </span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {book.description}
                </p>
              </div>

              <Separator />

              {/* Book Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Pages:</span>
                  <span className="font-medium">{book.pages ?? "N/A"}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Published:</span>
                  <span className="font-medium">{book.publishDate ?? "N/A"}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">ISBN:</span>
                  <span className="font-medium">{book.isbn ?? "N/A"}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-medium">Digital</span>
                </div>
              </div>

              <Separator />

              {/* Price and Purchase */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif font-bold">${book.price}</span>
                  <span className="text-muted-foreground">USD</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="flex-1 text-base">
                    <Link href={`/checkout/${book.id}`}>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Purchase Now
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="flex-1 text-base bg-transparent"
                  >
                    <Link href="#preview">Read Sample</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Features if exist */}
          {book.features && book.features.length > 0 && (
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold mb-6">What Readers Love</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {book.features.map((feature: string, index: number) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <p className="font-medium text-center">{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

