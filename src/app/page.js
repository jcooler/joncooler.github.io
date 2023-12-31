"use client";


import Carousel from './components/Carousel';
import Image from "next/image";
import jon from "/public/AvatarMaker.png";
import about from "/public/about.png";
import code from "/public/code.png";
import design from "/public/design.png";
import "./pages.css"
import { useState } from "react";

  
export default function Home() {
 
let slides = [
  "./public/image1.png",
  "./public/image2.png",
  "./public/image3.png",
  "./public/image4.png",
]
const [darkMode, setDarkMode] = useState(false);
  return (
<div className={darkMode ? "dark" : ""}>
  
  <head>
    <title>Jon Cooler | Front-End Developer</title>
    <meta name="description" content="" />
    <link rel="icon" href="joncooler.github.io\public\favicon.ico" />
  </head>

    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl dark:text-teal-700">Jon Cooler</h1>
          <ul className="flex items-center">
            
            <li>
              <a 
              className="bg-gradient-to-r from-cyan-500 to-teal-600 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 select-none"
              href="https://drive.google.com/file/d/1aAd8cVwscd2LlmsjbUUDtoxMCOa-RNNp/view?usp=sharing"
              target="_blank">
              Resume
                </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 font-medium md:text-6xl text-teal-700">Jon Cooler</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-teal-700">Front-end Developer.</h3>
          <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-2xl mx-auto dark:text-teal-700">
          Enthusiastic Front-End Developer eager to contribute to team success through collaboration, hard work, attention to detail
          and excellent organizational skills. Proficient in utilizing HTML5, CSS3, JavaScript, and multiple libraries and frameworks to create dynamic and engaging user interfaces.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600">
          
        <div className="relative mx-auto bg-gradient-to-b from-teal-700 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={jon} alt="me" layout="fill" objectFit="cover" />
        </div>
        </div>
      </section>
      
      <section>
      <div className="lg:flex gap-10 content-start">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 dark:shadow-teal-700">
            <Image src={about} alt="silhouette" width={100} height={100} />
          <h3 className="text-3xl py-1 text-teal-700">
            About
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-x dark:text-teal-800">
          Hey! I'm Jon, nice to meet you. My web journey began all the way back in 2003 when I was 11-years old and learned about Xanga. Xanga was a social media site
          that was very similar to myspace. I began to search for and implement new backgrounds and layouts for both of these sites, but there was always something I
          didn't like about the background, or the design. I remember slowly deleting lines of code and refreshing the page to see what it did. Soon, I began to add lines of code
          to see what happened. I was fascinated. This got me interested in trying to make my own layouts and backgrounds to have the best page.
          Eventually, I got a lot of compliments from my fellow students in High School and a lot of my friends and other students wanted me to help them with their pages.
          I "developed" dozens of pages by creating custom backgrounds with Photoshop and illustrator,hosted the images on Photobucket, and added or subtracted various 
          things from the pages to give each "client" a handcrafted experience. Since then, I have used various languages, frameworks, and libraries to achieve the exact same thing!
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 dark:shadow-teal-700">
          <Image src={code} alt="code" width={100} height={100} />
          <h3 className="text-3xl py-1 text-teal-700">
            Experience
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-teal-800">
          I have been using HTML and CSS for over 20 years. I began using JavaScript in college over 6 years ago. Currently, I am using various libraries and frameworks to build dynamic, engaging, and accessible user interfaces.
          </p>
          <h4 className="py-4 text-teal-700 md:text-xl"> Skills:</h4>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> HTML5 </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> CSS3 </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> JavaScript </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> React </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Bootstrap </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Tailwind </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Responsive Design </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Version Control/Git </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Cross-Browser Compatibility </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Accessibility </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 basis-1/3 dark:shadow-teal-700">
            <Image src={design} alt="design logo" width={100} height={100} />
          <h3 className="text-3xl py-1 text-teal-700">
            Tools
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-teal-800">
          When I started writing code, there weren't many tools available to help me achieve my goals. Over the years as technology improved, many of these tools became available, and I find myself using them daily.
          There are many tools that I use on a daily basis, and I am frequently finding and using new ones! 
          </p>
          <h4 className="py-4 text-teal-700 md:text-xl"> Development tools that I use:</h4>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Visual Studio Code </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Git / GitHub / Bitbucket </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Node Package Manager </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Browser DevTools </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Lighthouse </p>
          <p className="text-gray-800 py-1 md:text-xl dark:text-teal-800"> Slack / Teams / Jira / confluence </p>
        </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 text-teal-700 text-center">
            Projects
          </h3>
        </div>
        <div className="shadow-lg dark:shadow-teal-700 w-[60%] m-auto">
          <Carousel slides={slides} />
        </div>
        <div className="mt-10 ">
        <a href="https://github.com/jcooler?tab=repositories" target="_blank">
          <p className="text-md text-center text-teal-700 dark:text-teal-800 pt-2 pb-5">View on GitHub</p>
          </a>
        </div>
      </section>
    </main>
</div>
  );
};
