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
  const locale = params.locale;
  return (
    <html lang={locale} className={inter.className}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
