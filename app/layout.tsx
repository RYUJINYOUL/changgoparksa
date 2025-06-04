import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import ClientLayout from "@/components/ClientLayout";
import FabButton from '@/components/ui/FabButton';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "남양주창고박사",

  icons: {
		icon: "/Image/mainmiddle.jpeg",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko"
     suppressHydrationWarning>
      <body className={inter.className}>
      <ClientLayout>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
            <FabButton />
        </ClientLayout>
          </body>
    </html>
  );
}
