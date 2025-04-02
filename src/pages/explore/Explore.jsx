import React from "react";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="bod1">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><a href="">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#food">Category</a></li>
            <li><a href="#food-menu">Menu</a></li>
            <li><a href="#testimonials">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <h1 className="logo">UrbanTastes </h1>
        </div>
      </nav>
      <section className="showcase-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title">Eat Right Food</h1>
          <p>Eat Healty, it is good for our health.</p>
          <a href="#food-menu" className="btn btn-primary">Menu</a>
        </div>
      </section>

      <section id="about">
        <div className="about-wrapper container">
          <div className="about-text">
            <p className="small">About Us</p>
            <h2>We've been making healthy food last for 10 years</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
              eos omnis, nobis dignissimos perferendis et officia architecto,
              fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
              maiores praesentium soluta alias asperiores saepe commodi
              consequatur? Perferendis est placeat facere aspernatur!
            </p>
          </div>
          <div className="about-img">
            <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food" />
          </div>
        </div>
      </section>
      <section id="food">
        <h2>Types of food</h2>
        <div className="food-container container">
          <div className="food-type fruite">
            <div className="img-container">
              <img src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="error" />
              <div className="img-content">
                <h3>fruite</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Fruit"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="food-type vegetable">
            <div className="img-container">
              <img src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="error" />
              <div className="img-content">
                <h3>vegetable</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Vegetable"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="food-type grin">
            <div className="img-container">
              <img src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="error" />
              <div className="img-content">
                <h3>grin</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Grain"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="food-menu">
        <h2 className="food-menu-heading">Food Menu</h2>
        <div className="food-menu-container container">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="food-menu-item" key={index}>
              <div className="food-img">
                <img
                  src={`https://i.postimg.cc/${[
                    "wTLMsvSQ/food-menu1.jpg",
                    "sgzXPzzd/food-menu2.jpg",
                    "8zbCtYkF/food-menu3.jpg",
                    "Yq98p5Z7/food-menu4.jpg",
                    "KYnDqxkP/food-menu5.jpg",
                    "Jnxc8xQt/food-menu6.jpg",
                  ][index]}`}
                  alt=""
                />
              </div>
              <div className="food-description">
                <h2 className="food-titile">Food Menu Item {index + 1}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  quae.
                </p>
                <p className="food-price">Price: &#8377; 250</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="testimonials">
        <h2 className="testimonial-title">What Our Customers Say</h2>
        <div className="testimonial-container container">
          {[
            {
              name: "Ross Lee",
              img: "https://i.postimg.cc/5Nrw360Y/male-photo1.jpg",
            },
            {
              name: "Amelia Watson",
              img: "https://i.postimg.cc/sxd2xCD2/female-photo1.jpg",
            },
            {
              name: "Ben Roy",
              img: "https://i.postimg.cc/fy90qvkV/male-photo3.jpg",
            },
          ].map((customer, index) => (
            <div className="testimonial-box" key={index}>
              <div className="customer-detail">
                <div className="customer-photo">
                  <img src={customer.img} alt="" />
                  <p className="customer-name">{customer.name}</p>
                </div>
              </div>
              <div className="star-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span className="fa fa-star checked" key={i}></span>
                ))}
              </div>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                voluptas cupiditate aspernatur odit doloribus non.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="contact-container container">
          <div className="contact-img">
            <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
          </div>

          <div className="form-container">
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea
              cols="30"
              rows="6"
              placeholder="Type Your Message"
            ></textarea>
            <a href="#" className="btn btn-primary">Submit</a>
          </div>
        </div>
      </section>
      <footer id="footer">
        <h2>Restraunt &copy; all rights reserved</h2>
      </footer>
    </div>
  );
};

export default Explore;