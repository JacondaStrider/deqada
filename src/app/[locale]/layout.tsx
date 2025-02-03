import { Poppins } from "next/font/google";

import Providers from "@/providers";

import Header from "./header";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Deqada",
};
export type RootLayoutProps = Pick<PageProps, "params"> & {
  children: React.ReactNode;
};

export default async function RootLayout({
  params,
  children,
}: RootLayoutProps) {
  const css = `
    
  @media (max-width: 1800px) {
      .css-1o2zovs-MuiTypography-root {
        line-height: 130%;
      }
      .css-1mde5o7-MuiTypography-root {
        left: 0;
        top: auto;
        bottom: -115px;
      }
      .css-11yebb4 {
        display: none;
      }
      .footer-figures {
        width: 26.292vw !important;
      }
  }
  @media (max-width: 1400px) {
      .css-1gzu7ie {
        height: 75vh;
        align-items: flex-start;
      }
      .css-1yx44ec {
        margin-top: 170px;
      }
      .css-1dhz3wr-MuiTypography-root {
        line-height: 115% !important;
        font-size: 50px !important;
      }
      .css-1mde5o7-MuiTypography-root {
        top: 330px;
        font-size: 17px;
      }
      .spring-home {
        max-width: 450px !important;
      }
      .circle {
        max-width: 530px;
      }
      .css-70qvj9, .css-2iqeud, .css-4ele5i {
        flex-direction: column;
      }
      .css-yqe40 {
        grid-template-columns: 1fr;
      }
      .css-94ggol {
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .css-1bohgpv-MuiStack-root {
        padding-top: 100px;
        padding-bottom: 100px;
      }
  }
  @media (max-width: 700px) {
    .css-1yx44ec {
      margin-top: 115px;
    }
    .css-1dhz3wr-MuiTypography-root,.css-1o2zovs-MuiTypography-root {
      font-size: 30px !important;
    }
    .css-1mde5o7-MuiTypography-root {
      font-size: 14px;
      top: 200px;
      left: auto;
      right: -115px;
    }
    .spring-home {
      max-width: 150px !important;
      top: 20% !important;
    }
    .css-f1rsp6 {
      gap: 25px;
    }
    .scroll-home {
      display: none;
    }
    .css-f1rsp6 {
      gap: 25px;
    }
    .css-tnqpjv {
      gap: 30px;
    }
    .css-l8vzmw-MuiTypography-root {
      font-size: 18px;
      line-height: 160%;
    }
    .circle {
      max-width: 430px;
      top: -280px;
      left: -140px;
    }
    .css-gihiab-MuiStack-root {
      margin-top: 0;
    }
    .triangle-home, .pentagon-home, .square-home, .chromosome-home {
      max-width: 100%;
    }
    .css-1poh5vs {
      width: 100%;
    }
    .footer-figures {
      width: 50vw !important;
    }
  }
  `;
  const locale = params.locale;
  return (
    <html lang={locale} className={inter.className}>
      <body>
        <Providers>
          <style>
            {css}
          </style>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
