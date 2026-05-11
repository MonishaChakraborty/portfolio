export default function Portfolio() {
  const projects = [
    {
      title: "On Road Vehicle Breakdown Help Assistance",
      year: "2025",
      description:
        "Cloud-based MERN stack application for vehicle diagnostics and roadside assistance with real-time location tracking, breakdown prediction, and user-mechanic matching.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Machine Learning"],
      github: "https://github.com/MonishaChakraborty",
    },
    {
      title: "Pneumonia Prediction Using Chest X-ray Dataset",
      year: "2024",
      description:
        "Deep learning project using CNN models to classify chest X-rays for pneumonia detection with data augmentation and model fine-tuning.",
      tech: ["Python", "TensorFlow", "Keras", "CNN", "Machine Learning"],
      github: "https://github.com/MonishaChakraborty",
    },
    {
      title: "Real Time Emotion Detection",
      year: "2025",
      description:
        "AI/ML project focused on real-time facial emotion recognition using deep learning concepts and computer vision.",
      tech: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
      github: "https://github.com/MonishaChakraborty",
    },
  ];

  const skills = [
    "Python",
    "Java",
    "C",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Machine Learning",
    "TensorFlow",
    "Scikit-learn",
    "SQL",
    "Git",
    "Data Structures & Algorithms",
    "Computer Networks",
    "Operating Systems",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-pink-400 tracking-[0.3em] uppercase mb-4 text-sm">
            Portfolio Website
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Hi, I'm <span className="text-pink-500">Monisha Chakraborty</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            AIML Engineer | MERN Stack Developer | B.Tech Student passionate
            about Artificial Intelligence, Full Stack Development, and solving
            real-world problems through technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="mailto:monishachakrabarty84@gmail.com"
              className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-2xl font-semibold shadow-lg"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/MonishaChakraborty"
              target="_blank"
              className="border border-gray-600 hover:border-pink-500 px-6 py-3 rounded-2xl font-semibold transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/monisha-chakraborty-9a9448316/"
              target="_blank"
              className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-2xl font-semibold transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-pink-500">About Me</h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              I am a Computer Science and Design undergraduate at Dr. B. C.
              Roy Engineering College, Durgapur with a CGPA of 8.23.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              I enjoy building AI-powered applications and modern full-stack web
              solutions. My experience includes Machine Learning, Deep Learning,
              MERN Stack Development, and problem-solving with Data Structures
              and Algorithms.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              I am actively working toward becoming a top software engineer in
              leading tech companies while continuously improving my development
              and AI skills.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Education
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">
                  B.Tech - Computer Science and Design
                </h4>
                <p className="text-gray-400">
                  Dr. B. C. Roy Engineering College, Durgapur
                </p>
                <p className="text-pink-400">2023 - 2027 | CGPA: 8.23</p>
              </div>

              <div>
                <h4 className="font-bold text-lg">Higher Secondary</h4>
                <p className="text-gray-400">Benachity High School (HS)</p>
                <p className="text-pink-400">90%</p>
              </div>

              <div>
                <h4 className="font-bold text-lg">Madhyamik</h4>
                <p className="text-gray-400">Bhiringi Girls' High School</p>
                <p className="text-pink-400">94.14%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-pink-500">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 bg-gray-900 border border-gray-700 rounded-2xl hover:border-pink-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-pink-500">
            Experience
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-pink-500 transition">
              <h3 className="text-2xl font-bold">CTTC Internship</h3>
              <p className="text-pink-400 mb-3">Jan 2026 - Feb 2026</p>
              <p className="text-gray-300 leading-relaxed">
                Built a strong understanding of Machine Learning and Deep
                Learning concepts through hands-on implementation and practical
                projects.
              </p>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-pink-500 transition">
              <h3 className="text-2xl font-bold">XtraMind Internship</h3>
              <p className="text-pink-400 mb-3">July 2024 - October 2024</p>
              <p className="text-gray-300 leading-relaxed">
                Developed a Machine Learning model for pneumonia prediction using
                chest X-ray datasets and gained practical experience in data
                preprocessing, training, and evaluation.
              </p>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-pink-500 transition">
              <h3 className="text-2xl font-bold">
                Ardent Computech Pvt. Ltd Internship
              </h3>
              <p className="text-pink-400 mb-3">June 2025 - August 2025</p>
              <p className="text-gray-300 leading-relaxed">
                Built a full-stack roadside vehicle assistance platform with
                real-time assistance features and received appreciation from the
                technical team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-pink-500">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-3xl border border-gray-800 p-8 hover:border-pink-500 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="text-pink-400">{project.year}</span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-black border border-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block bg-pink-500 hover:bg-pink-600 transition px-5 py-2 rounded-xl font-semibold"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-pink-500">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-xl font-bold mb-2">
                The Joy of Computing Using Python
              </h3>
              <p className="text-gray-400">NPTEL | 2024</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-xl font-bold mb-2">Programming in Java</h3>
              <p className="text-gray-400">NPTEL | 2025</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 md:col-span-2">
              <h3 className="text-xl font-bold mb-2">
                Machine Learning Using Python
              </h3>
              <p className="text-gray-400">NIELIT | 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-pink-500">
            Let's Connect
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Interested in collaborating, internships, freelance work, or tech
            discussions? Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:monishachakrabarty84@gmail.com"
              className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-2xl font-semibold transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/MonishaChakraborty"
              target="_blank"
              className="border border-gray-600 hover:border-pink-500 px-8 py-4 rounded-2xl font-semibold transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/monisha-chakraborty-9a9448316/"
              target="_blank"
              className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-2xl font-semibold transition"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-gray-500 mt-16 text-sm">
            © 2026 Monisha Chakraborty. Built with React & Tailwind CSS.
          </p>
        </div>
      </section>
    </div>
  );
}
