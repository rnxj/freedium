"use client";

import { LeftHand, RightHand } from "~/components/Hands";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import domainList from "~/lib/domains";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

const FormSchema = z.object({
  url: z.string().refine((url) => {
    let inList = false;
    for (const domain of domainList) {
      if (url.match(domain)) {
        inList = true;
        break;
      }
    }
    return inList;
  }, "Please enter a valid domain that's using Medium's service"),
});

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  // const session = await getServerAuthSession();
  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/bypass?url=${data.url}`);
  }

  return (
    <div>
      <div className="mx-auto pb-10 pt-24">
        <div className="grid grid-cols-1 gap-1 text-center lg:grid-cols-5">
          <div className="z-10 ml-5 hidden lg:col-span-1 lg:block">
            <LeftHand />
          </div>
          <h1 className="z-10 max-w-full px-6 py-12 text-5xl font-extrabold tracking-tight md:px-32 lg:col-span-3 lg:px-6 lg:text-7xl">
            Unlock the Knowledge Behind the Paywall!
          </h1>
          <div className="z-10 mr-5 hidden lg:col-span-1 lg:block">
            <RightHand />
          </div>
        </div>
      </div>

      <div className="mb-20 flex flex-col items-center gap-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://medium.com/..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Bypass</Button>
          </form>
        </Form>

        {/* <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <Button>
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
              {session ? "Sign out" : "Sign in"}
            </Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
