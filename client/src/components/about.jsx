import { Box, Typography, styled, Grid } from "@mui/material";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img3 from "../images/img3.jpg"

const IconContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 40%;
  @media (max-width: 768px) {
    width: 60%; /* Change to 100% width for smaller screens */
    text-align: center; /* Center-align text when screen size decreases */
    margin:auto;
  }
`;

const Container = styled(Box)`
  display: flex;
  margin-top: 64px;
  height: 100vh;
`;

const TextContainer = styled(Box)`
  margin: auto;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%; /* Change to 100% width for smaller screens */
    text-align: center; /* Center-align text when screen size decreases */
    margin-bottom:20px;
    height:60vh;
  }
`;
const Styledhello = styled(Typography)`
  color: #878787;
  font-size: 30px;
`;

const Styledname = styled(Typography)`
  font-size: 40px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size:30px;
  }
`;

const Styledrole = styled(Typography)`
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size:30px;
  }
`;
const StyledIntro = styled(Typography)`
  font-size: 20px;
  color: #878787;
  margin-bottom:20px;
  @media (max-width: 768px) {
    font-size:14px;
  }
`;

const Imagecontainer = styled(Box)`
  height: 70vh;
  margin: auto;
  border-radius:50%
  background: linear-gradient(
    to bottom,
    #f2f2f2,
    #e0e0e0
  );
  @media (max-width: 768px) {
    height:40vh;
  }
  `;
  
  const Image = styled("img")({
      width: "100%",
      height: "100%",
      borderRadius:"50%",
      objectFit: "contain",
});

const Firstname = styled(Typography)`
  font-size: 40px;
  color: blue;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size:30px;
  }
`;

const About = () => {
  const url =
    "https://img.freepik.com/free-photo/young-smiling-businesswoman_329181-11700.jpg";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Grid container>
          <Imagecontainer>
            <Image src={img3} alt="Image" />
          </Imagecontainer>
          <TextContainer>
            <Styledhello>Hello</Styledhello>
            <Styledname>
              I'm <Firstname display="inline">Pragati</Firstname>
            </Styledname>
            <Styledrole>Full Stack Developer</Styledrole>
            <StyledIntro>
              Passionate full-stack developer with a love for crafting efficient
              and user-friendly applications. I thrive on turning innovative
              ideas into scalable solutions, bringing a unique blend of
              technical expertise and creative problem-solving to every project.
            </StyledIntro>
            <IconContainer>
              <Link to="https://www.instagram.com/pragatiazad1111?igshid=YzVkODRmOTdmMw==">
                <Instagram style={{ fontSize: "45px", color: "black" }} />
              </Link>
              <Link to="https://www.linkedin.com/in/pragati-azad-aaa36b200/">
                <LinkedIn style={{ fontSize: "45px", color: "black" }} />
              </Link>
              <Link to="https://github.com/pragati0106">
                <GitHub style={{ fontSize: "45px", color: "black" }} />
              </Link>
            </IconContainer>
          </TextContainer>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default About;
