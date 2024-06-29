import React from "react";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function AddVehicles() {
  return (
    <div className="ml-16">
      <div className="flex flex-row justify-end p-5 ">
        <Sheet className="">
          <SheetTrigger asChild>
            <Button variant="outline" className="bg-white text-black">
              Add New User
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[500px]">
            <SheetHeader>
              <SheetTitle>Add Vehicle Information</SheetTitle>
              <SheetDescription>
                Add Vehicles to Get your Vehicle Verified
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="items-center">
                <Label htmlFor="name" className="text-right mb-3">
                  Owner Name
                </Label>
                <Input id="name" value="Owner Name" className="col-span-3" />
              </div>
              <div className=" items-center ">
                <Label htmlFor="designation" className="text-right mb-3">
                  Owner Designation
                </Label>
                <Input
                  id="designation"
                  value="Owner Designation"
                  className="col-span-3"
                />
              </div>
              <div className="items-center ">
                <Label htmlFor="name" className="text-right mb-3">
                  License Plate Number
                </Label>
                <Input id="name" value="AB 00 XY 0000" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Add User</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="w-full p-5">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle className="text-4xl">Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Owner Name</TableHead>
                  <TableHead>Owner Designation</TableHead>
                  <TableHead>License Plate Number</TableHead>
                  <TableHead className="">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
