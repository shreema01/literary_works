import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Award, BookOpen, Users, TrendingUp, Instagram, Twitter, Facebook } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <Badge variant="secondary" className="text-sm">
                  Award-Winning Author
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Meet the Author</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Crafting stories that explore the depths of human experience, one word at a time.
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
              <div className="order-1 lg:order-2">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted shadow-2xl">
                  <img
                    src="/author-portrait-professional.jpg"
                    alt="Author portrait"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold">12+</div>
                <div className="text-sm text-muted-foreground">Published Books</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Readers Worldwide</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold">8</div>
                <div className="text-sm text-muted-foreground">Literary Awards</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold">4.8</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">My Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I've been telling stories for as long as I can remember. What began as scribbled tales in childhood
                    notebooks has evolved into a lifelong passion for exploring the human condition through fiction.
                    With over a decade of published work, I've had the privilege of connecting with readers around the
                    world who find pieces of themselves in my characters and stories.
                  </p>
                  <p>
                    My writing draws inspiration from diverse sources: the gothic mysteries of classic literature, the
                    philosophical depth of science fiction, the emotional resonance of poetry, and the epic scope of
                    fantasy. Each genre offers unique tools for examining what it means to be human, to struggle, to
                    love, and to grow.
                  </p>
                  <p>
                    When I'm not writing, you'll find me reading voraciously, exploring new places for inspiration, or
                    engaging with the wonderful community of readers and writers who make this journey so rewarding. I
                    believe that stories have the power to change us, to help us see the world and ourselves in new
                    ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Philosophy */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Writing Philosophy</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold">Authenticity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every character, every scene, every word must ring true. I strive to create stories that feel
                      real, even when they're fantastical.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold">Depth</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Great stories operate on multiple levels. I aim to craft narratives that reward careful reading
                      and reflection.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold">Connection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      At its heart, storytelling is about connection—between writer and reader, between characters,
                      between ideas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Awards & Recognition</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">National Book Award Finalist</h3>
                        <p className="text-sm text-muted-foreground">
                          For "The Midnight Garden" - Fiction Category, 2024
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Hugo Award Winner</h3>
                        <p className="text-sm text-muted-foreground">For "Echoes of Tomorrow" - Best Novel, 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Pushcart Prize</h3>
                        <p className="text-sm text-muted-foreground">For poetry collection "Whispers in the Wind"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Let's Connect</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I love hearing from readers! Whether you have questions about my books, want to discuss a story, or just
                want to say hello, feel free to reach out.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild variant="default" size="lg">
                  <a href="mailto:author@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-5 w-5" />
                    Twitter
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="mr-2 h-5 w-5" />
                    Facebook
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
