"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";



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

  const [email, setEmail] = useState("");

  function SignUp(e: React.FormEvent) {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log('Email submitted:', email);
    // Add any additional logic you need here
  }
  return (
  

    <div className="card shrink-0  items-center w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={(e) => SignUp(e)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="you@gmail.com"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn btn-wide  btn-primary  text-xl"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
  )
    
}
