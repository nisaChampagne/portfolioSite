
import React from "react";

function Contact() {
  return (
    <div>
      <ul class="contact">
        <li>
          <h3>Address</h3>
          <p>
            Untitled Incorporated
            <br />
            1234 Somewhere Road Suite
            <br />
            Nashville, TN 00000-0000
          </p>
        </li>
        <li>
          <h3>Mail</h3>
          <p>
            <a href="#">someone@untitled.tld</a>
          </p>
        </li>
        <li>
          <h3>Phone</h3>
          <p>(800) 000-0000</p>
        </li>
      </ul>
      <div>
        <header>
          <h2>Vitae tempor lorem</h2>
        </header>
        <ul class="social">
          <li>
            <a class="icon fa-facebook" href="https://github.com/nisaChampagne">
              <span class="label">GitHub</span>
            </a>
          </li>
          <li>
            <a class="icon fa-twitter" href="https://twitter.com/nisa_Champagne">
              <span class="label">Twitter</span>
            </a>
          </li>
          <li>
            <a class="icon fa-linkedin" href="https://www.linkedin.com/in/nisa-champagne-32782b182/">
              <span class="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;