"use client";
import { ProjectCard } from "@/components/projectcard"
import * as icon from "developer-icons";
import { icons } from "lucide-react";

export default function Projects() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen">
                
                <section className="pt-20 w-full max-w-6xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">Personal Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProjectCard
                            title="Personal Portfolio Website"
                            description="My personal portfolio website showcasing my projects, skills, and experience. Originaly buit for EECS 2100 but will be altered after for my own use."
                            image="/images/york.png"
                            link="https://coop2100-portfolio-robert.vercel.app/"
                            details="My portfolio showcases my course + personal projects, work experience, volunteering and more. It was built from scratch using Next.js, React, Tailwind CSS, and Vercel for deployment. In the future I plan to update it to display services I can offer, a blog, and more details about my projects and experience."
                            technologiesUsed={[icon.NextJs, icon.React, icon.TailwindCSS, icon.VercelDarkWordmark]}
                            howWhyBuilt="Instead of using a premade website application like Wix or Google Sites, I wanted to build my own portfolio as I am a computer science major after all. It took me a bit more time as I do not usualy do front end development but it was worth it as I learned some new skills!"
                        />
                        <ProjectCard
                            title="Databases & Architecture Workshop - Database Design & Implementation"
                            description="Hosted a workshop on how database work under the hood and how they are implemented in real world systems."
                            image="/images/dbworkshop.png"
                            link="https://www.youtube.com/watch?v=8OA7a9Cf4jc"
                            details="Developed infrastructure and content for a workshop on databases and architecture. The workshop included topics such as deployments, networking, IAM Security, and more. The workshop incuded hands on activities such as interacting with a ful stack application and seeing how data moved from the frontend to the backend and into the database, aswell as an IAM hands on segment where I revoked and granted permissions for participants to showcase how IAM works. The workshop was hosted on YouTube and had a live Q&A at the end."
                            technologiesUsed={[icon.Oracle,icon.AWS,icon.Azure,icon.Docker,icon.Linux,icon.NextJs,icon.React,icon.Python,icon.FastAPI]}
                            howWhyBuilt="When thinking about the next idea for a technical workshop to host for my club, I wanted to do something that would give students a taste of real world systems and how they work under the hood. I decided to do a workshop on databases and architecture, as it is a topic that is often not covered in depth in the curriculum but is essential for understanding how modern applications are built and deployed. Additionally, It is what I'm doing in my current role so I had some real world experience to share. I developed the content and infrastructure for the workshop, including hands-on activities to help participants understand the concepts and apply them in their own projects. I deveoped with my team a front and backend, deployed in the cloud with Azure. I then setup a AWS Virtual Machine to host the Orace Database server.The workshop was a great success and received positive feedback from attendees who found it informative and helpful for their own learning journey."
                        />

                        <ProjectCard
                            title="Computing Students Hub Website"
                            description="A frontend-focused website for the computing students hub, the computer science club of York University."
                            image="/images/cshublogo.jpg"
                            link="https://www.cshub.tech/"
                            details="Managed the development of the Computing Students Hub website, a frontend-focused project built using Next.js, React, Tailwind CSS, and Vercel for deployment. The website serves as a platform for the computing students hub, the computer science club of York University, to share information about events, workshops, and resources for students. The project involved designing and implementing the frontend of the website, ensuring a responsive and user-friendly experience for visitors. The website is regularly updated with new content and features to support the needs of the computing students hub community."
                            technologiesUsed={[icon.TypeScript, icon.React, icon.NodeJs, icon.NextJs, icon.Notion, icon.TailwindCSS,icon.VercelDarkWordmark]}
                            howWhyBuilt="Our club needed a proper website for students to view our events, workshops, and resources. I took the initiative to manage the development of the website and collaborate with other executives to build it using Next.js, React, Tailwind CSS, and Vercel for deployment. The website was designed to be responsive and user-friendly, providing a platform for the computing students hub to share information and engage with the student community at York University."
                        />

                        <ProjectCard
                            title="Web Scraping Workshop - Web Scraping with Python"
                            description="A workshop on web scraping techniques using Python, covering topics such as HTTP requests, HTML parsing, and data extraction."
                            image="/images/webworkshop.png"
                            link="https://github.com/rh2o6/CSHub-Web-Scraping-Workshop"
                            details="Hosted a web scraping workshop for the York University Computing Students Hub. The workshop covered various web scraping techniques using Python, including HTTP requests, HTML parsing, and data extraction. Participants learned how to use libraries such as BeautifulSoup and Requests to scrape data from websites and extract useful information. The workshop included hands-on exercises and real-world examples to help participants understand the concepts and apply them in their own projects."
                            technologiesUsed={[icon.Python, icon.HTML5, icon.Chrome]}
                            howWhyBuilt="I wanted to share my knowledge of web scraping with other students at York University, as it is a valuable skill for data collection and analysis. I built the workshop using Python and created a GitHub repository with all the materials and resources needed for participants to follow along. The workshop was a great success and received positive feedback from attendees who found it informative and helpful for their own projects."
                        />


                        <ProjectCard
                            title="ProductScout"
                            description="A web application that allows users to search for products across multiple e-commerce platforms, providing price comparisons and product reviews to help users make informed purchasing decisions."
                            image="/images/ps.png"
                            link="https://github.com/rh2o6/productscout"
                            details="This project was built using web scraping tools and browser automation to gather data from various e-commerce platforms. You coud sort products by price, name, and more. Also supported favouriting products to view later."
                            technologiesUsed={[icon.Python, icon.FlaskDark, icon.Redis, icon.Postman,icon.HTML5, icon.JavaScript, icon.CSS3,icon.Docker]}
                            howWhyBuilt="This project was built as a solution to assist shopping online with my grandmother. She was not very tech-savvy so I wanted to create a tool that would make it easier for her to find products online and compare prices. I built the project using Python and Flask for the backend, and HTML, CSS, and JavaScript for the frontend. I also used Redis for caching and Postman for testing the API endpoints. The project was a great learning experience and allowed me to apply my web development skills to solve a real-world problem."
                        />

                        
                        <ProjectCard
                            title="Discord Bot - Minigames & Memes"
                            description="A Discord bot that provides minigames and meme functionality for server members."
                            image="/images/discbot.png"
                            link="https://github.com/rh2o6/WAHHBOT2.0"
                            details="A discord bot that was built using python and discord.py. PostgreSQL was used to store user information and game statistics."
                            technologiesUsed={[icon.Discord, icon.Python, icon.PostgreSQL]}
                            howWhyBuilt="Me and my friends would always play games and fool around with different bots on our discord server, but we wanted to have a bot that was more personalized to us and had the features we wanted. So we built our own! We built the bot using Python and hosted it locally. The bot includes minigames such as gambling, fishing, robbing, and more. It was a fun project that allowed us to learn more about Discord bot development and have some fun with our friends at the same time."
                        />
                        
                    </div>
                </section>

            </div>
        </main>
    )
}