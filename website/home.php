<?php

require_once ("../config/setup.php");
require_once ("../models/Accounts.php");
require_once ("../models/Courses.php");
require_once ("../models/Enrollment.php");
require_once ("../models/Students.php");
require_once ("../models/Teachers.php");
require_once ("../models/Teaches.php");
require_once ("../models/Utils.php");
session_start();
if (!$_SESSION["id"]) {
  header("location:index.php");
  exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home</title>
  <link rel="icon" type="image/png" href="../assets/icons/laptop.png">
  <link rel="stylesheet" href="../assets/css/home.css" />
  <link rel="stylesheet" href="../assets/css/responsiveHome.css" />

</head>

<body>
  <main>
    <nav>

      <a href="home.php" class="logo">

        <img class="main" src="../../assets/images/kemet-high-resolution-logo-black-transparent.svg">
      </a>

      <div class="nav-buttons">
        <a href="home.php" id="home" value="home">
          <p>Home</p>
        </a>

        <?php
        if ($_SESSION["userType"] === "student") { ?>
          <a href="home.php?page=courses" id="courses" value="courses">
            <p>Courses</p>
          </a>
          <?php
        } else { ?>
          <a href="home.php?page=courses" id="courses" value="courses">
            <p>Participants</p>
          </a>
          <?php
        } ?>

        <a href="home.php?page=about" id="about" value="about">
          <p>About</p>
        </a>

      </div>
      <div class="right">
        <a id="logout" href="../controllers/logout.php">
          <p>Logout</p>
        </a>
      </div>
      <div class="menu">
        <div class="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="options hide-options">
          <div class="nav-buttons">
            <a href="home.php" id="home" value="home">
              <p>Home</p>
            </a>

            <?php
            if ($_SESSION["userType"] === "student") { ?>
              <a href="home.php?page=courses" id="courses" value="courses">
                <p>Courses</p>
              </a>
              <?php
            } else { ?>
              <a href="home.php?page=courses" id="courses" value="courses">
                <p>Participants</p>
              </a>
              <?php
            } ?>

            <a href="home.php?page=about" id="about" value="about">
              <p>About</p>
            </a>

          </div>
          <div class="right">
            <a id="logout" href="../controllers/logout.php">
              <p>Logout</p>
            </a>
          </div>
        </div>
    </nav>

    <section>
      <footer>
        <div class="footer-contents">
          <div class="footer-content">
            <h5>Contact Us</h5>
            <p>email: 6Cjz8@example.com</p>
            <p>phone: 01000000000</p>
            <p>address: kemet street 123</p>
          </div>
          <div class="footer-content">
            <h5>Quick Links</h5>
            <ul class="list-footer">
              <li><a href="home.php">Home</a></li>
              <li><a href="home.php?page=about">About</a></li>
              <li><a href="home.php?page=courses"><?php
              if ($_SESSION["userType"] === "student") { ?>
                    Courses
                    <?php
              } else { ?>

                    Participants
                    <?php
              } ?></a></li>
            </ul>
          </div>
          <div class="footer-content">
            <h5>Follow Us</h5>
            <ul class="socials">
              <li>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
              </li>
            </ul>
          </div>
          <div class="bottom-bar">
            <p>&copy; 2024 Kemet all rights reserved</p>
          </div>
        </div>
      </footer>
    </section>
  </main>
</body>

</html>

<script type="module" src="../assets/js/home.js?t=<?= time() ?>"></script>