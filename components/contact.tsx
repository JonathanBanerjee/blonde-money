"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [result, setResult] = React.useState("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // setResult("Sending...");

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    if (!API_KEY) {
      console.error("API_KEY is not defined!");
      setResult("API Key is missing!");
      return;
    }
    formData.append("access_key", API_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          description: "Your message has been sent.",
        });

        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission failed", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div className="flex justify-center p-6 md:px-10 py-14 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="default"
            className={cn(
              "text-white",
              "bg-emerald-600",
              "rounded-lg",
              "hover:bg-green-300 ",
              "transition-colors",
              "duration-200",
              "p-2"
            )}
          >
            Get in touch
          </Button>
        </SheetTrigger>

        {/* Update the position to "bottom" */}
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Contact Us</SheetTitle>
            {/* <SheetDescription>
              Please fill out the form below to reach us.
            </SheetDescription> */}
          </SheetHeader>

          {/* Form Content */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-8 border shadow-lg rounded-lg"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Your message"
                        {...field}
                        rows={5}
                        className="w-full p-2 border rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SheetFooter>
                <Button
                  type="submit"
                  variant="default"
                  className={cn(
                    "bg-emerald-600",
                    "hover:bg-green-300 ",
                    "text-white",
                    "rounded-lg",
                    "transition-colors",
                    "duration-200",
                    "p-2"
                  )}
                >
                  Send
                </Button>
                <SheetClose asChild>
                  <Button variant="outline" className={cn("rounded-lg", "p-2")}>
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
              <span>{result}</span>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </div>
  );
}
