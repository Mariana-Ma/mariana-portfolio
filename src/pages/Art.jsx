import PopupWrapper from "../components/PopupWrapper";

export default function Art() {
  return (
    <PopupWrapper>
      <div className="p-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Northwestern University – B.S. in Computer Science & Statistics (Expected 2027)</li>
            <li>Relevant Coursework: Data Structures, Machine Learning, Probability & Statistics</li>
          </ul>
        </div>

        {/* Work Experience Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Work Experience</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>GNY – VP of Data Science, leading pricing modeling efforts</li>
            <li>Plymouth Rock Assurance – Data Science Intern (Summer 2024)</li>
            <li>Liberty Mutual – 17 years of leadership experience in data and analytics</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Python, R, SQL</li>
            <li>Machine Learning and Predictive Modeling</li>
            <li>Data Visualization (Tableau, Matplotlib, Seaborn)</li>
            <li>Git/GitHub, AWS SageMaker</li>
          </ul>
        </div>
      </div>
    </PopupWrapper>
  );
}