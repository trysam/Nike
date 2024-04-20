import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div>
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} alt="footer logo" width={150} height={46} />
            </a>
            <p className="mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm ">
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfect size in store. Get Rewards{" "}
            </p>
            <div className="mt-6 flex items-center justify-start gap-5">
              {socialMedia.map((social) => (
                <div
                  key={social.alt}
                  className="bg-white flex items-center justify-center gap-5 h-12 w-12 rounded-full"
                >
                  <a href={social.url}>
                    <img
                      src={social.src}
                      alt={social.alt}
                      height={24}
                      width={24}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-center lg:gap-10 gap-20 text-base text-white-400 font-montserrat">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className=" font-montserrat text-2xl leading-normal font-medium text-white ">
                {section.title}
              </h4>
              <div className="mt-6 ">
                {section.links.map((link) => (
                  <ul key={link.name}>
                    <li className="mt-3 font-montserrat leading-normal text-white-400 hover:text-slate-gray cursor-pointer">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between  mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            height={20}
            width={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All right reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
