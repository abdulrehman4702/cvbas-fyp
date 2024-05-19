"use client";
import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";

export function Component() {
  return (
    <div className=" flex flex-col min-h-[100dvh]">
      <header className="bg-gradient-to-r from-cyan-100 to-green-500 shadow-md  px-4 lg:px-6 h-14 flex items-center">
        {" "}
        <Link className=" flex items-center justify-center" href="#">
          <LeafIcon className="h-6 w-6" />
          <span className="sr-only">Agri-Vision</span> Computer-Vision based
          Agriculture System
        </Link>
        <nav className=" ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="  flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="land"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/image2.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionize Your Farm with Agri-Vision
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Agri-Vision is a cutting-edge computer vision-based system
                    that empowers farmers to optimize their operations, increase
                    yields, and reduce waste. Experience the future of
                    sustainable agriculture.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-600/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-400 dark:text-green-900 dark:hover:bg-green-400/90 dark:focus-visible:ring-green-500"
                    href="/register"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-green-500"
                    href="/learnmore"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800/20">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock the Power of Precision Farming
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Agri-Vision's advanced computer vision technology provides
                  real-time insights to help you make informed decisions,
                  optimize your operations, and maximize your yields.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/image1.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Soil Classification</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Detect the type of your soil with precision.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Crop Prdiction</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Identify the types of crops you can plant
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Yield Optimization</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Optimize your farming practices to increase yields and
                        reduce waste.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                How Agri-Vision Works
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Agri-Vision's advanced computer vision technology captures
                high-resolution images of your fields, analyzes the data, and
                provides real-time insights to help you make informed decisions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-600/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-400 dark:text-green-900 dark:hover:bg-green-400/90 dark:focus-visible:ring-green-500"
                href="#"
              >
                Learn More
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-green-500"
                href="#"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What Our Customers Say
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from the farmers who have transformed their operations with
                Agri-Vision.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/pic1.png"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <h4 className="text-base font-medium">Dr. Razaullah</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Director
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Agri-Vision has been a game-changer for my agriculture
                    organization. The insights it provides have helped me
                    optimize my operations and increase my yields
                    significantly."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/images.jpeg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <h4 className="text-base font-medium">
                        Ghulam Muhammad Ali
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Chairman
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Agri-Vision has revolutionized the way I manage my farm.
                    The pest detection and crop monitoring features have been
                    invaluable."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/pic3.jpg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <h4 className="text-base font-medium">Muhammad Azeem</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Observer
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Agri-Vision has helped me optimize my farming practices and
                    increase my yields. The data-driven insights are
                    invaluable."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Agri-Vision. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
