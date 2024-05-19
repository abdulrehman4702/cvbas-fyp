import Link from "next/link"

export function LearnMore() {
  return (<>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div
        className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Revolutionize Your Farm with Computer Vision
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Our cutting-edge computer vision technology helps farmers optimize their operations and increase yields.
            Learn more about how it can transform your agriculture business.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#">
            Learn More
          </Link>
        </div>
        <img
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          height={550}
          src="/placeholder.svg"
          width={550} />
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div
        className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div
            className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">How it Works</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock the Power of Computer Vision
          </h2>
          <p
            className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our advanced computer vision algorithms analyze high-resolution imagery to detect plant health, identify
            pests, and optimize irrigation. The insights we provide help farmers make data-driven decisions to improve
            their yields.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex items-start gap-4">
              <LeafIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Plant Health Monitoring</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Detect early signs of disease and nutrient deficiencies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BugIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Pest Identification</h3>
                <p className="text-gray-500 dark:text-gray-400">Quickly identify and address pest infestations.</p>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="How it Works"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          height={550}
          src="/placeholder.svg"
          width={550} />
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div
        className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <img
          alt="Benefits"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          height={550}
          src="/placeholder.svg"
          width={550} />
        <div className="space-y-4">
          <div
            className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Benefits</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Maximize Your Yield and Profitability
          </h2>
          <p
            className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our computer vision technology provides farmers with actionable insights to optimize their operations and
            increase their yields. By automating tasks and reducing manual labor, you can save time and resources
            while improving your bottom line.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex items-start gap-4">
              <IndentIncreaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Increased Yields</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Identify and address issues early to maximize crop productivity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <SaveIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Cost Savings</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Reduce labor and input costs with automated monitoring and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div
        className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div
            className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Case Studies</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Real-World Success Stories</h2>
          <p
            className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            See how our computer vision technology has helped farmers around the world improve their operations and
            increase their yields.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex items-start gap-4">
              <TractorIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Organic Farm</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Reduced pesticide use by 30% and increased yields by 15%.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <LeafyGreenIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold">Greenhouse Operation</h3>
                <p className="text-gray-500 dark:text-gray-400">Improved crop quality and reduced waste by 25%.</p>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="Case Studies"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          height={550}
          src="/placeholder.svg"
          width={550} />
      </div>
    </section>
  </>);
}

function BugIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path
        d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>)
  );
}


function IndentIncreaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="3 8 7 12 3 16" />
      <line x1="21" x2="11" y1="12" y2="12" />
      <line x1="21" x2="11" y1="6" y2="6" />
      <line x1="21" x2="11" y1="18" y2="18" />
    </svg>)
  );
}


function LeafIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>)
  );
}


function LeafyGreenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" />
      <path d="M2 22 17 7" />
    </svg>)
  );
}


function SaveIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>)
  );
}


function TractorIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
      <path d="M16 18h-5" />
      <path d="M18 5a1 1 0 0 0-1 1v5.573" />
      <path d="M3 4h9l1 7.246" />
      <path d="M4 11V4" />
      <path d="M7 15h.01" />
      <path d="M8 10.1V4" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="7" cy="15" r="5" />
    </svg>)
  );
}
