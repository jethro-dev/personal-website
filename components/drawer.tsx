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
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { send } from "@/action/send-email";
import { Loader2 } from "lucide-react";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(200).optional(),
});

export function DrawerDemo() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      // Try to send the form data
      const res = await send(values);
      // If send is successful, reset the form and provide user feedback
      form.reset();
      setLoading(false);
      setOpen(false);
      toast.success("Message received. Thank you!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to send message:", error);
        toast.error(`Error: ${error.message}`);
      } else {
        // Handle the case where the error is not an instance of Error
        console.error("An unexpected error occurred:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      // Finally block will run regardless of try/catch outcome
      setLoading(false); // Make sure to stop the loading indicator
    }
  }

  return (
    <Drawer shouldScaleBackground open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <MovingBorderButton
          // borderRadius="1.75rem"
          className="bg-white bg-background px-4 py-2 text-sm font-medium h-auto"
        >
          Message me
        </MovingBorderButton>
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
                        <Input
                          {...field}
                          className="font-light text-xs"
                          onPointerDown={(e) => e.stopPropagation()}
                        />
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
                        <Input
                          {...field}
                          className="font-light text-xs"
                          onPointerDown={(e) => e.stopPropagation()}
                        />
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
                          onPointerDown={(e) => e.stopPropagation()}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="font-light text-xs" />
                    </FormItem>
                  )}
                />
                <DrawerFooter className="px-0">
                  <Button disabled={loading}>
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </Button>

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
