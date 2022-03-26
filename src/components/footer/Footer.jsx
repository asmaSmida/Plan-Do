import classes from "./Footer.module.css";
import logo from "./planDO.png";
import EmailIcon from "@mui/icons-material/Email";
import HouseIcon from '@mui/icons-material/House';
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CopyrightIcon from "@mui/icons-material/Copyright";
import SocialMedia from "../socialmediaBox/SocialMedia";

export default function Footer() {
    return (
      <div className={classes.footer}>
        <div className={classes.footer1}>
          <div className={classes.footerelement}>
            <img src={logo} className={classes.image} alt=""></img>
            <p className={classes.slogan}>Plan & Do</p>
            <p className={classes.slogan}>Do it the right way !</p>
          </div>
          <div className={classes.footerelement}>
            <h2 className={classes.titre}>INFORMATIONS</h2>
            <div>
              <p>
                <EmailIcon className={classes.icon} />
                <a className={classes.link} href="/home">
                  Contact
                </a>
              </p>
            </div>
            <div>
              <p>
                <HouseIcon className={classes.icon} />
                <a className={classes.link} href="/places">
                  Places
                </a>
              </p>
            </div>
            <div>
              <p>
                {" "}
                <QuestionAnswerIcon className={classes.icon} />
                <a className={classes.link} href="/faq">
                  FAQ
                </a>
              </p>
            </div>
          </div>
          <div className={classes.footerelement}>
            <h2 className={classes.titre}>SUIVEZ-NOUS</h2>
            <SocialMedia />
          </div>
        </div>
        <div className={classes.footer2}>
          <hr />
          <p>
            <CopyrightIcon className={classes.icon2} />
            2022, Plan & Do, Tous les droits sont réservés
          </p>
        </div>
      </div>
    );
  }
  