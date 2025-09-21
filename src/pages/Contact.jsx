import PopupWrapper from "../components/PopupWrapper";
import BackButton from "../components/BackButton";

export default function Contact() {
  return (
    <PopupWrapper>
      <BackButton className="absolute top-3 left-7 z-50" />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="ml-5 pr-10 text-left max-h-[55vh] overflow-y-auto">
          {/* Title */}
          <h1 className="text-3xl font-minecraft mb-6 mt-6">Contact Me!</h1>
          <p className="mb-10 font-garet text-lg text-gray-700">
            My preferred method of contact is email, as I respond the fastest. However, you can also find me on other social media / networking platforms. 
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-minecraft mb-3 text-left">E-mails</h2>
            <ul className="list-disc list-inside space-y-2 text-left text-lg font-garet">
              <li>Personal email (preferred): marianama789@gmail.com</li>
              <li>University email: marianama2027@u.northwestern.edu</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-minecraft mb-3 text-left">Other platforms you can find me</h2>
            <ul className="list-disc list-inside space-y-2 text-left text-garet">
              <li>Plymouth Rock Assurance – Product Analyst Intern (Summer 2025)</li>
              <li>Plymouth Rock Assurance – Data Science Intern (Summer 2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </PopupWrapper>
  );
}