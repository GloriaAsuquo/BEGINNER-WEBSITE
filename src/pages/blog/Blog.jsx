import React from "react";
import "./Blog.css";
import "./style.js";
import Header from "../../component/header/Header";
import img1 from "../../component/image/wrt2.jpeg";
import img2 from "../../component/image/shoe5.jpeg";
import img3 from "../../component/image/shoe6.jpeg";
import img4 from "../../component/image/shoe7.webp";

import aos from "aos";

export default function Blog() {
  return (
    <div>
      <Header />
      <section className="sect-1 show-animate">
        <h1 className="animate">Hi,i'm codehal</h1>
        <p className="animate">
          Animation on scroll using HTML CSS and JAVASCRIPT
        </p>
      </section>
      <section className="sect-2">
        <h1 className="animate">Keep scrolling</h1>
        <p className="animate">
          Animation on scroll using HTML CSS and JAVASCRIPT
        </p>
      </section>
      <section className="sect-3">
        <h1 className="animate">Hi,i'm codehal</h1>
        <p className="animate">
          Animation on scroll using HTML CSS and JAVASCRIPT
        </p>
      </section>
      <section className="sect-4">
        <h1 className="animate">Hi,i'm codehal</h1>
        <p className="animate">
          Animation on scroll using HTML CSS and JAVASCRIPT
        </p>
      </section>
      <section className="sect-5">
        <div className="images">
          {/* <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" /> */}
        </div>
      </section>

      <div className="blog-one">
        <div className="blog-one-one">
          <h6>01</h6>
          <h4>idea & Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Cum
            consectetur numquam natus cupiditate quia eaque!
          </p>
          <img src={img1} alt="" />
        </div>
        <div className="blog-one-one">
          <h6>01</h6>
          <h4>idea & Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Nulla exercitationem labore perspiciatis suscipit nisi iure.
          </p>
          <img src={img1} alt="" />
        </div>
        <div className="blog-one-one">
          <h6>01</h6>
          <h4>idea & Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Facilis possimus similique deserunt perferendis animi ut.
          </p>
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="blog-second">
        {/* <div className="blog-seond-two"> */}
        <div className="blog-second-one">
          <h3>wanna work with our proffessional team?mark as appointment</h3>
        </div>
        <div className="blog-kull">
          <button>make an appointment team</button>
        </div>
      </div>
    </div>
  );
}
