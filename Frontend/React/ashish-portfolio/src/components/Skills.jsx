export default function Skills() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Skills</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Frontend</h4>
            <ul className="space-y-2 opacity-80">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Backend</h4>
            <ul className="space-y-2 opacity-80">
              <li>Spring Boot</li>
              <li>Spring Security</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Database & Tools</h4>
            <ul className="space-y-2 opacity-80">
              <li>MySQL</li>
              <li>Git & GitHub</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
