"use client";

import Image from "next/image";

// import Spring2 from "@images/spring2.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import Advertising from "@svg/advertising.svg";
import ArrowDown from "@svg/arrow-down.svg";
import Chromosome from "@svg/chromosome.svg";
// import CircleArrow from "@svg/circle-arrow.svg";
import Circle from "@svg/circle.svg";
import FooterFigures from "@svg/footer-figures.svg";
import GradientLine from "@svg/gradient-line.svg";
import Mail from "@svg/mail.svg";
import Pentagon from "@svg/pentagon.svg";
import Scroll from "@svg/scroll.svg";
import Spring from "@svg/spring.svg";
import Square from "@svg/square.svg";
import Telegram from "@svg/telegram.svg";
import Triangle from "@svg/triangle.svg";
import { motion } from "framer-motion";
// import { involve } from "@/ui/typography";

const menu = [
  {
    href: "home",
    title: "Главная",
  },
  {
    href: "about",
    title: "О нас",
  },
  {
    href: "services",
    title: "Наши услуги",
  },
];
// console.log("involve", involve);
// const StyledTextRow = () => {
//   const textItems = [
//     { text: "Creative", strokeColor: "#F6F6F6" },
//     { text: "Strategy", strokeColor: "#F6F6F6" },
//     { text: "Events", strokeColor: "#F6F6F6" },
//     { text: "Production", strokeColor: "#F6F6F6" },
//     { text: "Communication", strokeColor: "#00AEFF" },
//     { text: "Media", strokeColor: "#F6F6F6" },
//     { text: "Creative", strokeColor: "#F6F6F6" },
//     { text: "Strategy", strokeColor: "#F6F6F6" },
//     { text: "Events", strokeColor: "#F6F6F6" },
//     { text: "Production", strokeColor: "#F6F6F6" },
//     { text: "Communication", strokeColor: "#00AEFF" },
//     { text: "Media", strokeColor: "#F6F6F6" },
//   ];

//   return (
//     <Box
//       sx={{
//         color: "#fff",
//         // paddingX: "10px",
//         display: "flex",
//         gap: "48px",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {textItems.map((item, index) => (
//         <Typography
//           key={index}
//           className={involve.className}
//           sx={{
//             fontSize: "136px",
//             fontWeight: 700,
//             textTransform: "uppercase",
//             // letterSpacing: "2px",
//             ...(item.text === "Production" ? { paddingX: 14 } : {}),
//             color: "transparent",
//             WebkitTextStroke: `2px ${item.strokeColor}`,
//           }}
//         >
//           {item.text}
//         </Typography>
//       ))}
//     </Box>
//   );
// };

