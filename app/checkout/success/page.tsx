"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Download, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function SuccessContent() {
  const searchParams = useSearchParams()
  const bookTitle = searchParams.get("book") || "Your Book"

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Purchase Complete!</h1>
              <p className="text-xl text-muted-foreground">
                Thank you for purchasing <span className="font-semibold text-foreground">{bookTitle}</span>
              </p>
            </div>

            {/* Download Card */}
            <Card className="text-left">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-semibold">What's Next?</h2>
                  <p className="text-muted-foreground">Your ebook is ready to download in multiple formats.</p>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full">
                    <Download className="mr-2 h-5 w-5" />
                    Download EPUB
                  </Button>
                  <Button size="lg" variant="outline" className="w-full bg-transparent">
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </Button>
                  <Button size="lg" variant="outline" className="w-full bg-transparent">
                    <Download className="mr-2 h-5 w-5" />
                    Download MOBI
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>
                      A confirmation email with download links has been sent to your email address. You can download
                      your book anytime from the link in the email.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="outline" size="lg" className="bg-transparent">
                <Link href="/books">
                  Browse More Books
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>

            {/* Support Message */}
            <div className="pt-8 text-sm text-muted-foreground">
              <p>
                Need help? Contact us at{" "}
                <a href="mailto:support@example.com" className="text-accent hover:underline">
                  support@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function Success() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div>Loading...</div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
