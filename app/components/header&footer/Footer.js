// components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <div className="container h-fit w-full p-5">

            <div className="container w-full bg-black text-white p-5 py-10 rounded-2xl">


                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-wide">ShopEase</h2>
                        <p className="text-md font-semibold leading-8 my-10 text-gray-200 ">
                            Your trusted eCommerce partner for everyday needs.
                        </p>

                    </div>

                    <div>
                        <h3 className="font-semibold mb-8 text-xl ">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/categories" >Categories</Link></li>
                            <li><Link href="/deals" >Deals</Link></li>
                            <li><Link href="/new" >New Arrivals</Link></li>
                            <li><Link href="/gift-cards" >Gift Cards</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-8 text-xl ">About Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" >Who We Are</Link></li>
                            <li><Link href="/careers" >Careers</Link></li>
                            <li><Link href="/blog" >Blog</Link></li>
                            <li><Link href="/contact" >Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-8 text-xl ">Follow Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://facebook.com" target="_blank" >Facebook</a></li>
                            <li><a href="https://instagram.com" target="_blank" >Instagram</a></li>
                            <li><a href="https://x.com" target="_blank" >X (Twitter)</a></li>
                            <li><a href="https://linkedin.com" target="_blank" >LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200">
                    <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/terms">Terms of Use</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/cookies">Cookies Policy</Link>
                    </div>
                </div>

            </div>

        </div>
    );
}

