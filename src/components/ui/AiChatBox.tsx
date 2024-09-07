import { cn } from "@/lib/utils";
import {useChat} from "ai/react";
import { FileVideo } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { XCircle } from "lucide-react";
interface AIChatBoxProps{
    open : boolean;
    onClose: ()=>void;
}

export default function AIChatBox({open,onClose} : AIChatBoxProps) {
    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        setMessages,
        isLoading,
        error

    } = useChat();

    return <div className={cn("bottom-0 right-0 z-10 w-full max-w-[500px] p-1 x1: right-36",
        open ? "fixed" : "hidden"
    )}>
        <button onClick={onClose} className="mb-1 ms-auto block">
            <XCircle size={30}/>
        </button>
        <div className="flex h-[600px] flex-col rounded border bg-backgroundahadow-x1">
            <div className="h-full">Messages</div>
            <form onSubmit={handleSubmit}className="m-3 flex gap-1">
                <Input 
                value={input}
                onChange={handleInputChange}
                placeholder="Say something..."
                />
                <Button type= "submit"> Send</Button>
            </form>
        </div>
    </div>
}