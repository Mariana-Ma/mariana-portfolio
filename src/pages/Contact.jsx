import PopupWrapper from "../components/PopupWrapper";

export default function Contact() {
  return (
    <PopupWrapper>
      <div className="p-10 text-left">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 mt-6">Contact Me!</h1>
        <p className="mb-12 text-gray-700">
          Hi, I'm Mariana! I’m a currently a junior at Northwestern University (go Wildcats!). I'm a computer science and statistics
          double major, with a Managerial Analytics Certificate from the Kellogg School of Management, and
          I'm passionate about exploring the intersection of these 3 fields, especially through academics, projects, and work.
          Learn more about my education, work experience, and interests below!
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-left">E-mails</h2>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Personal email (preferred): marianama789@gmail.com</li>
            <li>School email: marianama2027@u.northwestern.edu</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-left">Other platforms you can find me!</h2>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Plymouth Rock Assurance – Product Analyst Intern (Summer 2025)</li>
            <li>Plymouth Rock Assurance – Data Science Intern (Summer 2024)</li>
          </ul>
        </div>

      </div>
    </PopupWrapper>
  );
}