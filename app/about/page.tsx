import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  value: string;
}

interface Author {
  title: string;
  description: string;
  story: string;
  writing_philosophy: string[];
  award_and_recognition: string[];
  social_links: SocialLink[];
  cover_image: string;
}

const AboutPage = async () => {
  const res = await fetch("http://my_backend.test/api/authors", {
    cache: "no-store",
  });

  const data = await res.json();

  const author: Author = data?.data?.[0] ?? null;

  if (!author) {
    return (
      <div className="text-center py-20 text-xl">
        ⚠ No author data received from API
      </div>
    );
  }

  const facebook = author.social_links?.[0]?.value ?? "";
  const instagram = author.social_links?.[1]?.value ?? "";
  const twitter = author.social_links?.[2]?.value ?? "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* TEXT AREA */}
              <div className="order-2 lg:order-1 space-y-6">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
                  {author.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {author.description}
                </p>

                <div className="flex gap-4 pt-4">
                  <Button asChild variant="default">
                    <Link href="#contact">Get in Touch</Link>
                  </Button>

                  <Button asChild variant="outline" className="bg-transparent">
                    <Link href="/books">View Books</Link>
                  </Button>
                </div>
              </div>

              {/* IMAGE */}

              <div className="order-1 lg:order-2">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted shadow-2xl">
                  <img
                    src={
                      author.cover_image
                        ? `${process.env.NEXT_PUBLIC_LARAVEL_HOST}/${author.cover_image}`
                        : "/placeholder.svg"
                    }
                    alt={author.title || "Author portrait"}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              My Story
            </h2>

            <p className="leading-relaxed text-lg text-muted-foreground whitespace-pre-line">
              {author.story}
            </p>
          </div>
        </section>

        {/* Writing Philosophy */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Writing Philosophy
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
              {author.writing_philosophy?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Awards */}
        <section className="py-16 md:py-24 bg-muted/10">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Awards & Recognition
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
              {author.award_and_recognition?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Let's Connect
              </h2>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild variant="default" size="lg">
                  <a href="mailto:info@example.com">
                    <Mail className="mr-2 h-5 w-5 inline-block" />
                    Email
                  </a>
                </Button>

                {facebook && (
                  <Button asChild variant="outline" size="lg">
                    <a href={facebook} target="_blank">
                      <Facebook className="mr-2 h-5 w-5 inline-block" />
                      Facebook
                    </a>
                  </Button>
                )}

                {instagram && (
                  <Button asChild variant="outline" size="lg">
                    <a href={instagram} target="_blank">
                      <Instagram className="mr-2 h-5 w-5 inline-block" />
                      Instagram
                    </a>
                  </Button>
                )}

                {twitter && (
                  <Button asChild variant="outline" size="lg">
                    <a href={twitter} target="_blank">
                      <Twitter className="mr-2 h-5 w-5 inline-block" />
                      Twitter
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
