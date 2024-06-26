import React from "react";

import { Menu, Package2, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background mx-4 md:mx-6">
        <nav className="hidden flex-col gap-7 text-lg font-medium md:flex md:flex-row  w-[50%] md:items-center md:gap-7 md:text-sm lg:gap-7">
          <a
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>

          <a
            href="/"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </a>
          <a
            href="/addvehicles"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Add Vehicles
          </a>
          <a
            href="/verifyvehicles"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Verify Vehicles
          </a>
          <a
            href="/vehicleslog"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Vehicles Log
          </a>
          {/* <a
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Analytics
          </a> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </a>
              <a href="/" className="hover:text-foreground">
                Dashboard
              </a>
              <a
                href="/addvehicles"
                className="text-muted-foreground hover:text-foreground"
              >
                Add Vehicles
              </a>
              <a
                href="/verifyvehicles"
                className="text-muted-foreground hover:text-foreground"
              >
                Verify Vehicles
              </a>
              <a
                href="/vehicleslog"
                className="text-muted-foreground hover:text-foreground"
              >
                Vehicles Log
              </a>
              {/* <a
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </a> */}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </header>
    </div>
  );
}
