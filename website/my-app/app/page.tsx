/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tZc8WA2MCch
 */
import Link from "next/link"
import Image from "next/image"
import  { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import ProfilePic from "@/app/Headshot.jpg"
import OSU from "@/app/Ohio-State-Logo.png"

export default function Home() {
  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="https://www.osu.edu/">
          <Image
              alt = "test"
              className = "mx-auto mb-4"
              height = "40"
              src = {OSU.src}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width ="40"
              />
          <span className="sr-only">Dheeraj Gosula</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800" id="hero">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <Image
                  alt = "test"
                  className = "mx-auto mb-4"
                  height = "200"
                  src = {ProfilePic.src}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width ="200"
                  />
                Dheeraj Gosula
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I&apos;m a sophomore in Honors Computer Science and Engineering at the Ohio State University.
              </p>
              <Link href= "https://drive.google.com/file/d/1S_rvnHqTGHcDjn-PvH5P_DB1DcnufLtD/view?usp=drive_link" download="Dheeraj_Gosula_Resumé.pdf" target="_blank" rel="noopener noreferrer">
                <Button>Download Resume</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#710C04] dark:bg-gray-800" id="about">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#808080]">About Me</h2>
            <p className="max-w-[600px] text-[#FFFFFF] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m currently studying my bachelor&apos;s degree in Computer Science and Engineering. I am involved in various student organizaitons including OHI/O, Software Development Club, and Artificial Intelligence Club.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="skills">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge>Java</Badge>
              <Badge>Python</Badge>
              <Badge>C++</Badge>
              <Badge>JavaScript</Badge>
              <Badge>HTML/CSS</Badge>
              <Badge>Git</Badge>
              <Badge>Flask</Badge>
              <Badge>Node JS</Badge>
              <Badge>React JS</Badge>
              <Badge>Docker</Badge>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#710C04] dark:bg-gray-800" id="projects">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 text-[#808080]">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Buck-eye</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm"> Implementing object detection with the use of the Yolov8 pretrained model, which allows 
                    users to view an updating web application which updates the open seats and tables at an Ohio State University 
                    Library. Building the frontend using ReactJS and Flask to generate a 2D model of the library.
                    </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Iris Flowers Classification Project</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm"> Utilized various machine learning algorithms to evaluate the Iris Flowers Dataset. 
                  Implemented the project using Python, and utilized popular machine learning libraries such as Scikit-Learn 
                  and Pandas for data preprocessing, model training, and evaluation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Perspective Generator Project</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm"> Utilized the OpenAI API to output three perspectives of a
                   user&apos;s inputted opinion. Sanitized the user input, used common prompt engineering
                    techniques to iterate on the prompt, evaluated different models, and passed the 
                    output to the UI. 
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="contact">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Me</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              You can reach me at gosuladheeraj@gmail.com or follow me on social media.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/dheeraj-gosula-b150b1262/">
                <LinkedinIcon className="w-4 h-4" />
              </Link>
              <Link href="https://github.com/Dheeraj-G">
                <GithubIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">Author- Dheeraj Gosula</p>
      </footer>
    </>
  )
}

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
