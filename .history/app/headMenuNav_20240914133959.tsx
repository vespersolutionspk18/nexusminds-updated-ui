"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Cloud Computing",
    href: "/cloud-computing",
    description:
      "Empowering Your Business with Scalable Cloud Solutions",
  },
  {
    title: "Web Development",
    href: "/web-development",
    description:
      "Crafting High-Performance Websites and Web Applications",
  },
  {
    title: "Artificial Intelligence",
    href: "/artificial-intelligence",
    description:
      "Transforming Businesses with Intelligent AI Solutions",
  },
  {
    title: "DevOps",
    href: "/devops",
    description: "Streamlining Development with Seamless DevOps Integration",
  },
  {
    title: "UI \ UX",
    href: "/uiux",
    description:
      "Crafting Intuitive and Engaging User Experiences",
  },
  {
    title: "Mobile Development",
    href: "/mobile-development",
    description:
      "Building Seamless and Powerful Mobile Solutions",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="text-lg">Home</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><p className="text-lg">Services</p></NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
  <Link href="/#case-studies" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    <p className="text-lg">Case Studies</p>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <p className="text-lg">About Us</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string; title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </Link>
    </li>
  )
});
ListItem.displayName = "ListItem";
