import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
            <p>
                <strong>My Portfolio</strong> by{" "}
                <a href="https://github.com/Jflatley487" target="_blank" rel="noreferrer">
                    Joseph Flatley
                </a>
                .
                <hr />
                <a 
                href="https://www.linkedin.com/in/joseph-flatley-614230229/"
                target="_blank" rel="noreferrer"
                >
                    linkedin
                </a>{" "}
                |{" "}
                </p>
            </div>
        </footer>
    );
}

export default Footer;