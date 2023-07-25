import Link from "next/link";

const HomePage = () => {
  return (
    <main className="h-[100vh] flex flex-col justify-center items-center gap-4 font-semibold text-2xl">
      <Link href="/mental-health">SH Freud: Mental Health AI Chatbot Web</Link>
      <Link href="/flower-delivery">eCommerce - Flower Delivery website</Link>
    </main>
  );
};

export default HomePage;
