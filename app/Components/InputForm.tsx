"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";



import Link from "next/link";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    
  }

  return <p>hii</p>

    {/* <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-[300px] text-left border py-4 px-8 rounded-3xl shadow-lg shadow-black space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@yourgmail.com" {...field} />
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <Link href="/Form">Submit</Link>
        </Button>
      </form>
    </Form> */}
    
}
