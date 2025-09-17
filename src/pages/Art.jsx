import PopupWrapper from "../components/PopupWrapper";

const workProjects = [
  {
    title: "Project 1",
    description: "Description of work project 1",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "Description of work project 2",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/project2"
  }
];

const personalProjects = [
  {
    title: "Personal Project 1",
    description: "Description of personal project 1",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/personal1"
  },
  {
    title: "Personal Project 2",
    description: "Description of personal project 2",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://github.com/yourusername/personal2"
  }
];

export default function Art() {
  const renderProjectCard = ({ title, description, imageUrl, link }) => (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
      )}
    </div>
  );

  return (
    <PopupWrapper>
      <div className="p-10 text-left">
        <h1 className="text-3xl font-bold mb-6">Graphic & Digital Design</h1>
        <div className="grid grid-cols-2 gap-6 mb-10">
          {workProjects.map((proj, idx) => (
            <div key={idx}>{renderProjectCard(proj)}</div>
          ))}
        </div>

        <h1 className="text-3xl font-bold mb-6">Artwork</h1>
        <div className="grid grid-cols-2 gap-6">
          {personalProjects.map((proj, idx) => (
            <div key={idx}>{renderProjectCard(proj)}</div>
          ))}
        </div>

        <h1 className="text-3xl font-bold mb-6">Bonus: my favorite crochet pieces!</h1>
        <div className="grid grid-cols-2 gap-6">
          {personalProjects.map((proj, idx) => (
            <div key={idx}>{renderProjectCard(proj)}</div>
          ))}
        </div>
      </div>
    </PopupWrapper>
  );
}