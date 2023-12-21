import { Box, Typography, styled, Grid } from "@mui/material";
import {Publish,GitHub} from '@mui/icons-material';
import {Link} from "react-router-dom"
import {motion} from "framer-motion"

const Container=styled(Grid)`
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    margin:84px auto 0px auto;
`

const Imagecontainer=styled(Box)`
    width:50%;
    margin:auto;
    background: linear-gradient(to bottom, #f2f2f2, #e0e0e0); /* Example gradient colors *
   
`

const Image=styled('img')({
    width: "100%",
    height: "100%",
    objectFit: "contain",
})


const ProjectContainer=styled(Box)`
    display:flex;
    flex-direction:column;
    align:items:center;
    justify-content:center;
`

const Heading=styled(Typography)`
    font-size:30px;
    text-align:center;
    margin-top:10px;
    @media (max-width: 768px) {
        font-size:20px
    }
`

const Description=styled(Typography)`
    font-size:16px;
    text-align:center;
    color:#878787;
    padding:0 40px;
    @media (max-width: 768px) {
        font-size:10px;
        padding:0px
    }
`

const Icons=styled(Box)`
    text-align:center;
    margin-top:10px;
    @media (max-width: 768px) {
        margin-bottom:30px;
    }
    
`
const StyleG=styled(GitHub)`
    font-size:40px;
    @media (max-width: 768px) {
        font-size:25px;
    }
`

const StyledU=styled(Publish)`
    font-size:40px;
    @media (max-width: 768px) {
        font-size:25px;
    }
`

const Projects = () => {
    const url1="https://adniasolutions.com/wp-content/uploads/2018/05/To-Do-List-Excel-Template-01.png"
    const url2="https://www.google.com/images/icons/product/keep-512.png"
    const url3="https://ars.els-cdn.com/content/image/1-s2.0-S2214785322032850-gr1.jpg"
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ duration: 0.5 }}>
        <Container container>
            <Grid item lg={6} sm={12} xs={12}>
                <ProjectContainer>
                    <Imagecontainer>
                        <Image src={url2}/>
                    </Imagecontainer>
                    <Heading>Google Keep Clone</Heading>
                    <Description>Built a React-powered Google Keep clone, enabling users to efficiently manage and organize their notes with a user-friendly interface</Description>
                    <Icons>
                        <Link target="_blank" to="https://github.com/pragati0106/Google-keep" style={{color:"black"}}><StyleG style={{marginRight:"20px"}}/></Link>
                        <Link target="_blank" to="https://googlekeepclone-v73u.onrender.com/" style={{color:"black"}}><StyledU style={{marginLeft:"20px"}}/></Link>
                    </Icons>
                </ProjectContainer>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
                <ProjectContainer>
                    <Imagecontainer>
                        <Image src={url1}/>
                    </Imagecontainer>
                    <Heading>To Do List</Heading>
                    <Description>Crafted a streamlined to-do list application for effective task management, combining simplicity and functionality for a seamless user experience</Description>
                    <Icons>
                        <Link target="_blank" to="https://github.com/pragati0106/Todolist" style={{color:"black"}}><StyleG style={{marginRight:"20px"}}/></Link>
                        <Link target="_blank" to="https://todolist-k2m2.onrender.com/"  style={{color:"black"}}><StyledU style={{marginLeft:"20px"}}/></Link>
                    </Icons>
                </ProjectContainer>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
                <ProjectContainer>
                    <Imagecontainer>
                        <Image src={url3}/>
                    </Imagecontainer>
                    <Heading>Garbage Collector</Heading>
                    <Description>Developed an innovative IoT-powered river garbage collector for autonomous waste removal, advancing environmental sustainability in water ecosystems</Description>
                    <Icons>
                        <Link target="_blank" to="https://drive.google.com/file/d/1mvz3QjHI2XSXIcWA3sLiTLamNh9ITPQ7/view?usp=sharinga" style={{color:"black"}}><StyleG style={{marginRight:"20px"}}/></Link>
                        <Link target="_blank" to="https://drive.google.com/file/d/1mvz3QjHI2XSXIcWA3sLiTLamNh9ITPQ7/view?usp=sharing"  style={{color:"black"}}><StyledU style={{marginLeft:"20px"}}/></Link>
                    </Icons>
                </ProjectContainer>
            </Grid>
        </Container>
        </motion.div>
    )
};

export default Projects;
