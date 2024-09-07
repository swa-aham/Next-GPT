"use client";
// import { Metadata } from "next"
import { Button } from "@/components/ui/button";
import { Bot, Loader2, Send, User2 } from "lucide-react";
import { useChat } from "ai/react";
import { Input } from "@/components/ui/input";

// export const metadata : Metadata = {
//     title : "Next GPT <> Sign-In",
//     description : "gpt"
// }

export default function MessagesPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({ api: "api/genai" });
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {RenderForm()}
      {RenderMessage()}

      {/* {JSON.stringify(messages)} */}
    </main>
  );

  function RenderForm() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event, {
            data: {
              promt: input,
            },
          });
        }}
        className="w-full h-20px flex flex-row gap-2 items-center h-full"
      >
        <Input
          type="text"
          placeholder={
            isLoading ? "Generating. . ." : "enter your prompt . . ."
          }
          value={input}
          disabled={isLoading}
          onChange={handleInputChange}
          className="rounded-full "
        />
        <Button
          type="submit"
          className="rounded-full shadow-md border flex flex-row"
        >
          {isLoading ? (
            <Loader2 className="p-3 h-10 w-10 stroke-stone-500 animate-spin" />
          ) : (
            <Send className="p-3 h-10 w-10 stroke-stone-500" />
          )}
        </Button>
      </form>
    );
  }

  function RenderMessage() {
    return (
      <div className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
        {messages.map((m, index) => {
          return (
            <div
              className={`p-4 shadow-md border flex flex-row rounded-md ml-10 relative ${
                m.role === "user" ? "bg-slate-500" : ""
              }`}
            >
              {m.content}
              {m.role === "user" ? (
                <User2 className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg " />
              ) : (
                <Bot
                  className={`absolute top-2 -left-10 border rounded-full p-1 shadow-lg 
            ${
              isLoading && index === messages.length - 1 ? "animate-bounce" : ""
            }`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
