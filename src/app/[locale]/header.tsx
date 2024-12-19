"use client";

import Image from "next/image";

import { Box, IconButton } from "@mui/material";
import Deqada from "@svg/deqada.svg";
import Logo from "@svg/logo.svg";
import Mail from "@svg/mail.svg";
import Telegram from "@svg/telegram.svg";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <Box
      sx={{
        // left: "50%",
        top: "40px",
        zIndex: 1000,
        width: "100%",
        // transform: "translateX(-50%)",
        display: "flex",
        // maxWidth: "1620px",
        // maxWidth: "100%",
        position: "fixed",
        alignItems: "center",
        // boxSizing: "border-box",

        // backdropFilter: "blur(20px)",
        // background: "rgba(14, 14, 14, 0.4)",

        justifyContent: "space-between",
        px: {
          xs: 2,
          sm: 18.75,
        },
      }}
    >
      <Box
        sx={{
          gap: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <Image
            alt="logo"
            src={Logo}
            style={{
              cursor: "pointer",
            }}
          />
        </motion.div>

        <Image
          alt="deqada"
          src={Deqada}
          style={{
            cursor: "pointer",
          }}
        />
      </Box>
      <Box
        sx={{
          gap: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton>
          <Image
            alt="telegram"
            src={Telegram}
            style={{
              cursor: "pointer",
            }}
          />
        </IconButton>

        <IconButton>
          <Image
            alt="mail"
            src={Mail}
            style={{
              cursor: "pointer",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
