/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const StartupForm = () => {
  const [errors, _setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleFormSubmit = async (formData: FormData) => {
    console.log("🔍 StartupForm: Beginning form submission");
    try {
      setIsSubmitting(true);

      console.log(
        "📝 StartupForm: Form data entries:",
        Object.fromEntries(formData.entries())
      );

      formData.append("pitch", pitch);
      console.log("📄 StartupForm: Pitch content added, length:", pitch.length);

      console.log("🌐 StartupForm: Sending request to /api/create-pitch");
      const res = await fetch("/api/create-pitch", {
        method: "POST",
        body: formData,
      });

      console.log("✅ StartupForm: Response status:", res.status);
      const result = await res.json();
      console.log("📊 StartupForm: Response data:", result);

      if (result.status === "SUCCESS") {
        console.log(
          "🎉 StartupForm: Success! Redirecting to startup page",
          result._id
        );
        toast({
          title: "Success",
          description: "Your startup pitch has been created successfully",
        });

        router.push(`/startup/${result._id}`);
      } else {
        console.error("❌ StartupForm: Error from API:", result.error);
        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        });
      }

      return result;
    } catch (err) {
      console.error("💥 StartupForm: Exception caught:", err);
      toast({
        title: "Error",
        description: "An unexpected error has occurred",
        variant: "destructive",
      });

      return {
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    } finally {
      console.log("🏁 StartupForm: Request completed");
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await handleFormSubmit(formData);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto space-y-6 text-white py-12 px-6 sm:w-full md:w-[80%] lg:w-[70%]"
    >
      <hr className="bg-red-600" />
      <h1 className="text-3xl font-semibold text-white text-center">
        Pitch Your Amazing Startup
      </h1>
      {[
        { id: "title", label: "Title", placeholder: "Startup Title" },
        {
          id: "description",
          label: "Description",
          placeholder: "Startup Description",
          component: Textarea,
        },
        {
          id: "category",
          label: "Category",
          placeholder: "Startup Category (Tech, Health, Education...)",
        },
        { id: "link", label: "Image URL", placeholder: "Startup Image URL" },
      ].map(({ id, label, placeholder, component: Component = Input }) => (
        <div key={id} className="flex flex-col gap-2">
          <label htmlFor={id} className="text-lg font-medium">
            {label}
          </label>
          <Component
            id={id}
            name={id}
            required
            placeholder={placeholder}
            className="border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 p-3"
          />
          {errors[id] && (
            <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
          )}
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <label htmlFor="pitch" className="text-lg font-medium">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
            className: "rounded-md bg-[#111111] h-full",
          }}
          previewOptions={{ disallowedElements: ["style"] }}
        />
        {errors.pitch && (
          <p className="text-red-500 text-sm mt-1">{errors.pitch}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Your Pitch"}
        <Send size={20} />
      </Button>
    </form>
  );
};

export default StartupForm;
