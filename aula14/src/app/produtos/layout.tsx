import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRODUTOS",
  description: "Criado por Charlie and the Chocolate Factory",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (

    <div>  
      <p>MAIS PRODUTOS</p>
      {children}
      <p>MAIS PRODUTOS</p>
    </div>
    
  );
}
