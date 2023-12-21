import { Box, Typography, styled, Grid } from "@mui/material";
import { Button } from "@mui/material";
import TechnicalSkills from "./skills/technicalSkills";
import { useState } from "react";
import {motion} from "framer-motion"

const ButtonContainer = styled(Box)`
    margin-bottom:30px;
    width:50%;
    margin: 0px auto 30px auto;
    @media (max-width: 768px) {
        width:100%;
        display:flex;
      }
`;
const SkillsContainer = styled(Grid)`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Scontainer=styled(Grid)`
    display:flex;
    align-items:center;
    justify-content:center;
`

const StyledBox = styled(Box)`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  margin-top:15px;
`;

const Name = styled(Typography)`
  color:#878787;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size:18px;
    }
    @media (max-width: 600px) {
        font-size:12px
      }
`;

const Heading = styled(Typography)`
  font-size: 50px;
  font-weight: 500;
  margin-bottom:30px;
  color:#2196F3;
`;
const Container = styled(Box)`
  width: 80%;
  text-align: center;
  margin:auto;
`;

const Buton1=styled(Button)`
    width:40%;
    @media (max-width: 768px) {
        width:50%;
    }
    @media (max-width: 600px) {
        font-size:10px;
      }
`
const Skills = () => {
    
    const [skill,setSkill]=useState("Technical")

    const handleTech=()=>{
        setSkill("Technical")
    }
    const handleSoft=()=>{
        setSkill("Soft")
    }
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ duration: 0.5}}>
    <Container style={{ marginTop: "100px" }}>
      <Heading>skills</Heading>
      <ButtonContainer>
        <Buton1  style={{marginRight:"50px"}} variant="contained" onClick={()=>handleTech()}>Technical </Buton1>
        <Buton1  variant="contained" onClick={()=>handleSoft()}>Soft </Buton1>
      </ButtonContainer>
      {
        skill==="Technical"?
        <SkillsContainer  style={{textAlign:"center"}} container>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={70} text={"Good"} />
                    <Name>Datastructures</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>ExpressJS</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>ReactJS</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={80} text={"Good"} />
                    <Name>NodeJS</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>C++</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>HTML/CSS/JS</Name>
                </StyledBox>
            </Grid>
        </SkillsContainer>
    :
        <Scontainer style={{textAlign:"center"}} container>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>Problem Solving</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>Communication</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>Competative</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>Details</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>Management</Name>
                </StyledBox>
            </Grid>
            <Grid item lg={4} xs={6}>
                <StyledBox>
                    <TechnicalSkills value={90} text={"Expert"} />
                    <Name>Creativity</Name>
                </StyledBox>
            </Grid>

        </Scontainer>
      }
    </Container>
    </motion.div>
  );
};
export default Skills;
