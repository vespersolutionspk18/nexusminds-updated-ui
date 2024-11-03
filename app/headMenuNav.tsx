"use client"

import Link from "next/link"
import { useRouter } from 'next/navigation';
import React from 'react';
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
    title: "Cloud Consulting",
    href: "/services?tab=cloud-consulting",
    description:
      "Empowering Your Business with Scalable Cloud Solutions",
  },
  {
    title: "Web Development",
    href: "/services?tab=web-development",
    description:
      "Crafting High-Performance Websites and Web Applications",
  },
  {
    title: "Artificial Intelligence",
    href: "/services?tab=artificial-intelligence",
    description:
      "Transforming Businesses with Intelligent AI Solutions",
  },
  {
    title: "Mobile Development",
    href: "/services?tab=mobile-development",
    description: "Streamlining Development with Seamless Mobile Solutions",
  },
  {
    title: "Startup Services",
    href: "/services?tab=startup-services",
    description:
      "Building Robust and Scalable Solutions for Startups",
  },
  {
    title: "Blockchain Development",
    href: "/services?tab=blockchain-development",
    description:
      "Blockchain Solutions for Secure and Transparent Transactions",
  },
  {
    title: "ERP Consulting",
    href: "/services?tab=erp-consulting",
    description:
      "ERP Solutions for Streamlined Business Operations",
  },
  {
    title: "Software Development",
    href: "/services?tab=software-development",
    description:
      "Enterprise Software Solutions for Enhanced Efficiency",
  },
  {
    title: "IoT Solutions",
    href: "/services?tab=iot-solutions",
    description:
      "Intelligent IoT Solutions for Seamless Connectivity",
  },
]

export function NavigationMenuDemo() {
  const router = useRouter();
 
  const casestudiesclick = () => {
    router.push('/#projectcards');
  };
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
          <NavigationMenuContent className="z-50 bg-white">
            <ul className="grid w-[400px] gap-1 md:gap-3 p-2 md:p-4 md:w-[700px] md:grid-cols-3 lg:w-[800px]">
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
          <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={casestudiesclick}>
            <p className="text-lg">Case Studies</p>
          </NavigationMenuLink>
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
  const router = useRouter();

  // Function to handle manual navigation
  const handleNavigation = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default link behavior
    router.push(href);      // Trigger the tab change by updating the URL
  };

  return (
    <li>
      <a
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        onClick={handleNavigation} // Manually trigger navigation on click
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
