"use client";
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Badge } from './ui/badge';
import Link from 'next/link';

export function StickyMenu() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="hidden md:flex flex-col items-center gap-6 fixed top-1/2 right-6 z-40 -translate-y-1/2">
      {/* Contact menu item */}
      <Link href="/contact" passHref legacyBehavior>
        <a
          className="relative group flex flex-col items-center justify-center w-12 h-12 rounded-full bg-background border border-border shadow-md hover:bg-primary/10 transition-colors"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Contact"
        >
          <MessageSquare className="w-6 h-6 text-foreground" />
          {/* Badge label on hover */}
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <Badge className="px-3 py-1 text-sm shadow-lg">Contact</Badge>
          </span>
        </a>
      </Link>
      {/* TODO: Add more menu items here */}
    </div>
  );
} 