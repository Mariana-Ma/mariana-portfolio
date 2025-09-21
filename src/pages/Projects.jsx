// src/pages/Projects.jsx
import PopupWrapper from "../components/PopupWrapper";
import daymetPicture from "../assets/daymetPicture.png"
import leakbotPicture from "../assets/leakbotPicture.png"
import seedswapPicture from "../assets/seedswapPicture.png"
import BackButton from "../components/BackButton";

const workProjects = [
  {
    title: "Hydrology Data Pipeline for Weather Modeling",
    description: `● Built a scalable data pipeline using AWS S3 and SageMaker to process over 1 TB of raw DAYMET (NASA dataset) weather and climate data for hydrology modeling. 
                  ● Engineered features from spatial climate data including freeze-thaw cycles, precipitation frequencies, and distribution statistics
                  (mean, standard deviation, skewness, kurtosis).
                  ● Transformed complex raw data into geospatial GeoTIFF outputs with property-specific weather insights, enabling improved risk modeling and customer targeting for insurance products.`,
    imageUrl: daymetPicture,
    link: "https://daymet.ornl.gov/",
    linkText: "View Data Source",
    skills: ["Big Data", "Data Pipeline", "AWS SageMaker", "Python"]
  },
  {
    title: "Leakbot Analysis",
    description: `● Analyzed customer behavior and claims data to evaluate the effectiveness of LeakBot, a pipe-mounted leak detection device, using Python, SQL, and Excel on large internal insurance datasets. 
                  ● Compared characteristics and claim metrics (e.g., loss ratio, claim frequency) across customers offered vs. installed the device.
                  ● Cleaned and joined multi-source datasets to uncover trends, helping assess product value and customer segmentation strategies.
                  ● Presented findings to senior leadership and managers, directly influencing business decisions on product rollout and marketing strategy.`,
    imageUrl: leakbotPicture,
    link: "https://leakbot.io/",
    linkText: "View Product",
    skills: ["Data Analysis", "Python", "SQL"]
  },
  {
    title: "LexisNexis Time Series Analysis",
    description: `● Analyzed customer behavior and claims data to evaluate the effectiveness of LeakBot, a pipe-mounted leak detection device, using Python, SQL, and Excel on large internal insurance datasets. 
                  ● Compared characteristics and claim metrics (e.g., loss ratio, claim frequency) across customers offered vs. installed the device.
                  ● Cleaned and joined multi-source datasets to uncover trends, helping assess product value and customer segmentation strategies.
                  ● Presented findings to senior leadership and managers, directly influencing business decisions on product rollout and marketing strategy.`,
    imageUrl: leakbotPicture,
    linkText: "View Product",
    skills: ["Data Analysis", "R", "Big Data"]
  },
  {
    title: "Quantarium Modeling",
    description: `● Analyzed customer behavior and claims data to evaluate the effectiveness of LeakBot, a pipe-mounted leak detection device, using Python, SQL, and Excel on large internal insurance datasets. 
                  ● Compared characteristics and claim metrics (e.g., loss ratio, claim frequency) across customers offered vs. installed the device.
                  ● Cleaned and joined multi-source datasets to uncover trends, helping assess product value and customer segmentation strategies.
                  ● Presented findings to senior leadership and managers, directly influencing business decisions on product rollout and marketing strategy.`,
    imageUrl: leakbotPicture,
    linkText: "View Product",
    skills: ["Data Analysis", "R", "Big Data"]
  },
  {
    title: "AWS SageMaker & GitHub Training Series",
    description: `● Analyzed customer behavior and claims data to evaluate the effectiveness of LeakBot, a pipe-mounted leak detection device, using Python, SQL, and Excel on large internal insurance datasets. 
                  ● Compared characteristics and claim metrics (e.g., loss ratio, claim frequency) across customers offered vs. installed the device.
                  ● Cleaned and joined multi-source datasets to uncover trends, helping assess product value and customer segmentation strategies.
                  ● Presented findings to senior leadership and managers, directly influencing business decisions on product rollout and marketing strategy.`,
    imageUrl: leakbotPicture,
    linkText: "View Product",
    skills: ["Data Analysis", "R", "Big Data"]
  }
];