export default function HomePage() {
  return (
    <>
      <Box
        id="home"
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url('/images/hero.jpg')",
          px: {
            xs: 2,
            sm: 18.75,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            maxWidth: "1220px",
            marginRight: "300px",
          }}
        >
          <Typography
            component="h1"
            color="primary.contrastText"
            sx={{
              lineHeight: "74px",
              position: "relative",
              fontSize: "calc(28px + 2.7vw)",
            }}
          >
            Креатив, который работает на{" "}
            <Typography
              component="span"
              color="primary.main"
              sx={{ fontSize: "calc(32px + 3.5vw)" }}
            >
              ваш успех
            </Typography>
            <Typography
              component="span"
              color="secondary.contrastText"
              // sx={{
              //   maxWidth: "433px",
              //   width: "100%",
              // }}
              sx={{
                right: 80,
                top: "52%",
                maxWidth: "450px",
                position: "absolute",
                // width: "530px",
                fontSize: "calc(14px + 0.3vw)",
              }}
            >
              Наша миссия — создавать незабываемые впечатления, усиливать голоса
              брендов и формировать яркие повествования в медиапространстве
            </Typography>
          </Typography>

          {/* 
          <Typography
            component="h1"
            color="primary.contrastText"
            sx={{
              fontWeight: 700,
              lineHeight: "1.2",
              fontSize: "calc(28px + 2.7vw)",
              float: "left", // Текст слева
              margin: 0,
            }}
          >
            Креатив, который работает на{" "}
            <Typography
              component="span"
              color="primary.main"
              sx={{
                fontWeight: 700,
                fontSize: "calc(32px + 3.5vw)",
                display: "inline-block",
              }}
            >
              ваш успех
              <Typography
                component="span"
                color="secondary.contrastText"
                sx={{
                  fontSize: "calc(14px + 0.3vw)",
                  lineHeight: "1.5",
                  float: "right", // Текст справа
                  maxWidth: "450px",
                  marginTop: 5.5,
                  marginLeft: 5.5,
                }}
              >
                Наша миссия — создавать незабываемые впечатления, усиливать
                голоса брендов и формировать яркие повествования в
                медиапространстве
              </Typography>
            </Typography>
          </Typography> */}
        </Box>

        <Image
          className="spring-home"
          alt="spring"
          src={Spring}
          style={{
            top: "54%",
            right: "0",
            position: "absolute",
            transform: "translateY(-50%)",
          }}
        />

        <Image
          className="scroll-home"
          alt="scroll"
          src={Scroll}
          style={{
            left: "50%",
            bottom: "6%",
            position: "absolute",
            transform: "translateX(-50%)",
          }}
        />
      </Box>
      <Box
        id="about"
        sx={{
          display: "flex",
          background: "#222",
          pt: {
            xs: 2,
            sm: 26,
          },
          px: {
            xs: 2,
            sm: 18.75,
          },
          pb: {
            xs: 2,
            sm: 16.75,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              gap: "80px",
              display: "flex",
            }}
          >
            <Image
              src={GradientLine}
              alt="gradient-line"
              style={{
                paddingTop: 24,
              }}
            />

            <Box
              sx={{
                gap: "56px",
                display: "flex",
                maxWidth: "700px",
                position: "relative",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  left: 0,
                  top: -44,
                  gap: 1.5,
                  display: "flex",
                  alignItems: "end",
                  position: "absolute",
                }}
              >
                <Typography color="#6C6C6C" component="span">
                  О НАС
                </Typography>
                <Image src={ArrowDown} alt="arrow-down" />
              </Box>
              <Typography
                component="h1"
                color="primary.contrastText"
                sx={{ lineHeight: "42px", fontSize: "calc(20px + 0.6vw)" }}
              >
                <Typography
                  component="span"
                  color="primary.main"
                  sx={{ fontSize: "calc(20px + 0.6vw)" }}
                >
                  Deqada.{" "}
                </Typography>
                Создаем решения, которые усиливают связь брендов с аудиторией
                и делают их более заметными на рынке
              </Typography>
              <Typography
                component="span"
                color="secondary.contrastText"
                sx={{
                  fontSize: "calc(14px + 0.3vw)",
                }}
              >
                Мы специализируемся на разработке креативных рекламных кампаний,
                организации высококлассных мероприятий и реализации
                стратегических медиапроектов, которые находят отклик у
                аудитории.
              </Typography>
              {/* <Image src={CircleArrow} alt="circle-arrow" /> */}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              position: "relative",
            }}
          >
            <Image
              className="circle"
              alt="circle"
              src={Circle}
              style={{
                top: -220,
                left: -140,
                position: "absolute",
              }}
            />
            <Stack
              sx={{
                gap: "32px",
                padding: "48px",
                borderRadius: 6,
                maxWidth: "760px",
                marginTop: "132px",
                marginLeft: "32px",
                backdropFilter: "blur(20px)",
                background: "rgba(14, 14, 14, 0.4)",
              }}
            >
              <Typography
                color="secondary.contrastText"
                // sx={{
                //   maxWidth: "433px",
                //   width: "100%",
                // }}
                sx={{
                  // width: "530px",
                  fontSize: "calc(14px + 0.3vw)",
                }}
              >
                Благодаря сочетанию креативности с передовыми технологиями
                мы сближаем бренды с их целевыми рынками. Наше агентство
                занимается разработкой индивидуальных решений, которые
                стимулируют взаимодействие, укрепляют связи и повышают
                присутствие бренда.
              </Typography>
              <Typography
                color="primary.main"
                sx={{ fontStyle: "italic", fontSize: "calc(14px + 0.3vw)" }}
              >
                Мы работаем совместно с клиентами, чтобы превратить их видения в
                реальность.
              </Typography>
            </Stack>
          </Box>
          {/* </Box> */}
        </Box>
      </Box>

      <Stack
        spacing={4}
        id="services"
        sx={{
          background: "#0E0E0E",
          py: {
            xs: 2,
            sm: 26,
          },
          px: {
            xs: 2,
            sm: 18.75,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderRadius: 6,
            background: "#222",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              left: 0,
              top: -64,
              gap: 1.5,
              display: "flex",
              alignItems: "end",
              position: "absolute",
            }}
          >
            <Typography color="#6C6C6C" component="span">
              НАШИ УСЛУГИ
            </Typography>
            <Image src={ArrowDown} alt="arrow-down" />
          </Box>
          <Box
            sx={{
              px: "48px",
            }}
          >
            <Typography
              component="h1"
              color="primary.contrastText"
              sx={{ lineHeight: "42px", fontSize: "calc(20px + 0.6vw)" }}
            >
              Разработка креативных рекламных кампаний
            </Typography>
            <Typography
              color="secondary.contrastText"
              // sx={{
              //   maxWidth: "433px",
              //   width: "100%",
              // }}
              sx={{
                // width: "530px",
                fontSize: "calc(14px + 0.3vw)",
              }}
            >
              Создаем идеи, которые привлекают внимание, вдохновляют и вызывают
              эмоции, помогая вашему бренду выделиться среди конкурентов.
            </Typography>
          </Box>

          <Image
            className="triangle-home"
            width={574}
            alt="triangle"
            src={Triangle}
            style={{ borderRadius: 6 }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            borderRadius: 6,
            background: "#222",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            className="pentagon-home"
            alt="pentagon"
            // width={574}
            src={Pentagon}
            style={{ borderRadius: 6 }}
          />

          <Box
            sx={{
              px: "48px",
            }}
          >
            <Typography
              component="h1"
              color="primary.contrastText"
              sx={{ lineHeight: "42px", fontSize: "calc(20px + 0.6vw)" }}
            >
              Организация мероприятий
            </Typography>
            <Typography
              color="secondary.contrastText"
              // sx={{
              //   maxWidth: "433px",
              //   width: "100%",
              // }}
              sx={{
                // width: "530px",
                fontSize: "calc(14px + 0.3vw)",
              }}
            >
              Планируем и проводим мероприятия, которые запоминаются, создают
              уникальные впечатления и усиливают связь бренда с аудиторией.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            borderRadius: 6,
            background: "#222",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              px: "48px",
            }}
          >
            <Typography
              component="h1"
              color="primary.contrastText"
              sx={{ lineHeight: "42px", fontSize: "calc(20px + 0.6vw)" }}
            >
              Коммуникационные проекты
            </Typography>
            <Typography
              color="secondary.contrastText"
              // sx={{
              //   maxWidth: "433px",
              //   width: "100%",
              // }}
              sx={{
                // width: "530px",
                fontSize: "calc(14px + 0.3vw)",
              }}
            >
              Разрабатываем комплексные стратегии для построения доверительных
              отношений с вашей аудиторией через эффективные коммуникации.
            </Typography>
          </Box>

          <Image
            className="square-home"
            alt="square"
            // width={574}
            src={Square}
            style={{ borderRadius: 6 }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            borderRadius: 6,
            background: "#222",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            className="chromosome-home"
            alt="chromosome"
            // width={574}
            src={Chromosome}
            style={{ borderRadius: 6 }}
          />

          <Box
            sx={{
              px: "48px",
            }}
          >
            <Typography
              component="h1"
              color="primary.contrastText"
              sx={{ lineHeight: "42px", fontSize: "calc(20px + 0.6vw)" }}
            >
              Медиа
            </Typography>
            <Typography
              color="secondary.contrastText"
              // sx={{
              //   maxWidth: "433px",
              //   width: "100%",
              // }}
              sx={{
                // width: "530px",
                fontSize: "calc(14px + 0.3vw)",
              }}
            >
              Проектируем и реализуем медиапроекты, направленные на привлечение
              внимания и взаимодействие с вашей целевой аудиторией.
            </Typography>
          </Box>
        </Box>
      </Stack>

      <Box
        sx={{
          overflowX: "hidden",
          background: "#161616",
          py: {
            xs: 2,
            sm: 18.75,
          },
        }}
      >
        {/* <motion.div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            marginBottom: 40,
            fontSize: 100,
            color: '#fff'
          }}
          animate={{ x: ["100%", "-100%"] }} // Движение от -100% до 100%
          transition={{
            duration: 5, // Длительность одной итерации в секундах
            repeat: Infinity, // Повтор бесконечно
            ease: "linear", // Линейное движение
          }}
        >
          Это текст, который двигается слева направо.
        </motion.div>
        <motion.div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontSize: 100,
            color: '#fff'
          }}
          animate={{ x: ["-100%", "100%"] }} // Движение от -100% до 100%
          transition={{
            duration: 5, // Длительность одной итерации в секундах
            repeat: Infinity, // Повтор бесконечно
            ease: "linear", // Линейное движение
          }}
        >
          Это текст, который двигается слева направо.
        </motion.div> */}
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-72%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            fontSize: 100,
            color: "#fff",
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          <Image alt="advertising" src={Advertising} />
        </motion.div>
        {/* <motion.div
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-50%"] }} // Движение от -100% до 100%
          style={{
            fontSize: 100,
            color: "#fff",
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
          transition={{
            duration: 15, // Длительность одной итерации в секундах
            ease: "linear", // Линейное движение
            repeat: Infinity, // Повтор бесконечно
          }}
        >
          <Image alt="advertising" src={Advertising} />
          <StyledTextRow />
        </motion.div>
        <motion.div
          initial={{ x: "-20%" }}
          animate={{ x: ["-20%", "-70%"] }} // Движение от -100% до 100%
          style={{
            fontSize: 100,
            color: "#fff",
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
          transition={{
            duration: 15, // Длительность одной итерации в секундах
            ease: "linear", // Линейное движение
            repeat: Infinity, // Повтор бесконечно
          }}
        >
          <Image alt="advertising" src={Advertising} />
          <StyledTextRow />
        </motion.div> */}
        {/* <motion.div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontSize: 100,
            color: '#fff',
            paddingBottom: 60
          }}
          animate={{ x: ["-100%", "20%"] }} // Движение от -100% до 100%
          transition={{
            duration: 40, // Длительность одной итерации в секундах
            repeat: Infinity, // Повтор бесконечно
            ease: "linear", // Линейное движение
          }}
        > */}
        {/* <Image
          alt="advertising"
          src={TextLine}
          style={{
            // maxWidth: "100%",
          }}
        /> 
        </motion.div> */}
        {/* <motion.div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontSize: 100,
            color: '#fff'
          }}
          animate={{ x: [ "0%", "-100%"] }} // Движение от -100% до 100%
          transition={{
            duration: 50, // Длительность одной итерации в секундах
            repeat: Infinity, // Повтор бесконечно
            ease: "linear", // Линейное движение
          }}
        >
          <Image
          alt="advertising"
          src={TextLine}
          style={{
            // maxWidth: "100%",
          }}
        /> 
        </motion.div>

<motion.div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontSize: 100,
            color: '#fff',
            paddingBottom: 60
          }}
          animate={{ x: ["-52%", "0%"] }} // Движение от -100% до 100%
          transition={{
            duration: 50, // Длительность одной итерации в секундах
            repeat: Infinity, // Повтор бесконечно
            ease: "linear", // Линейное движение
          }}
        >
          <Image
          alt="advertising"
          src={TextLine}
          style={{
            // maxWidth: "100%",
          }}
        /> 
        </motion.div> */}
        {/* <Image
          alt="advertising"
          src={Advertising}
          style={{
            maxWidth: "100%",
          }}
        /> */}
      </Box>

      <Stack
        // spacing={25}
        sx={{
          gap: 25,
          position: "relative",
          background: "#0E0E0E",
          pb: {
            xs: 2,
            sm: 2.5,
          },
          pt: {
            xs: 2,
            sm: 18.75,
          },
          px: {
            xs: 2,
            sm: 18.75,
          },
        }}
      >
        <Image
          className="footer-figures"
          src={FooterFigures}
          alt="footer-figures"
          style={{
            right: 0,
            bottom: 0,
            zIndex: 10,
            width: "42.292vw",
            position: "absolute",
          }}
        />
        <Box
          sx={{
            gap: 5,
            // display: "flex",
            display: "grid",
            alignItems: "start",
            gridTemplateColumns: "2fr 1fr 1fr 2fr",
          }}
        >
          <Box
            sx={{
              width: "580px",
            }}
          >
            <Typography
              color="primary.contrastText"
              sx={{ fontSize: "calc(14px + 0.3vw)" }}
            >
              <Typography
                component="span"
                color="primary.main"
                sx={{ fontSize: "calc(14px + 0.3vw)" }}
              >
                Привет! Мы – Deqada,{" "}
              </Typography>
              рекламное агентство, которое помогает брендам выделяться,
              налаживать связи с аудиторией и реализовывать яркие идеи.
            </Typography>
          </Box>
          <Stack
            sx={{
              width: "170px",
            }}
          >
            {menu.map((i, index) => (
              <Button
                key={index}
                variant="text"
                href={`#${i.href}`}
                sx={{
                  px: 2,
                  borderRadius: 4,
                  justifyContent: "flex-start",
                  color: "primary.contrastText",
                }}
              >
                {i.title}
              </Button>
            ))}
          </Stack>
          <Box
            sx={{
              gap: 3,
              width: "170px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              href="https://t.me/deqada_media"
            >
              <Image
                alt="telegram"
                src={Telegram}
                style={{
                  cursor: "pointer",
                }}
              />
            </Button>
            <Button
              href="mailto:text@deqadamedia.ru"
            >
              <Image
                alt="mail"
                src={Mail}
                style={{
                  cursor: "pointer",
                }}
              />
            </Button>
          </Box>
          <Box
            sx={{
              width: "582px",
              height: "100%",
              position: "relative",
            }}
          >
            {/* <Image
              src={FooterFigures}
              alt="footer-figures"
              style={{
                position: "absolute",
                top: -280,
                left: -100,
                zIndex: 10,
                width: "42.292vw",
              }}
            /> */}
            {/* <Image
              alt="rotated-triangle"
              src={RotatedTriangle}
              style={{
                position: "absolute",
                top: -190,
                left: -240,
                zIndex: 10,
              }}
            />
            <Image
              alt="ball"
              src={Ball}
              style={{
                position: "absolute",
                top: -280,
                left: -100,
              }}
            /> */}
          </Box>
        </Box>
        <Box
          sx={{
            pt: 3,
            display: "flex",
            borderTop: "1px solid #9B9C9D",
            justifyContent: "space-between",
          }}
        >
          <Typography
            color="secondary.contrastText"
            sx={{ fontSize: "calc(12px + 0.2vw)" }}
          >
            All Right Reserved © 2024 Deqada
          </Typography>
          <Typography
            color="secondary.contrastText"
            sx={{ fontSize: "calc(12px + 0.2vw)" }}
          >
            Политика конфиденциальности
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
