import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  const [count, setCount] = React.useState(0);
  const words = ["CREATE", "INNOVATE", "IMPACT"];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 5000); // Increased from 3000 to 5000ms
    return () => clearInterval(timer);
  }, []);

  const gradientOverlay =
    "bg-gradient-to-b from-black/80 via-black/65 to-black/80";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <motion.img
        src="./college.png"
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        alt="College"
      />

      <div
        className={`absolute inset-0 ${gradientOverlay} flex flex-col md:flex-row items-center justify-between w-full text-white`}
      >
        <motion.div
          className="w-full md:w-1/2 p-6 md:p-12 lg:p-20 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="space-y-4 pt-8 md:py-4">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Entrepreneurship Cell
            </motion.h1>
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Indian Institute of Information Technology Ranchi
            </motion.h3>
          </div>

          <motion.p
            className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-gray-300 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At E-Cell, IIIT Ranchi, we foster innovation and entrepreneurial
            spirit, empowering students to turn their ideas into impactful
            ventures. Join us to learn, collaborate, and lead the way in
            building a brighter, innovative future!
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 p-6 md:p-12 lg:p-20 flex items-center justify-center min-h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative h-42 w-full max-w-lg">
            {words.map((word, index) => {
              const position = (((index - count) % 3) + 3) % 3;
              const yPositions = [-100, 0, 100]; // Reduced vertical spacing
              const opacity = position === 1 ? 1 : 0.2;

              return (
                <motion.div
                  key={word}
                  className="absolute w-full text-center"
                  initial={{ y: yPositions[1] }}
                  animate={{
                    y: yPositions[position],
                    scale: position === 1 ? 1.2 : 0.8,
                    opacity,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                >
                  <div className="relative">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-wider">
                      {word}
                    </span>
                    {position === 1 && (
                      <motion.div
                        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;
