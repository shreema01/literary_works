"use client"

import React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CreditCard, Lock, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"

// Mock data - in a real app, this would come from a database
const books = {
  "1": {
    id: "1",
    title: "The Midnight Garden",
    price: 12.99,
    coverImage: "/vintage-book-cover-midnight-garden.jpg",
  },
  "2": {
    id: "2",
    title: "Echoes of Tomorrow",
    price: 14.99,
    coverImage: "/futuristic-book-cover-space.jpg",
  },
  "3": {
    id: "3",
    title: "Whispers in the Wind",
    price: 9.99,
    coverImage: "/elegant-poetry-book-cover.jpg",
  },
  "4": {
    id: "4",
    title: "The Last Chronicle",
    price: 16.99,
    coverImage: "/fantasy-book-cover-dragon.jpg",
  },
}

export default function Checkout() {
  const router = useRouter()
  const params = useParams()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const book = books[params.id as keyof typeof books]

  if (!book) {
    return <div>Book not found</div>
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to success page
    router.push(`/checkout/success?book=${book.title}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Checkout</h1>
              <p className="text-muted-foreground">Complete your purchase securely</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        1
                      </span>
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <p className="text-sm text-muted-foreground">Your download link will be sent to this email</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        2
                      </span>
                      Payment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            maxLength={19}
                            required
                          />
                          <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            name="expiry"
                            type="text"
                            placeholder="MM/YY"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            maxLength={5}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            type="text"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
                          {isProcessing ? (
                            <>
                              <span className="animate-spin mr-2">⏳</span>
                              Processing...
                            </>
                          ) : (
                            <>
                              <Lock className="mr-2 h-5 w-5" />
                              Complete Purchase ${book.price}
                            </>
                          )}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-3">
                          Your payment is secured with 256-bit SSL encryption
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Instant Download</span>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-28 rounded overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={book.coverImage || "/placeholder.svg"}
                          alt={book.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm leading-tight mb-1">{book.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          Digital Download
                        </Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">${book.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="font-medium">$0.00</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="font-serif">${book.price}</span>
                    </div>

                    <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
                        <span>Instant download after purchase</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
                        <span>DRM-free in multiple formats</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
                        <span>30-day money-back guarantee</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
