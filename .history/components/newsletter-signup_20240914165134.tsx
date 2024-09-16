'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Submitted:', { email })
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-lg font-regular mb-4">Sign up for the newsletter</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative flex items-center bg-purple-100 rounded-lg overflow-hidden">
          <Input
            type="email"
            placeholder="hello@nexusmindstech.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 pl-4 pr-48 py-2 bg-transparent placeholder-purple-400 focus:outline-none focus:ring-0 focus:border-transparent"
            required
          />
          <Button 
            type="submit" 
            className="absolute right-0 bg-purple-600 hover:bg-purple-700 text-white h-[83%] mx-1 py-2 px-5 text-base rounded-md"
          >
            Sign up
          </Button>
        </div>
        <p className="text-sm text-gray-600 ml-1">
          I agree with Nexus Mind's{' '}
          <a href="/cloud-consulting" className="text-gray-600 underline">
            Privacy policy
          </a>
        </p>
      </form>
    </div>
  )
}