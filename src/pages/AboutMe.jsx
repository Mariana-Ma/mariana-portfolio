import PopupWrapper from "../components/PopupWrapper";

export default function AboutMe() {
  return (
    <PopupWrapper>
      <div className="p-10 text-left">
        {/* Title */}
        <h1 className="text-4xl font-minecraft mb-6 mt-6">About Me</h1>
        <p className="mb-12 text-gray-700 font-garet">
          Hi, I'm Mariana! I’m a currently a junior at Northwestern University (go Wildcats!). I'm a computer science and statistics
          double major, with a Managerial Analytics Certificate from the Kellogg School of Management, and
          I'm passionate about exploring the intersection of these 3 fields, especially through academics, projects, and work.
          Learn more about my education, work experience, and interests below!
        </p>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-minecraft mb-3 text-left">Education</h2>
          <ul className="list-disc list-inside space-y-2 text-left font-garet">
            <li>Northwestern University – Double Major in Computer Science & Statistics (Expected 2027)</li>
            <li>Kellogg School of Management at Northwestern - Managerial Analytics Certificate</li>
          </ul>
        </div>

        {/* Work Experience Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-minecraft mb-3 text-left">Work Experience</h2>
          <ul className="list-disc list-inside space-y-2 text-left font-garet">
            <li>Plymouth Rock Assurance – Product Analyst Intern (Summer 2025)</li>
            <li>Plymouth Rock Assurance – Data Science Intern (Summer 2024)</li>
          </ul>
        </div>

        {/* Extracurriculars & Leadership Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-minecraft mb-3 text-left">Extracurriculars</h2>
          <ul className="list-disc list-inside space-y-2 text-left font-garet">
            <li>FutureDev - Director of Education</li>
            <li>Business Analyst - Consult Your Community</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-minecraft mb-3">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-left font-garet">
            <li>Technical skills: Python, R, SQL</li>
            <li>Data analysis & visualization skills: </li>
            <li>Communication & collaboration skills:</li>
          </ul>
        </div>

        {/* Hobbies Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-minecraft text-left">Hobbies & Interests!</h2>
          <ul className="list-disc list-inside space-y-2 text-left font-garet">
            <li>Graphic and digital design</li>
            <li>Painting and digital art</li>
            <li>Dance (I'm part of 2 Northwestern dance clubs!)</li>
            <li>Crochet (my favorite stress-relieving activity)</li>
            <li>Hanging out with my 2 cats, Dot and Dash!</li>
          </ul>
        </div>
      </div>
    </PopupWrapper>
  );
}