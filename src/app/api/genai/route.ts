import {StreamingTextResponse, GoogleGenerativeAIStream, Message, StreamData, streamText  } from "ai";
import {GoogleGenerativeAI, Content} from "@google/generative-ai";


export const runtime = "edge";
const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
export async function POST(req:Request, res: Response) {
    
    const reqBody = await req.json();
    console.log(reqBody);
    
    const prompt = reqBody.data.promt;
    
    
    const model = genAI.getGenerativeModel({model:"gemini-pro"});
    
    const result = await model.generateContentStream(prompt);
    const response = await result.response;
    const text = response.text();
    
    return new StreamingTextResponse(GoogleGenerativeAIStream(result));

}





