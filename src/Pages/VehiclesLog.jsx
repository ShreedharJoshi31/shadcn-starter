import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const logsData = [
  {
    "Car No. Plate": "HR26CK8571",
    "Owner Name": "Harsh",
    Visitor: true,
    "Reason Of Visit": "Job",
    "Parking Spot No.": "A101",
    "Date and Time of Parking": "2023-06-25T10:30:00",
  },
  {
    "Car No. Plate": "MH2OBY3665",
    "Owner Name": "Shreedhar",
    Visitor: false,
    "Reason Of Visit": "Some reason",
    "Parking Spot No.": "B202",
    "Date and Time of Parking": "2023-06-24T15:45:00",
  },
  {
    "Car No. Plate": "HR26CK8571",
    "Owner Name": "Harsh",
    Visitor: true,
    "Reason Of Visit": "Job",
    "Parking Spot No.": "A101",
    "Date and Time of Parking": "2023-06-25T10:30:00",
  },
  {
    "Car No. Plate": "MH2OBY3665",
    "Owner Name": "Shreedhar",
    Visitor: false,
    "Reason Of Visit": "Some reason",
    "Parking Spot No.": "B202",
    "Date and Time of Parking": "2023-06-24T15:45:00",
  },
  {
    "Car No. Plate": "HR26CK8571",
    "Owner Name": "Harsh",
    Visitor: true,
    "Reason Of Visit": "Job",
    "Parking Spot No.": "A101",
    "Date and Time of Parking": "2023-06-25T10:30:00",
  },
  {
    "Car No. Plate": "MH2OBY3665",
    "Owner Name": "Shreedhar",
    Visitor: false,
    "Reason Of Visit": "Some reason",
    "Parking Spot No.": "B202",
    "Date and Time of Parking": "2023-06-24T15:45:00",
  },
  {
    "Car No. Plate": "HR26CK8571",
    "Owner Name": "Harsh",
    Visitor: true,
    "Reason Of Visit": "Job",
    "Parking Spot No.": "A101",
    "Date and Time of Parking": "2023-06-25T10:30:00",
  },
  {
    "Car No. Plate": "MH2OBY3665",
    "Owner Name": "Shreedhar",
    Visitor: false,
    "Reason Of Visit": "Some reason",
    "Parking Spot No.": "B202",
    "Date and Time of Parking": "2023-06-24T15:45:00",
  },
  {
    "Car No. Plate": "HR26CK8571",
    "Owner Name": "Harsh",
    Visitor: true,
    "Reason Of Visit": "Job",
    "Parking Spot No.": "A101",
    "Date and Time of Parking": "2023-06-25T10:30:00",
  },
  {
    "Car No. Plate": "MH2OBY3665",
    "Owner Name": "Shreedhar",
    Visitor: false,
    "Reason Of Visit": "Some reason",
    "Parking Spot No.": "B202",
    "Date and Time of Parking": "2023-06-24T15:45:00",
  },
  {
    "Car No. Plate": "HR26CK8571",
    "Owner Name": "Harsh",
    Visitor: true,
    "Reason Of Visit": "Job",
    "Parking Spot No.": "A101",
    "Date and Time of Parking": "2023-06-25T10:30:00",
  },
  {
    "Car No. Plate": "MH2OBY3665",
    "Owner Name": "Shreedhar",
    Visitor: false,
    "Reason Of Visit": "Some reason",
    "Parking Spot No.": "B202",
    "Date and Time of Parking": "2023-06-24T15:45:00",
  },
];

function VehiclesLog() {
  return (
    <div className="ml-16 mt-5 p-5">
      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="px-7">
          <CardTitle className="text-4xl">Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Car No. Plate</TableHead>
                <TableHead>Owner Name</TableHead>
                <TableHead>Visitor</TableHead>
                <TableHead>Reason Of Visit</TableHead>
                <TableHead>Parking Spot No.</TableHead>
                <TableHead>Date and Time of Parking</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logsData.map((log, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {log["Car No. Plate"]}
                  </TableCell>
                  <TableCell>{log["Owner Name"]}</TableCell>
                  <TableCell>{log["Visitor"] ? "Yes" : "No"}</TableCell>
                  <TableCell>{log["Reason Of Visit"]}</TableCell>
                  <TableCell>{log["Parking Spot No."]}</TableCell>
                  <TableCell>
                    {new Date(log["Date and Time of Parking"]).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default VehiclesLog;
