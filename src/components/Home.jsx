import "../style.css";
import OurCustomer from "./Customers";
import Company from "./Company";
import Calculator from "./Calculator";
import Footer from "./Footer";

function Home() {
  return (
    <div class="homepage auto-animated screen">
      <div class="home-C61RwL" data-id="7bb99db5-ef67-4486-ae7d-066d98be974d">
        <div
          class="path-1-FtQxcm"
          data-id="724cc8ba-30fe-449a-9ad3-55def946e773"
        ></div>
        <div
          class="simple-fast-and-hassle-free-hostel-bills-FtQxcm"
          data-id="b714f0b1-c766-4df8-a2a3-9b9c5b18e7b0"
        >
          Simple, fast and <br />
          Hassle Free Hostel Bills
        </div>

        <div
          class="brightening-lives-by-FtQxcm"
          data-id="1c6d58dd-7a43-4bef-9d77-c76cd317b530"
        >
          Brightening lives by building the capacity to deliver uninterrupted,
          safe and affordable power to Hostel Faculty.
        </div>
        <div
          class="button_-secondary-FtQxcm"
          onclick="Lib.autoanim_redirect('%2A,homepage%23loginpage,,ease-out,300', event)"
          data-id="3b9b71f3-3c18-425b-bff2-f77eca632e5c"
        >
          <div
            class="rectangle-365-xUjN6h"
            data-id="9b6903cb-96e8-4f3e-8ac8-759bf26ec1bf"
          ></div>
          <div
            class="check-bills-xUjN6h"
            data-id="5b70cd6f-1e6a-4f59-9408-4820006e43af"
          >
            Check Bills
          </div>
        </div>
        <div
          class="button_-primary-FtQxcm"
          onclick="Lib.autoanim_redirect('%2A,homepage%23loginpage,,ease-out,300', event)"
          data-id="4dccb1b4-2448-40a9-8c54-2a84baf6b0c0"
        >
          <div
            class="rectangle-365-3gtCZl"
            data-id="f785a61d-2b23-44dc-8b8c-06c32fd8c205"
          ></div>
          <div
            class="login-3gtCZl"
            data-id="e6242263-17cb-4d4d-a77c-191c20f560a9"
          >
            Login
          </div>
        </div>
        <div class="nav-FtQxcm" data-id="cc2897cb-1f54-4f17-83f8-2f68aa1247f0">
          <div
            class="login_btn-8lxSqu"
            onclick="Lib.autoanim_redirect('%2A,homepage%23loginpage,,ease-out,300', event)"
            data-id="533c6601-e4d4-4bea-967c-c57b88825dfd"
          >
            <div
              class="rectangle-365-UPfDEx"
              data-id="e5962870-60cd-4ffe-8e5c-636105c5e278"
            ></div>
            <div
              class="login-UPfDEx"
              data-id="f5779001-5117-4071-9456-b80a2bd505f0"
            >
              Login
            </div>
          </div>
          <div
            class="menu-8lxSqu"
            data-id="a15b7453-55aa-42bc-8da2-d77ee30afddf"
          >
            <div
              class="calculate-bill-JOYF6R"
              data-id="8b1a96a0-5de4-4025-8328-b8ad70499767"
            >
              Calculate Bill
            </div>
            <div
              class="contact-us-JOYF6R"
              data-id="11d54c6d-3f1f-41cd-a050-1ad11751c7ab"
            >
              Contact Us
            </div>
            <div
              class="about-us-JOYF6R"
              data-id="436de95b-7b4e-49e9-8992-d1c544b453cd"
            >
              About Us
            </div>
          </div>
          <div
            class="logo-8lxSqu"
            data-id="4fc1e8bf-b62e-4081-a46b-45acd005980f"
          ></div>
        </div>
        <div
          class="ele_home-FtQxcm"
          data-id="6ffcdd3b-b115-499a-b0cd-3f71fa28ae5e"
        ></div>
      </div>
      <OurCustomer />
      <Company />
      <Calculator />
      <Footer />
    </div>
  );
}

export default Home;
