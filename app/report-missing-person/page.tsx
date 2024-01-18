"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useToast } from "@/components/ui/use-toast";

import { NavigateHome } from "@/components/NavigateHome";
import { ReportImpactBtn } from "@/components/ReportImpact";
import { HeaderGroup } from "@/components/HeaderGroup";

import axios from "axios";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Missing person's name is required",
    })
    .max(50),
  age: z.string(),
  skinColor: z.string().min(2),
  languages: z.string().min(3),
  reportedBy: z.string().min(2, {
    message: "Your name is required",
  }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "Invalid phone number",
    })
    .max(14),
  relationshipWithPerson: z.string().min(4).max(14),
});

export default function ReportMissingPerson() {
  return (
    <div className="space-y-[26px] py-6">
      <NavigateHome />
      <HeaderGroup>
        <p>Missing person</p>
        <p className="text-em-black leading-7 text-[72%]">
          Create a missing person record
        </p>
        <p className="text-[40%]">Fill appropriately and accordingly</p>
      </HeaderGroup>
      <div className="space-y-[32px]">
        <ProfileForm />
        <footer className="text-center pt-40 flex flex-col justify-center">
          <ReportImpactBtn />
          <small className="text-xs pt-10">
            Updates are real time, Last Website Update : 10:07AM
          </small>
        </footer>
      </div>
    </div>
  );
}

function ProfileForm() {
  const router = useRouter();
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      skinColor: "",
      languages: "",
      reportedBy: "",
      phoneNumber: "",
      relationshipWithPerson: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "/api/missing-persons", values)
      .then((res) => {
        toast({
          title: "Success",
          description: res.data.reportedBy + ", We've received your request.",
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
        <p className="text-em-red font-semibold">Missing Person Details</p>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="***" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="22 years" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skinColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skin Colour</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a skin colour to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Light">Light</SelectItem>
                  <SelectItem value="Black">Black</SelectItem>
                  <SelectItem value="Fair">Fair</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Speak What language?</FormLabel>
              <FormControl>
                <Input placeholder="Yoruba, English, Igbo, Hausa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-em-red font-semibold">Your Details</p>
        <FormField
          control={form.control}
          name="reportedBy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder=".." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="relationshipWithPerson"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Relation with Person</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select who you are to them" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Brother">Brother</SelectItem>
                  <SelectItem value="Sister">Sister</SelectItem>
                  <SelectItem value="Parent">Parent</SelectItem>
                  <SelectItem value="Guardian">Guardian</SelectItem>
                  <SelectItem value="Neighbour">Neighbour</SelectItem>
                  <SelectItem value="Friend">Friend</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Form>
  );
}
