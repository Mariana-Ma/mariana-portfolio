import PopupWrapper from "../components/PopupWrapper";
import dayBackground from "../assets/dayBackground.png"
import BackButton from "../components/BackButton";

export default function AboutMe() {
  return (
    <div
      className="h-screen w-screen bg-center bg-cover flex justify-center items-center pixel-art"
      style={{ backgroundImage: `url(${dayBackground})` }}
    >
      <PopupWrapper>
        <BackButton className="absolute top-3 left-7 z-50" />
        <div className="flex flex-col justify-center items-center h-full">
          <div className="ml-5 pr-10 text-left max-h-[55vh] overflow-y-auto">
            {/* Title */}
            <h1 className="text-4xl font-minecraft mb-6 mt-6">About Me</h1>
            <h2 className="mb-12 text-xl text-gray-700 font-garet">
              Hi, I'm Mariana! I’m a currently a junior at Northwestern University (go Wildcats!). I'm a computer science and statistics
              double major, with a Managerial Analytics Certificate from the Kellogg School of Management, and
              I'm passionate about exploring the intersection of these 3 fields, especially through academics, projects, and work.
              Learn more about my education, work experience, and interests below!
            </h2>

            {/* Education Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-minecraft mb-3 text-left">Education</h2>
              <ul className="list-disc list-inside space-y-2 text-left font-garet text-xl">
                <li>Northwestern University – Double Major in Computer Science & Statistics (Expected 2027)</li>
                <li>Kellogg School of Management at Northwestern - Managerial Analytics Certificate</li>
              </ul>
            </div>

            {/* Work Experience Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-minecraft mb-3 text-left">Work Experience</h2>
              <ul className="list-disc list-inside space-y-2 text-left font-garet-bold text-xl">
                <li>Plymouth Rock Assurance (Boston, MA) – Product Analyst Intern (Summer 2025)</li>
                <ul className="list-disc text-base list-inside font-garet ml-6 space-y-1">
                  <li>Conducted in-depth product analysis using SQL, Python, and R to evaluate performance and adoption of internal tools and customer-facing technologies.</li>
                  <li>Created scalable data pipelines in AWS SageMaker and S3 to support modeling with large datasets (1 TB+), contributing to customer risk assessment models.</li>
                  <li>Presented product and data insights to senior managers, directly influencing roadmap and business strategy.</li>
                </ul>
                <li>Plymouth Rock Assurance (Boston, MA) – Data Science Intern (Summer 2024)</li>
                <ul className="list-disc text-base list-inside font-garet ml-6 space-y-1">
                  <li>Developed and led a company-wide training series on AWS SageMaker, Git, and EDA for non-technical teams, improving collaboration between Data Science and Product.</li>
                  <li>Analyzed 700K+ property records from Quantarium to build predictive models and uncover data integrity issues, improving the quality of core business datasets.</li>
                  <li>Explored and built predictive statistical models using various datasets to explore complex business problems.</li>
                </ul>
              </ul>
            </div>

            {/* Extracurriculars & Leadership Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-minecraft mb-3 text-left">Extracurriculars</h2>
              <ul className="list-disc list-inside space-y-2 text-left font-garet-bold text-xl">
                <li>FutureDev - Director of Education</li>
                <ul className="list-disc list-inside text-base font-garet ml-6 space-y-1">
                  <li>Led organization and oversight of mentor-mentee groups within a student-led tech club focused on web, app, and game development.</li>
                  <li>Facilitate technical learning by coordinating lesson plans, conducting check-ins, and supporting project-based collaboration.</li>
                  <li>Collaborate with executive team members to design and revise technical curricula, ensuring accessibility for all students.</li>
                  <li>Cooperated in development projects alongside other executive members to contribute to club initiatives.</li>
                </ul>
                <li>Business Analyst - Consult Your Community</li>
                <ul className="list-disc list-inside text-base font-garet ml-6 space-y-1">
                  <li>Delivered free, high-quality consulting services to small businesses through an application-based student club.</li>
                  <li>Collaborated with local small businesses to provide tailored business solutions and data-driven insights, enhancing operational efficiency and market positioning.</li>
                  <li>Conducted thorough market research and analysis to identify growth opportunities and optimize business strategies for community impact.</li>
                </ul>
              </ul>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-minecraft mb-3">Skills</h2>
              <ul className="list-disc list-inside space-y-2 text-left font-garet-bold text-xl">
                <li>Technical skills: </li>
                  <ul className="list-disc list-inside text-base font-garet ml-6 space-y-1">
                    <li>Proficient in Python, Git, C++, R, SQL, AWS SageMaker, Jupyter Notebook, Excel</li>
                    <li>Experience in C, MATLAB, Java, React, Tailwind CSS, HTML</li>
                  </ul>
                <li>Data analysis & visualization skills: </li>
                <ul className="list-disc list-inside text-base font-garet ml-6 space-y-1">
                  <li>Proficient in Pandas, NumPy, Data Visualization (Matplotlib, Seaborn), Tableau</li>
                </ul>
                <li>Analytical & technical Skills</li>
                <ul className="list-disc list-inside text-base font-garet ml-6 space-y-1">
                  <li>Strong ability to analyze complex problems and develop data-driven solutions.</li>
                  <li>Proficient in statistical analysis, data interpretation, and data visualization.</li>
                  <li>Adaptable and fast learner, able to quickly pick up new programming languages and tools as needed.</li>
                </ul>
                <li>Communication & collaboration skills</li>
              </ul>
            </div>

            {/* Hobbies Section */}
            <div className="mb-0">
              <h2 className="text-3xl font-minecraft text-left">Hobbies & Interests!</h2>
              <ul className="list-disc list-inside space-y-2 text-left font-garet text-lg">
                <li>Graphic and digital design</li>
                <li>Painting and digital art</li>
                <li>Dance (I'm part of 2 Northwestern dance clubs!)</li>
                <li>Crochet (my favorite stress-relieving activity)</li>
                <li>Hanging out with my 2 cats, Dot and Dash!</li>
              </ul>
            </div>
          </div>
        </div>
      </PopupWrapper>
    </div>
  );
}