const Footer = () => {
    return (
        <footer className="bg-neutral p-10 text-neutral-content">
            <nav>
                <h6 className="footer-title">Seek donations for</h6>
                <a className="link-hover link">Medical</a>
                <a className="link-hover link">Emergency</a>
                <a className="link-hover link">Disaster Relief</a>
                <a className="link-hover link">Education</a>
                <a className="link-hover link">Non Profit</a>
                <a className="link-hover link">Personal Goals</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link-hover link">About us</a>
                <a className="link-hover link">Contact</a>
                <a className="link-hover link">Jobs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link-hover link">Terms of use</a>
                <a className="link-hover link">Privacy policy</a>
                <a className="link-hover link">Cookie policy</a>
            </nav>
        </footer>
    );
};
export default Footer;
