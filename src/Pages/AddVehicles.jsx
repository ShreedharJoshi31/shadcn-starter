import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

export default function AddVehicles() {
  const formSchema = z.object({
    ownerName: z.string({ required_error: "Owner Name is required" }),
    ownerDesg: z.string({ required_error: "Owner Desgination is required" }),
    licensePlateNo: z.string({
      required_error: "License Plate No. is required",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: "",
      ownerDesg: "",
      licensePlateNo: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="ownerName"
            className="w-full"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Owner Name</FormLabel>
                <FormControl>
                  <Input placeholder="Owner Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ownerDesg"
            className="w-full"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Owner Designation</FormLabel>
                <FormControl>
                  <Input placeholder="Owner Designation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="licensePlateNo"
            className="w-full"
            render={({ field }) => (
              <FormItem>
                <FormLabel>License Plate No.</FormLabel>
                <FormControl>
                  <Input placeholder="License Plate No." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
