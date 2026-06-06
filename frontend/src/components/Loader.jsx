import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
      />

      <h2 className="text-xl font-semibold">
        Analyzing Medical Report...
      </h2>
    </div>
  );
}

export default Loader;