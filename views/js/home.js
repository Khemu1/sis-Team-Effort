let buttons = document.querySelectorAll("button");
let logo = document.querySelector(".logo");
let selectedValue = document.querySelector("selected");
const homeDisplayed = sessionStorage.getItem("homeDisplayed");
let homeButton = document.querySelector("#home");
let coursesButton = document.querySelector("#courses");
let aboutButton = document.querySelector("#about");

let fetchedData;

let home1;

let about = `<div class="about">
          <div class=" about-container">
            <h3>Our Servers</h3>
            <div class="img-container">
              <img src="../../assets/images/dedicated-server-bg.jpg">
            </div>
            <p>We understand the critical importance of data <b>security, speed, and reliability</b>. That's why we
              leverage
              dedicated servers to power our platform, ensuring uncompromising performance and stability. With dedicated
              servers, we provide exclusive resources solely for the use of our system, eliminating the risks associated
              with shared hosting environments. This approach allows us to guarantee high-speed data access, robust
              security measures, and unparalleled uptime, providing our users with a seamless and dependable experience.
              Our commitment to utilizing dedicated servers underscores our dedication to safeguarding your data and
              delivering optimal performance at all times </p>
          </div>
          <div class=" about-container">
            <h3>Our Security System</h3>
            <div class="img-container">
              <img src="../../assets/images/security.webp">
            </div>
            <p>we prioritize the security of our users' data above all else. Our comprehensive security system is
              designed
              to safeguard sensitive information and protect against potential threats. Utilizing state-of-the-art
              encryption protocols, multi-factor authentication, and continuous monitoring, we ensure that your data
              remains secure at all times. Our proactive approach to security includes regular security audits,
              vulnerability assessments, and rapid response to emerging threats. With robust firewalls, intrusion
              detection systems, and real-time threat intelligence, we mitigate risks and maintain the integrity of our
              platform. Rest assured, your information is in safe hands with <b>Kemet</b> </p>
          </div>
          <div class="about-container">
            <h3>Stable Connection</h3>
            <div class="img-container">
              <img src="../../assets/images/importance-of-a-reliable-internet-connection-for-business-TeleCloud.png">
            </div>
            <p>At <b>Kemet</b>, we understand the significance of a stable connection in today's digital age. That's why
              we
              prioritize ensuring a reliable and secure connection for all users. With our robust infrastructure and
              dedicated team, we guarantee a seamless online experience, enabling students, teachers, and administrators
              to access our platform anytime, anywhere. Our commitment to maintaining a stable connection reflects our
              dedication to facilitating smooth communication, efficient collaboration, and uninterrupted access to
              essential educational resources.</p>
          </div>
          <div class="about-container">
            <h3>Maintenance</h3>
            <div class="img-container">
              <img src="../../assets/images/matintenance.png">
            </div>
            <p>Ensuring optimal performance and reliability of our systems is paramount at SIS. Our proactive approach
              to
              maintenance encompasses regular checks, updates, and fine-tuning of our infrastructure to prevent downtime
              and minimize disruptions. With a dedicated team of experts overseeing our maintenance operations, we
              swiftly
              address any potential issues before they escalate, keeping our systems running smoothly. By prioritizing
              preventative maintenance, we uphold our commitment to providing a seamless and uninterrupted user
              experience
              for students, teachers, and administrators alike. </p>
          </div>
        </div>`;

let footer = `<footer>
        <div class="container">
          <div class="footer-content">
            <div class="contact-info">
              <h3>Contact Us</h3>
              <p>Email: info@Kemet.com</p>
              <p>Phone: 123-456-7890</p>
              <p>Address: 123 shatby, Alexadnria, Egypt</p>
            </div>

            <div class="site-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div class="copyright">
              <p>&copy; 2024 Kemet. All rights reserved.</p>
              <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
            </div>
          </div>
        </div>
      </footer>`;
let courses1;

