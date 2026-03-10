import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      projectName: "Html and CSS Project",
      link: "https://asadbek-demo-day.netlify.app/",
      bgImg: "./tennis.png",
      technologies: ["React", "TailwindCSS"],
    },
    {
      id: 2,
      projectName: "Leaflet Project",
      link: "https://aaa-leaflet.netlify.app/",
      bgImg: "./leaflet.png",
      technologies: ["React", "TailwindCSS", "Leaflet"],
    },
    {
      id: 3,
      projectName: "React Project",
      link: "https://mynewproject909.netlify.app/",
      bgImg: "./image.png",
      technologies: ["React", "TailwindCSS"],
    },
    {
      id: 4,
      projectName: "API Project",
      link: "https://salam-project-ruzandy.vercel.app/",
      bgImg: "./salam.png",
      technologies: ["React", "TailwindCSS", "API KEY"],
    },
    {
      id: 5,
      projectName: "LUCIDE React  Project",
      link: "https://loopstudiios-landing-page.netlify.app/",
      bgImg: "./vr.png",
      technologies: ["React", "TailwindCSS"],
    },
    {
      id: 6,
      projectName: "STORE Project",
      link: "https://comfy-store-gw72.netlify.app/",
      bgImg: "./comfy.png",
      technologies: ["React", "TailwindCSS"],
    },
  ]; // Oddiy sonlar massivi

  return (
    <section className="relative bg-black text-white">
      {/* Galereya Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {projects.map((project) => (
          <div
            key={project}
            className="group relative overflow-hidden rounded-xl bg-gray-900"
          >
            <img
              src={project.bgImg}
              alt="Work"
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4">
              <h4 className="font-bold uppercase tracking-widest mb-2 text-white">
                {project.projectName}
              </h4>
              <div className="flex gap-4">
                {project.technologies.map((item) => (
                  <p className="text-[10px] mb-4 text-gray-300">{item}</p>
                ))}
              </div>
              <Link href={`${project.link}`}>
                <button className="border-2 border-white px-6 py-1 text-[10px] font-bold hover:bg-white hover:text-black transition">
                  MORE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
