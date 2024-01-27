import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About me",
  description: "SaaS, SaaS checkklist ,Customer Acquision",
};

function Page() {
  return (
    <div className="hero min-h-screen bg-base-200 px-10 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <h1 className="text-5xl font-bold text-center md:text-right">
          Ashok Reddy Kakumanu
        </h1>
        <div className="divider invisible divider-horizontal md:visible"></div>

        <div className="order-2 lg:order-1">
          <p className="py-6 max-w-5xl">
            I&apos;m Ashok, a 19-year-old from India. This Checklisy is a free
            tool built for my future use . I am sharing the product because i
            want other indiehackers use it too if they find it helpful . The
            first one was an AI lesson planner that didn&apos;t receive as much
            traffic as expected. That&apos;s why I stopped building it and
            started looking for another problem to solve. While this is may not
            the biggest problem , it sure helps me alot while building my future
            problems.
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="https://twitter.com/indieashok"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="" src="/TwitterLogo.png" alt="Twitter Logo" />
              Follow me
            </a>
            <Link href="/" className="btn btn-outline">Go back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
