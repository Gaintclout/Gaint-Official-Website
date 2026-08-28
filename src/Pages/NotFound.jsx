import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="mb-3 text-lg font-semibold text-indigo-600">404</p>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Page not found</h1>
        <p className="mb-8 max-w-xl text-gray-600">The page you requested may have moved or no longer exists.</p>
        <Link to="/" className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">Return to homepage</Link>
      </main>
      <Footer />
    </>
  );
}
