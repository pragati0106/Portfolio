import {AppBar,Box,Toolbar,styled} from "@mui/material"
import {Link} from "react-router-dom"



const Component=styled(AppBar)`
    background:#FFFFFF;
    color:#000;

`
const Container=styled(Toolbar)`
    justify-content:center;
    & > a{
        padding:20px;
        color:#000;
        text-decoration:none;
        @media (max-width: 768px) {
            font-size:12px;
            padding:5px;
        }
    }
    
`

const Header=()=>{
    return (
        <Component>
            <Container>
                <Link to="/">ABOUT</Link>
                <Link to="/skills" >SKILLS</Link>
                <Link target="_blank" to="https://drive.google.com/file/d/1TZnGu1YMKkC3bWBydRYYelrJWqPOzbXY/view?usp=sharing" >RESUME</Link>
                <Link to="/projects" >PROJECTS</Link>
            </Container>
        </Component>
    )
}

export default Header;