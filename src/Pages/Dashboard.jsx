import React from "react";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import LineCharts from "../components/section/LineCharts";
import BarChart from "../components/section/BarChart";
import PieChart from "../components/section/PieChart";
import RadarChart from "../components/section/RadarChart";
import AreaChart from "../components/section/AreaChart";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-[98%] flex-col justify-center">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 ml-14">
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

        {/* Analysis  */}

        <div className="grid grid-cols-3 gap-5">
          {/* AreaChart */}
          <div className="col-span-2 border rounded-md shadow-lg p-5 pr-0">
            <p className="font-bold text-left text-xl mb-4">
              Rate of Parking Spots
            </p>
            <div className="flex justify-center">
              <AreaChart />
            </div>
          </div>

          {/* RadarChart */}
          <div className="col-span-1 border rounded-md shadow-lg p-5 pr-0 ">
            <p className="font-bold text-left text-xl mb-4">
              Average Parking Duration
            </p>
            <div className="flex justify-center">
              <RadarChart />
            </div>
          </div>

          {/* PieChart */}
          <div className=" col-span-1 border rounded-md shadow-lg p-5 pr-0">
            <p className="font-bold text-left text-xl mb-4">
              Rate of Parking Spots
            </p>
            <div className="flex justify-center">
              <PieChart />
            </div>
          </div>

          {/* Barchart */}
          <div className="border rounded-md shadow-lg p-5 pr-0">
            <p className="font-bold text-left text-xl mb-4">
              Average Parking Duration
            </p>
            <div className="flex justify-center">
              <BarChart />
            </div>
          </div>

          {/* Linechart */}
          <div className="border rounded-md shadow-lg p-5 pr-0">
            <p className="font-bold text-left text-xl mb-4">
              Rate of Parking Spots
            </p>
            <div className="flex justify-center">
              <LineCharts />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
