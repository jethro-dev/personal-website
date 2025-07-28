"use client";

import { z } from "zod";
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
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useState, useTransition } from "react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { sendMessage } from "@/action/send-email";
import { Loader2 } from "lucide-react";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(200).optional(),
});

export function DrawerDemo() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  // React 19 Form Action
  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const result = await sendMessage(formData);
        
        if (result.success) {
          setOpen(false);
          toast.success("Message received. Thank you!");
        } else {
          toast.error(result.error || "Failed to send message");
        }
      } catch (error) {
        console.error("Failed to send message:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    });
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
            <form action={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-light text-xs">Name</label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="font-light text-xs"
                  onPointerDown={(e) => e.stopPropagation()}
                  disabled={isPending}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="font-light text-xs">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="font-light text-xs"
                  onPointerDown={(e) => e.stopPropagation()}
                  disabled={isPending}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-light text-xs">
                  Message (optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="I really like your work. Let's connect!"
                  className="resize-none font-light text-xs"
                  onPointerDown={(e) => e.stopPropagation()}
                  disabled={isPending}
                />
              </div>
              
              <DrawerFooter className="px-0">
                <Button type="submit" disabled={isPending}>
                  {isPending ? (
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
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
