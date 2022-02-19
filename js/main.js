class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-container">
                    <div class="wrapper">
                        <div class="header-section">
                            <div class="logo-section">
                                <a href="./index.html"><img src="./assets/images/logo/logo.svg" alt="logo"></a>
                            </div>
                            <div class="menu-section">
                                <ul>
                                    <li><a href="./index.html" class="activelink">Home</a></li>
                                    <li><a href="./index.html#how_it_works">How It Works</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="./about.html">About Us</a></li>
                                    <li><a href="./contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="link-section">
                                <ul>
                                    <li><a href="#" class="employe_link">Employers</a></li>
                                    <li><a href="#" class="expert_link">Expert</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `
    }
}

customElements.define(`my-header`, Header)


class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-wrapper">
                <div class="wrapper mb-3">
                    <div class="max-width">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="footer-left">
                                    <a href="./index.html"
                                    ><img
                                        src="./assets/images/logo/flogo.svg"
                                        class="img-fluid"
                                        alt=""
                                    /></a>
                                    <p>
                                    A private limited company registered in the United Kingdom,
                                    company registration number is 12193805.
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                <div class="menu company">
                                    <h6>Company</h6>
                                    <ul>
                                    <li><a href="./index.html">Home</a></li>
                                    <li><a href="./about.html">About us</a></li>
                                    <li><a href="./index.html#work_flow">How it works</a></li>
                                    <li><a href="#">Faq</a></li>
                                    <li><a href="./contact-us.html">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                <div class="menu legal">
                                    <h6>Legal</h6>
                                    <ul>
                                    <li><a href="#">Terms and conditions</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Cookie policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="connected menu">
                                    <h6>Connect with us</h6>
                                    <a href="javascript: void(0)"
                                    ><i class="fa fa-facebook" aria-hidden="true"></i
                                    ></a>
                                    <a href="https://twitter.com/expertscircle" target="_blank"
                                    ><i class="fa fa-twitter" aria-hidden="true"></i
                                    ></a>
                                    <a
                                    href="https://www.linkedin.com/company/74367916/admin/"
                                    target="_blank"
                                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-wrapper">
                    <p>Copyright &copy; 2021 Experts Circle. All rights reserved.</p>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define(`my-footer`, Footer)




// Carousel 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})