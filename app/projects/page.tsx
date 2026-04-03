import { ProjectCard } from "@/components/projectcard"

export default function Projects() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <section className="w-full max-w-6xl mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Course Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProjectCard
                            title="EECS 3421 Final Project - AutoTrader Database Design & Implementation"
                            description="Description of course project 1."
                            image="/images/autotrader.jpg"
                            link="https://example.com/course1"
                            viewMore="More details about course project 1."
                        />
                       
                    </div>
                </section>

                <section className="w-full max-w-6xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">Personal Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProjectCard
                            title="Personal Portfolio Website"
                            description="A personal portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and experience. The website features a clean and modern design, responsive layout, and interactive elements to provide an engaging user experience."
                            image="/images/york.png"
                            link="https://coop2100-portfolio-robert.vercel.app/"
                            viewMore="This is a more detailed description of the personal portfolio website project. It includes information about the technologies used, the design process, and the challenges faced during development."
                        />
                        <ProjectCard
                            title="Databases & Architecture Workshop - Database Design & Implementation"
                            description="Hosted a workshop on how database work under the hood and how they are implemented in real world systems."
                            image="/images/dbworkshop.png"
                            link="https://www.youtube.com/watch?v=8OA7a9Cf4jc"
                            viewMore="More details about personal project 2."
                        />

                        <ProjectCard
                            title="Computing Students Hub Website"
                            description="A frontend-focused website for the computing students hub, the computer science club of York University."
                            image="/images/cshublogo.jpg"
                            link="https://www.cshub.tech/"
                            viewMore="This is a more detailed description of the personal finance tracker project. It includes information about the features implemented, the technologies used, and the challenges faced during development."
                        />

                        <ProjectCard
                            title="Web Scraping Workshop - Web Scraping with Python"
                            description="A workshop on web scraping techniques using Python, covering topics such as HTTP requests, HTML parsing, and data extraction."
                            image="/images/webworkshop.png"
                            link="https://github.com/rh2o6/CSHub-Web-Scraping-Workshop"
                            viewMore="More details about the web scraping workshop."
                        />


                        <ProjectCard
                            title="ProductScout"
                            description="A web application that allows users to search for products across multiple e-commerce platforms, providing price comparisons and product reviews to help users make informed purchasing decisions."
                            image="/images/webscraping.png"
                            link="https://github.com/rh2o6/productscout"
                            viewMore="More details about the ProductScout project."
                        />

                        
                        <ProjectCard
                            title="Discord Bot - Minigames & Memes"
                            description="A Discord bot that provides minigames and meme functionality for server members."
                            image="/images/discordbot.png"
                            link="https://github.com/rh2o6/WAHHBOT2.0"
                            viewMore="More details about the Discord bot project."
                        />
                        
                    </div>
                </section>

            </div>
        </main>
    )
}