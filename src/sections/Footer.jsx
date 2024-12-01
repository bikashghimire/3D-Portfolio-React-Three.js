const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a className="w-1/2 h-1/2" href="https://github.com/bikashghimire" target="_blank">
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon">
          <a className="w-1/2 h-1/2" href="https://twitter.com/" target="_blank">
            <img src="/assets/twitter.svg" alt="twitter" />
          </a>
        </div>
        <div className="social-icon">
          <a className="w-1/2 h-1/2" href="https://www.linkedin.com/in/bikashghimire/" target="_blank">
            <img src="/assets/linkedin.svg" alt="linkedIn" />
          </a>{' '}
        </div>
      </div>

      <p className="text-white-500">© 2024 Bikash Ghimire.Inspired by Adrian Hajdin .</p>
    </footer>
  );
};

export default Footer;
