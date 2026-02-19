import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        Full Stack Developer
      </h2>

      <p className="max-w-2xl mx-auto text-lg opacity-80">
        B.Tech CSE student specializing in React and Spring Boot.
        Building secure and scalable web applications.
      </p>

      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a href="https://github.com/ashish2024-28" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ashish-kumar-2191b5324/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
