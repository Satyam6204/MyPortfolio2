import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = () => {
    return (
        <h1 className="text-xl md:text-3xl">
            <Typewriter

                words={["Hi, I'm Satyam Kumar!",
                    "A Passionate Java Full Stack Developer!",
                    "Building Scalable Web Applications!",
                    "Turning Ideas into Reality with Code!",
                    "Let's Create Something Amazing Together!"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </h1>
    );
};

export default TypingAnimation;
