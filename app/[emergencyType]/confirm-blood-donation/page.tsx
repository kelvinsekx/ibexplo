"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { NavigateHome } from "@/components/NavigateHome";
import { ReportImpactBtn } from "@/components/ReportImpact";
import { HeaderGroup } from "@/components/HeaderGroup";

import { hospitals } from "@/lib/static-db";

const formSchema = z.object({
  donatedAt: z.string(),
  pintOfBlood: z.string(),
  date: z.string(),
  name: z.string().min(2).max(50),
  phone: z.string().min(10).max(14),
});

export default function ReportMissingPerson({
  params,
}: {
  params: { emergencyType: string };
}) {
  return (
    <div className="space-y-[26px] py-6">
      <NavigateHome />
      <HeaderGroup>
        <p>I Made Blood Donation</p>
        <p className="text-em-black text-[72%]">
          Fill appropriately and accordingly
        </p>
        <p className="text-base font-bold text=[50%]">
          Your data is anonymous and kept secure
        </p>
      </HeaderGroup>
      <div className="space-y-[32px]">
        <ProfileForm emergencyType={params.emergencyType} />
      </div>
    </div>
  );
}

function ProfileForm({
  emergencyType,
}: {
  emergencyType: keyof typeof hospitals;
}) {
  const router = useRouter();
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      donatedAt: "",
      pintOfBlood: "",
      date: "",
      name: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    await axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "/api/confirm-donor", values)
      .then((res) => {
        toast({
          title: "Success",
          description: res.data.name + ", thank you for saving lives.",
        });
        setTimeout(() => {
          router.push("/");
        }, 300);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 lg:w-[70%] mx-auto"
      >
        <FormField
          control={form.control}
          name="donatedAt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Which Hospital</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Hospital you donated to" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {hospitals[emergencyType].map((hospital, index) => {
                    return (
                      <SelectItem key={index} value={hospital.name}>
                        {hospital.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pintOfBlood"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pint of Blood</FormLabel>
              <FormControl>
                <Input placeholder="0" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder=".." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>A Valid Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="(080 000 000)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit">Report</Button>
        </div>
      </form>
    </Form>
  );
}
