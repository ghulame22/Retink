import { useState } from "react";
import "./App.css";
import Card from "./component/Card";
import Card2 from "./component/Card2";
import FormInput from "./component/FormInput";
import NotifyBtn from "./component/NotifyBtn";
import SignUpBtn from "./component/SignUpBtn";
import VedioPlayer from "./component/VedioPlayer";
import CardApi from "./component/CardApi";
import Card2Api from "./component/Card2Api";

function App() {
  const [cardApi] = useState(CardApi);
  const [card2Api] = useState(Card2Api);

  return (
    <>
      <header>
        <img
          className="logo"
          id="mainLogo"
          src="Logoretinklogo.svg"
          alt="Logo"
        />
      </header>
      <main className="main">
        <div className="container1">
          <div>
            <span>
              Get Advanced AI + Expert Created <span>Logo</span>
            </span>
          </div>
          <img className="logo2" src="Retink-avatar (1) 1mainlogo.svg" alt="" />
          <div className="content1">
            <span>
              Boost your sales <span>10x faster</span> with content customized
              by our unique partnership of
              <span>human creativity and AI optimization</span>
            </span>
          </div>
          <span className="span2">Sign Up For The BETA!</span>
          <div>
            <FormInput placeholder={"Business Name"} />
            <span>would like a beta invite sent to </span>
            <FormInput placeholder={"@email address"} />
            <span>when it’s ready!</span>
          </div>
          <div>
            <NotifyBtn />
            <SignUpBtn />
          </div>
        </div>

        <div className="container2 titleOfContainer">
          <span>EXPLAINER VIDEO</span>
          <VedioPlayer embedId="u1wprFtkMLg" />
        </div>

        <div className="container3">
          {cardApi.map((item, index) => (
            <Card key={index} cardApi={item} />
          ))}
        </div>
        <div className="container4">
          <span className="titleOfContainer">
            Transform your Creation Process
          </span>
          <span>
            With a new approach toordering content, you can now stop juggling
            multiple documents and meetings and start publishing content faster
            and on demand
          </span>
        </div>
        <div className="container4">
          <span className="titleOfContainer">
            Activate your business growth with RetinkContent.
          </span>
          <span>
            Save time and maintain your brand identity within your budget range
            or sign up for affordable plans and still access multiple content
            services like:
          </span>
        </div>
        <div className="container5">
          {card2Api.map((item, index) => (
            <Card2 key={index} card2Api={item} />
          ))}
        </div>
        <div className="container6">
          <span className="titleOfContainer">
            Sign Up For The BETA to see more
          </span>
          <div>
            <FormInput placeholder={"Business Name"} />
            <FormInput placeholder={"Email"} />
          </div>
          <NotifyBtn />
          <SignUpBtn />
        </div>
      </main>
      <footer>
        <div className="firstFooter">
          <div>
            <img className="logo" src="Logoretinklogo.svg" alt="Logo" />
            <div>
              <div>
                <span>Product by Retink Media UG</span>
                <span>Bonn, Germany</span>
              </div>
              <div>
                <span>Get Early Acess</span>
                <span>Provide Feedback</span>
              </div>
            </div>
          </div>
          <div>
            <span>Connect with Us</span>
            <div>
              <img
                className="socialIcon"
                src="Facebook - Original.svg"
                alt="Facebook Logo"
              />
              <img
                className="socialIcon"
                src="Twitter - Original.svg"
                alt="Twitter Logo"
              />
              <img
                className="socialIcon"
                src="Group 20963Instagram.svg"
                alt="Twitter Logo"
              />
              <img
                className="socialIcon"
                src="LinkedIn - Originalsocial-media.svg"
                alt="Twitter Logo"
              />
              <img
                className="socialIcon"
                src="YouTube - Original.svg"
                alt="YouTube Logo"
              />
              <img
                className="socialIcon"
                src="Pinterest - Originalsocial-media.svg"
                alt="Twitter Logo"
              />
            </div>
          </div>
        </div>
        <div className="secondFooter">
          <span>Copyright © 2021 Retink</span>
          <div>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
