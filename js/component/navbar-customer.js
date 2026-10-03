function loadCustomerNavbar() {

    const navbar = document.querySelector(".navbar");

    navbar.innerHTML = `
        <div class="logo">
            <img src="../../assets/images/logo.png"
                 alt="PawPaw Logo"
                 width="70">
            <span>PawPaw</span>
        </div>

        <ul class="nav-links">
            <li>
                <a href="about.html">Trang chủ</a>
            </li>

            <li>
                <a href="service.html">Dịch vụ</a>
            </li>

            <li>
                <a href="booking.html">Đặt lịch</a>
            </li>

            <li>
                <a href="my-booking.html">Lịch hẹn</a>
            </li>

            <li>
                <a href="pet.html">Thú cưng</a>
            </li>

            <li>
                <a href="profile.html">Hồ sơ</a>
            </li>
        </ul>

        <div class="auth-buttons">
            <a href="../../index.html">
                <button class="btn btn-primary">
                    Đăng xuất
                </button>
            </a>
        </div>
    `;
}