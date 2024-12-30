import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function GeminiTry() {
    const [userInput, setUserInput] = useState<string>("");
    const [response, setResponse] = useState<string>("");

    const fetchAIResponse = async () => {
        try {
            const genAI = new GoogleGenerativeAI("AIzaSyAGuHIJW2YnYSoNwafysS9gM_LDi27QxPo");
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = userInput;

            const result = await model.generateContent(prompt);
            setResponse(result.response?.text());
        } catch (error) {
            console.error("Error generating content:", error);
        }
        setUserInput("");
    };

    const handleCodeCopy = (code: string) => {
        navigator.clipboard.writeText(code).then(() => {
            alert("Code copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy code:", err);
        });
    };

    const MarkdownRenderers = {
        code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            const codeContent = String(children).trim();

            return !inline && match ? (
                <div className="relative group">
                    <button
                        onClick={() => handleCodeCopy(codeContent)}
                        className="absolute top-2 right-2 bg-blue-500 text-white text-sm py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                        Copy
                    </button>
                    <SyntaxHighlighter
                        style={darcula}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                    >
                        {codeContent}
                    </SyntaxHighlighter>
                </div>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            {/* Input Section */}
            <div className="w-full max-w-xl mb-5">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter your prompt"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={fetchAIResponse}
                    className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600"
                >
                    Send
                </button>
            </div>

            {/* Response Section */}
            <div className="w-full max-w-2xl bg-white rounded-md shadow-md p-5">
                <ReactMarkdown components={MarkdownRenderers} className="prose">
                    {response}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default GeminiTry;
