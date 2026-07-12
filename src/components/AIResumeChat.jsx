import { useState } from "react";

function AIResumeChat({ onSend, loading }) {
    const [message, setMessage] = useState("");

   const handleSend = async () => {

    if (!message.trim()) return;

    await onSend(message);

    setMessage("");

};

    return (

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

            <h2 className="text-2xl font-bold mb-4">
                🤖 AI Resume Assistant
            </h2>

            <p className="font-semibold mb-2">
                Try asking:
            </p>

            <ul className="list-disc pl-6 mb-4 text-gray-700">

                <li>Improve my summary</li>

                <li>Improve my projects</li>

                <li>Make this ATS friendly</li>

                <li>Reduce unnecessary spacing</li>

                <li>Fit this resume into one page</li>

                <li>Improve grammar</li>

            </ul>

            <textarea

                rows={5}

                className="w-full border rounded-xl p-4 mb-4"

                placeholder="Ask AI to improve your resume..."

                value={message}

                onChange={(e)=>setMessage(e.target.value)}

            />

          <button
    onClick={handleSend}
    disabled={loading || !message.trim()}
    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl"
>send</button>
        </div>

    );

}

export default AIResumeChat;