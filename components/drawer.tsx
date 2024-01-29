"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { tree } from "next/dist/build/templates/app-page";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(200).optional(),
});

export function DrawerDemo() {
  const [open, setOpen] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast.success("Message sent!");
    form.reset();
    setOpen(false);
  }
  return (
    <Drawer shouldScaleBackground open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Send me a message</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-8">
          <DrawerHeader className="px-0">
            <DrawerTitle>Send me a message</DrawerTitle>
            <DrawerDescription>
              Just fill in your name, and your email, that&apos;s it!
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-0 pb-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-light text-xs">Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="font-light text-xs" />
                      </FormControl>
                      <FormMessage className="font-light text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-light text-xs">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="font-light text-xs" />
                      </FormControl>

                      <FormMessage className="font-light text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-light text-xs">
                        Message (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="I really like your work. Let's connect!"
                          className="resize-none font-light text-xs"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-light text-xs" />
                    </FormItem>
                  )}
                />
                <DrawerFooter className="px-0">
                  <Button>Submit</Button>

                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </Form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
