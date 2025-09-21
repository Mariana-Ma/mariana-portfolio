import PopupWrapper from "../components/PopupWrapper";
import BackButton from "../components/BackButton";
import linkedinLogo from "../assets/linkedinLogo.png"
import githubLogo from "../assets/githubLogo.png"

export default function Contact() {
  return (
    <PopupWrapper>
      <BackButton className="absolute top-3 left-7 z-50" />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="ml-5 pr-10 text-left max-h-[55vh] overflow-y-auto">
          {/* Title */}
          <h1 className="text-4xl font-minecraft mb-6 mt-6">Contact Me!</h1>
          <p className="mb-10 font-garet text-xl text-gray-700">
            My preferred method of contact is email, as I respond the fastest. However, you can also find me on other social media / networking platforms. 
          </p>

          <div className="mb-8">
            <h2 className="text-3xl font-minecraft mb-3 text-left">E-mails</h2>
            <ul className="list-disc list-inside space-y-2 text-left text-xl font-garet">
              <li>Personal email (preferred): marianama789@gmail.com</li>
              <li>University email: marianama2027@u.northwestern.edu</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-minecraft mb-4 text-left">Other platforms you can find me</h2>
            <div className="ml-4 flex gap-8">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mariana-ma-7a70b6316/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-20 h-20 mb-1" />
                <span className="font-garet text-sm">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Mariana-Ma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <img src={githubLogo} alt="GitHub" className="w-20 h-20 mb-1" />
                <span className="font-garet text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PopupWrapper>
  );
}