const personalProjects = [
  {
    title: "SeedSwap: Gardening Social Media Website",
    description: `● Northwestern WildHacks Hackathon Project. 
                  ● Built a full-stack web application using React (frontend) & MongoDB (backend database) to map virtual gardens to real plants.
                  ● Implemented user profiles and interactive garden visualizations from user-submitted data.
                  ● Integrated AI chatbot for personalized gardening tips, increasing engagement.
                  ● Developed peer-to-peer seed exchange to enable community sharing and sustainable gardening.`,
    imageUrl: seedswapPicture,
    link: "https://github.com/Mariana-Ma/seedswap",
    linkText: "View on GitHub",
    skills: ["JavaScript", "React", "HTML & CSS", "Full-Stack Web Dev"]
  },
  {
    title: "Pick-A-Fit – Weather-Aware Outfit Assistant",
    description: `● Developed a weather-aware CLI-based outfit assistant using Python, AWS (S3, RDS, Lambda, API Gateway), and OpenWeather API.
                  ● Engineered a full-stack pipeline: users upload wardrobe images and metadata, which are stored and managed in AWS and SQL.
                  ● Developed serverless backend for wardrobe uploads, image validation (AWS Rekognition), and weather-based outfit suggestions.
                  ● Integrated real-time and weekly forecast features for seasonally appropriate recommendations.`,
    imageUrl: "https://via.placeholder.com/150",
    link: "https://github.com/Mariana-Ma/pick-a-fit",
    linkText: "View on GitHub",
    skills: ["Python", "AWS S3, Lambda, RDS", "SQL", "Weather API", "Serverless Architecture"]
  },
  {
    title: "Functional Campus Bus Tracker & Map",
    description: `● Northwestern WildHacks Hackathon Project. 
                  ● Built a full-stack web application using React (frontend) & MongoDB (backend database) to map virtual gardens to real plants.
                  ● Implemented user profiles and interactive garden visualizations from user-submitted data.
                  ● Integrated AI chatbot for personalized gardening tips, increasing engagement.
                  ● Developed peer-to-peer seed exchange to enable community sharing and sustainable gardening.`,
    imageUrl: seedswapPicture,
    link: "https://github.com/Mariana-Ma/seedswap",
    skills: ["C++", "OSM files", "HTML & CSS", "Full-Stack Web Dev"]
  },
  {
    title: "Statistical Analysis",
    description: `● Northwestern WildHacks Hackathon Project. 
                  ● Built a full-stack web application using React (frontend) & MongoDB (backend database) to map virtual gardens to real plants.
                  ● Implemented user profiles and interactive garden visualizations from user-submitted data.
                  ● Integrated AI chatbot for personalized gardening tips, increasing engagement.
                  ● Developed peer-to-peer seed exchange to enable community sharing and sustainable gardening.`,
    imageUrl: seedswapPicture,
    link: "https://github.com/Mariana-Ma/seedswap",
    linkText: "View Data Report",
    skills: ["R", "Regression", "Data Analysis", "Data Visualalization & Reporting"]
  }
];

export default function Projects() {
  const renderProjectCard = ({ title, description, imageUrl, link, linkText, skills = [] }) => (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col w-full h-[460px]">
      {/* Fixed-size image container */}
      <div className="w-full h-40 overflow-hidden rounded-md mb-2 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
  
      {/* Title */}
      <h3 className="font-minecraft text-lg mb-2 flex-shrink-0 text-center">{title}</h3>
  
      {/* Skills */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-2 flex-shrink-0">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full font-garet">
              {skill}
            </span>
          ))}
        </div>
      )}
  
      {/* Scrollable description */}
      <div className="text-left ml-4 mt-2 whitespace-pre-line text-gray-700 overflow-y-auto flex-1 font-garet">
        {description}
      </div>
  
      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 flex-shrink-0 text-center"
        >
          {linkText || "View Project"}
        </a>
      )}
    </div>
  );

  return (
    <div className="w-screen h-screen relative">
      <PopupWrapper>
        <BackButton className="absolute top-3 left-7 z-50" />
        <div className="flex flex-col justify-center items-center h-full">
          {/* Scrollable container */}
          <div className="ml-5 pr-5 text-left max-h-[55vh] overflow-y-auto">
            {/* Work Projects */}
            <h1 className="text-3xl font-minecraft mb-6">Work Projects</h1>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {workProjects.map((proj, idx) => (
                <div key={idx}>{renderProjectCard(proj)}</div>
              ))}
            </div>

            {/* Personal Projects */}
            <h1 className="text-3xl font-minecraft mb-6">Personal Projects</h1>
            <div className="grid grid-cols-2 gap-6">
              {personalProjects.map((proj, idx) => (
                <div key={idx}>{renderProjectCard(proj)}</div>
              ))}
            </div>
          </div>
        </div>
      </PopupWrapper>
    </div>
  );
}