if (window.location.href === "http://sis.test/views/php/home.php") {
  logo.classList.add("white");
  document.querySelector(".main").classList.add("hide");
}

// function changeLogo() {
//   if (window.location.href !== `http://sis.test/views/php/home.php`) {
//     console.log("changing logo");
//     let main = document.querySelector("img.main");
//     main.classList.add("hide");
//     console.log("logo changed");
//   } else {
//     let main = document.querySelector("img.main");
//     main.classList.remove("hide");
//   }
// }
homeButton.addEventListener("click", () => {
  // changeLogo();
  console.log("adding home");
});
coursesButton.addEventListener("click", () => {
  // changeLogo();
  console.log("adding courses");
});
aboutButton.addEventListener("click", () => {
  // changeLogo();
  console.log("adding about");
});

// Fetch data from the backend
async function fetchData() {
  try {
    const response = await fetch("../../controller/dashboard.php");
    if (!response.ok) {
      throw new Error("Something is wrong with the response");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong with fetching data:", error);
  }
}

async function fetchDataAndUpdateVariable() {
  try {
    fetchedData = await fetchData();
    let info = fetchedData[1];
    let courses = fetchedData[2];

    if (fetchedData[0] === "student") {
      home1 = `<div class="basic-info">
      <h2>Student Information</h2>
      <div class="student-info">
        <div class="info-item" id="username">Username: ${info.userName} </div>
        <div class="info-item" id="name">Name: ${info.name} </div>
        <div class="info-item" id="address">Address: ${info.address} </div>
        <div class="info-item" id="level">Level: ${info.level} </div>
      </div>
    </div>`;
      courses1 = `<div class="courses">
  <h2>Enrolled Courses</h2>
  <div class="courses-info">
    <div class="course">
      <p>Course</p>
      <p>Hours</p>
      <p>level</p>
    </div>`;

      courses.forEach((course) => {
        courses1 += `
    <div class="course">
      <p>${course.name}</p>
      <p>${course.hours}</p>
      <p>${course.level}</p>
 
    </div>`;
      });

      courses1 += `
  </div>
</div>`;
    } else {
      home1 = `<div class="basic-info">
      <h2>Teacher Information</h2>
      <div class="teacher-info">
        <div class="info-item" id="username">Username: ${info.userName} </div>
        <div class="info-item" id="name">Name: ${info.name} </div>
        <div class="info-item" id="address">Address: ${info.address} </div> 
      </div>
    </div>`;

      courses1 = `<div class="students">
  <h2>Enrolled Students</h2>
  <div class="enrolled-students">
    <div class="student">
      <p>Course</p>
      <p>Level</p>
      <p>Hours</p>
      <p>Student Name</p>
    </div>`;

      courses.forEach((course) => {
        courses1 += `
    <div class="student">
      <p>${course.courseName}</p>
      <p>${course.courseLevel}</p>
      <p>${course.courseHours}</p>
      <p>${course.studentUserName}</p>
 
    </div>`;
      });

      courses1 += `
  </div>
</div>`;
    }
    displayContent();
  } catch (error) {
    console.error("Error:", error);
  }
}

// Update UI based on button clicked
function displayContent() {
  let section = document.querySelector("section");

  if (window.location.href === "http://sis.test/views/php/home.php") {
    console.log("will display home");

    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = home1;
    let homeNode = tempDiv.firstElementChild;
    section.appendChild(homeNode);
  }

  if (
    window.location.href === "http://sis.test/views/php/home.php?page=courses"
  ) {
    console.log("will display courses");

    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = courses1;
    let coursesNode = tempDiv.firstElementChild;
    section.appendChild(coursesNode);
  }

  if (
    window.location.href === "http://sis.test/views/php/home.php?page=about"
  ) {
    console.log("will display about");

    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = about;
    let aboutNode = tempDiv.firstElementChild;
    section.appendChild(aboutNode);
  }
  // changeLogo();
}

// Fetch data and update variable
fetchDataAndUpdateVariable();