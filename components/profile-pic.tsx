"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function ProfilePic() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={"/profile-pic.png"}
        alt="proflie"
        height={250}
        width={250}
        priority={true}
      />
    </motion.div>
  );
}
