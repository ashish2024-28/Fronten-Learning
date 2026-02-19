export default function Projects() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-8">Projects</h3>

      <div className="space-y-8">
        <div className="p-6 border rounded-lg dark:border-gray-700">
          <h4 className="text-xl font-semibold">
            Multi-Domain University Management System
          </h4>
          <p className="opacity-80 mt-2">
            Built a scalable university system with domain-based routing,
            JWT authentication, and role-based access control.
          </p>
        </div>

        <div className="p-6 border rounded-lg dark:border-gray-700">
          <h4 className="text-xl font-semibold">Authentication System</h4>
          <p className="opacity-80 mt-2">
            Implemented secure login/signup with encrypted passwords and JWT.
          </p>
        </div>
      </div>
    </section>
  );
}
