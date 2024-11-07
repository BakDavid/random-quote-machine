// src/App.tsx
import { useState, useEffect } from "react";
import "./App.css"; // Include your CSS here

// Type definitions for quotes data
interface Quote {
    quote: string;
    author: string;
}

interface QuotesData {
    quotes: Quote[];
}

const colors: string[] = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
];

function App() {
    const [quotesData, setQuotesData] = useState<QuotesData | null>(null);
    const [currentQuote, setCurrentQuote] = useState<string>("");
    const [currentAuthor, setCurrentAuthor] = useState<string>("");

    useEffect(() => {
        // Fetch quotes data when the component mounts
        fetchQuotes();
    }, []);

    const fetchQuotes = async () => {
        const response = await fetch(
            "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        );
        const data: QuotesData = await response.json();
        setQuotesData(data);
        generateRandomQuote(data);
    };

    const generateRandomQuote = (quotes: QuotesData) => {
        const randomQuote =
            quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
        setCurrentQuote(randomQuote.quote);
        setCurrentAuthor(randomQuote.author);

        // Change background color
        const color = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = color;
    };

    const tweetQuote = () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(
            currentQuote
        )}" - ${encodeURIComponent(currentAuthor)}`;
        window.open(tweetUrl, "_top");
    };

    return (
        <div id="wrapper">
            <div id="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left"></i>{" "}
                    <span id="text">{currentQuote || "Loading..."}</span>
                </div>
                <div className="quote-author">
                    - <span id="author">{currentAuthor}</span>
                </div>
                <div className="buttons">
                    <button
                        className="button"
                        id="tweet-quote"
                        onClick={tweetQuote}
                        title="Tweet this quote!"
                    >
                        <i className="fa fa-twitter"></i>
                    </button>
                    <button
                        className="button"
                        id="new-quote"
                        onClick={() =>
                            quotesData && generateRandomQuote(quotesData)
                        }
                    >
                        New Quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
