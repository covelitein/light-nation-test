"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Mail, PhoneForwarded, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Reveal from "@/components/ui/Reveal";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Reveal as="header" className="w-full">
      {/* Reveal wrapper around header */}
      {/* mobile */}
      <div className="sm:hidden bg-black/40 flex justify-between text-white p-5 flex items-center gap-3 sm:gap-6">
        <div className="flex items-center gap-1 sm:gap-2">
          <PhoneForwarded className="text-red-500 size-5" />
          <span className="max-sm:text-[0.7rem]">+234 901 234 5678</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Mail className="text-red-500 size-5" />
          <span className="max-sm:text-[0.7rem]">info@lightnation.com</span>
        </div>
      </div>
      {/* Top Bar - Logo & Contact Info */}
      <div className="w-full py-3 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl sm:text-3xl font-bold">
            LightNation
          </h1>

          {/* Contact Info - Always Visible */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="sm:flex hidden text-white text-xs sm:text-sm flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <PhoneForwarded className="text-red-500 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="">+234 901 234 5678</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Mail className="text-red-500 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="">info@lightnation.com</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="hidden lg:flex items-center justify-between bg-black/50 backdrop-blur-sm border-t border-b border-white/10 w-full px-20 py-4">
        <nav className="py-2">
          <ul className="flex items-center gap-10 text-white text-sm font-medium">
            <li>
              <Link href="/#home" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-red-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#programs" className="hover:text-red-500 transition">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/#branches" className="hover:text-red-500 transition">
                Branches
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-red-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/offering" className="hover:text-red-500 transition">
                Offerings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/auth">
            <Button
              variant="outline"
              className="px-6 py-2 h-auto text-sm font-medium border border-red-500 hover:border-red-600 bg-transparent hover:bg-transparent text-red-500 cursor-pointer hover:text-red-600"
            >
              Login
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="px-6 py-2 h-auto text-sm font-medium rounded-sm bg-red-500 hover:bg-red-600 text-white cursor-pointer">
              Register
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        direction="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContent className="bg-[#0b0b0b]">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-white hover:text-red-500 transition"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </DrawerHeader>

          <div className="bg-[#0b0b0b]">
            <div className="space-y-6">
              {/* Mobile Navigation */}
              <nav>
                <ul className="space-y-1">
                  <li className="py-3 px-4">
                    <Link
                      href="/#home"
                      onClick={() => setDrawerOpen(false)}
                      className="block cursor-pointer hover:text-red-500 transition text-white text-base font-medium rounded-lg hover:bg-white/5"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="py-3 px-4">
                    <Link
                      href="/#about"
                      onClick={() => setDrawerOpen(false)}
                      className="block cursor-pointer hover:text-red-500 transition text-white text-base font-medium rounded-lg hover:bg-white/5"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="py-3 px-4">
                    <Link
                      href="/#programs"
                      onClick={() => setDrawerOpen(false)}
                      className="block cursor-pointer hover:text-red-500 transition text-white text-base font-medium rounded-lg hover:bg-white/5"
                    >
                      Programs
                    </Link>
                  </li>
                  <li className="py-3 px-4">
                    <Link
                      href="/#branches"
                      onClick={() => setDrawerOpen(false)}
                      className="block cursor-pointer hover:text-red-500 transition text-white text-base font-medium rounded-lg hover:bg-white/5"
                    >
                      Branches
                    </Link>
                  </li>
                  <li className="py-3 px-4">
                    <Link
                      href="/#services"
                      onClick={() => setDrawerOpen(false)}
                      className="block cursor-pointer hover:text-red-500 transition text-white text-base font-medium rounded-lg hover:bg-white/5"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="py-3 px-4">
                    <Link
                      href="/offering"
                      onClick={() => setDrawerOpen(false)}
                      className="block cursor-pointer hover:text-red-500 transition text-white text-base font-medium rounded-lg hover:bg-white/5"
                    >
                      Offerings
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10 px-5">
                <Link href="/auth" onClick={() => setDrawerOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full px-6 py-3 h-auto text-base font-medium border border-red-500 hover:border-red-600 bg-transparent hover:bg-transparent text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/auth" onClick={() => setDrawerOpen(false)}>
                  <Button className="w-full px-6 py-3 h-auto text-base font-medium rounded-sm bg-red-500 hover:bg-red-600 text-white cursor-pointer">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </Reveal>
  );
}
