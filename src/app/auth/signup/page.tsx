"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Github, Mail } from "lucide-react"

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4">
            <Card className="w-full max-w-md shadow-lg border-none bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        Enter your email below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <Input placeholder="John Doe" type="text" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input placeholder="name@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <Input type="password" />
                    </div>
                    <Button className="w-full">Sign Up</Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline">
                            <Github className="mr-2 h-4 w-4" /> Github
                        </Button>
                        <Button variant="outline">
                            <Mail className="mr-2 h-4 w-4" /> Google
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="justify-center text-sm text-muted-foreground">
                    Already have an account? <Link href="/auth/login" className="text-primary hover:underline ml-1">Sign in</Link>
                </CardFooter>
            </Card>

            {/* Background Decor */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-peach/20 rounded-full blur-3xl -z-10" />
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-3xl -z-10" />
        </div>
    )
}
