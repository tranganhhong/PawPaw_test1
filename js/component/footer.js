function loadFooter() {

    const footer = document.querySelector(".footer");

    footer.innerHTML = `
        <div class="container footer-wrapper">

            <div class="footer-brand">

                <div class="logo footer-logo">

                    <img src="../../assets/images/logo.png"
                         alt="PawPaw Logo"
                         width="50">

                    <span>PawPaw</span>

                </div>

            </div>


            <div class="footer-contact">

                <h3>Liên hệ</h3>

                <ul>

                    <li>
                        <img src="../../assets/images/phone.png"
                             alt="Phone"
                             class="footer-icon">

                        <span>0123 456 789</span>
                    </li>

                    <li>
                        <img src="../../assets/images/email.png"
                             alt="Email"
                             class="footer-icon">

                        <span>support@pawpaw.vn</span>
                    </li>

                    <li>
                        <img src="../../assets/images/address.png"
                             alt="Location"
                             class="footer-icon">

                        <span>TP. Hồ Chí Minh</span>
                    </li>

                </ul>

            </div>

        </div>


        <div class="footer-bottom container">

            <p>
                © 2026 PawPaw. All rights reserved.
            </p>

        </div>
    `;
}