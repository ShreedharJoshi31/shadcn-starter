// import { Link } from "react-router-dom";

import React from "react";
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import LineCharts from "../components/section/LineCharts";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent transactions from your store.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <a href="/">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden xl:table-cell">Type</TableHead>
                    <TableHead className="hidden xl:table-cell">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-cell">Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Jane Cooper</TableCell>
                    <TableCell className="hidden xl:table-cell">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      <Badge variant="outline" className="font-normal">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      Yesterday
                    </TableCell>
                    <TableCell className="text-right">$2500.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cody Fisher</TableCell>
                    <TableCell className="hidden xl:table-cell">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      <Badge variant="outline" className="font-normal">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      January 14, 2023
                    </TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Dianne Russell
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      <Badge variant="outline" className="font-normal">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      December 29, 2023
                    </TableCell>
                    <TableCell className="text-right">$1000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Olga Simpson</TableCell>
                    <TableCell className="hidden xl:table-cell">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      <Badge variant="outline" className="font-normal">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      December 1, 2023
                    </TableCell>
                    <TableCell className="text-right">$2000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Savanna Nguyen
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      <Badge variant="outline" className="font-normal">
                        Unpaid
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      November 21, 2023
                    </TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your store's recent activity.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium leading-none">Logged in</p>
                  <span className="ml-auto text-xs text-muted-foreground">
                    1 hour ago
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium leading-none">
                    Updated product
                  </p>
                  <span className="ml-auto text-xs text-muted-foreground">
                    2 hours ago
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium leading-none">
                    Added new product
                  </p>
                  <span className="ml-auto text-xs text-muted-foreground">
                    3 hours ago
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium leading-none">
                    Deleted product
                  </p>
                  <span className="ml-auto text-xs text-muted-foreground">
                    4 hours ago
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium leading-none">
                    Updated settings
                  </p>
                  <span className="ml-auto text-xs text-muted-foreground">
                    5 hours ago
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div>
          <LineCharts />
        </div>
      </main>
    </div>
  );
}
