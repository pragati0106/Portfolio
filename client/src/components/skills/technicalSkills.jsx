import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "../progress/progressProvider";
import React from "react"
import {Box,styled} from "@mui/material"


const Container=styled(Box)`
    width:80px;
    @media (max-width: 768px) {
        width:50px;
    }
`


const TechnicalSkills=({text,value})=>{
    const [valueEnd, setValueEnd] = React.useState(value);
    return (
        <>
         <ProgressProvider  valueStart={10} valueEnd={valueEnd}>
    {
    value => 
    <Container >
        <CircularProgressbar  styles={buildStyles({pathTransitionDuration:2, textSize: '22px', pathColor:"primary"})} value={value} text={text} />
    </Container>

    }
    </ProgressProvider>
        </>
    )

}

export default TechnicalSkills;