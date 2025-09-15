import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Terms */}
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        {/* Social Icons with Links */}
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Jeremy Baraka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;