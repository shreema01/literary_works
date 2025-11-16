import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface EbookCardProps {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  rating?: number;
  genre?: string;
  coverImage?: string;
}

export function EbookCard({
  id = "",
  title = "",
  description = "",
  price = 0,
  rating = 0,
  genre = "",
  coverImage = "/placeholder.svg",
}: EbookCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      
      {/* Image */}
      <Link href={`/books/${id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-muted cursor-pointer">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <CardContent className="p-4 space-y-2">
        <Badge variant="secondary" className="text-xs">
          {genre}
        </Badge>

        <Link href={`/books/${id}`}>
          <h3 className="font-serif font-semibold text-lg leading-tight group-hover:text-accent transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="font-medium">{rating}</span>
          <span className="text-muted-foreground">/5</span>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-2xl font-serif font-bold">
          ${price}
        </span>

        <Button asChild size="sm">
          <Link href={`/books/${id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
