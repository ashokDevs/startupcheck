import { url } from "inspector";
import Link from "next/link";

function Page() {
  return (
    <div className="hero min-h-screen bg-base-200 px-10 py-10">
      <div className="hero-content flex-col lg:flex-row">
        <h1 className="text-5xl font-bold text-right">Ashok Reddy Kakumanu</h1>
        <div className="divider invisible divider-horizontal md:visible"></div>

        <div className="order-2 lg:order-1">
          <p className="py-6 max-w-5xl">
            Thank you for scrolling this far; it&apos;s my best opportunity to
            introduce myself. I&apos;m Ashok, a 19-year-old from India. This
            blog automation tool is my second product. The first one was an AI
            lesson planner that didn&apos;t receive as much traffic as expected.
            That&apos;s why I stopped building it and started looking for
            another problem to solve. Meanwhile, I decided to write blogs for an
            existing website. After just two blogs, I realized I was wasting a
            lot of time. I discussed this with other solo founders and indie
            hackers, and they shared the same sentiment. That&apos;s when I
            decided to create this app. To stay updated, you can follow me on X
            (Twitter) or subscribe to my newsletter.
          </p>
          <div>
            <a
              href="https://twitter.com/indieashok"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="" src="/TwitterLogo.png" alt="Twitter Logo" />
              Follow me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
