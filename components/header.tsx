'use client'
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button";
import { Menu, Search, ShoppingCart } from "lucide-react";


export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full p-4 items">
            <div className="container flex item-center justify-between max-w-5xl mx-auto">
                <div className="flex md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-6 w-6"></Menu>
                        <span className="sr-only"> Abrir Menu</span>
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Link href="/" className="flez item-center space-x-2">
                        <span className="font-bold tex-xl"> Ecommer StarBien </span>
                    </Link>
                </div>
                <nav className=" hidden md:flex items center space-x-8">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary"  >
                        Inicio
                    </Link>
                    <Link href="/hombre" className="text-sm font-medium transition-colors hover:text-primary"  >
                        Hombre
                    </Link>
                    <Link href="/mujer" className="text-sm font-medium transition-colors hover:text-primary"  >
                        Mujer
                    </Link>
                    <Link href="/accesorios" className="text-sm font-medium transition-colors hover:text-primary"  >
                        Acessorios
                    </Link>
                    <Link href="/ofertas" className="text-sm font-medium transition-colors hover:text-primary"  >
                        Ofertas
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden md:flex">
                        <Search className="h-5 w-5"></Search>
                        <span className="sr-only"> Buscar </span>
                    </Button>
                    {/**Button de carrito */}
                    <Button variant="outline" size="icon" className="relative rounded-full">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only"> Carrito</span>

                    </Button>
                </div>
            </div>

        </header>
    )
}