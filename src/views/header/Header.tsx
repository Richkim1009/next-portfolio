import { Grid, Typography } from "@mui/material";
import HeaderButton from "./HeaderButton";
import HeaderIconButton from "./HeaderIconButton";

export default function Header() {
    const HeaderSubjects = ['INTRO', 'EXPERIENCE', 'PROJECTS', 'SKILLS', 'CERTIFICATE', 'RETROSPECITVE']

    return (
        <header style={{ position: 'sticky' }}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Typography variant="h6" component="h2" align="right" >
                        KIM BU IK
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    { HeaderSubjects.map((cur, idx) => <HeaderButton key={idx+1} name={cur} />) }
                </Grid>
                <Grid item xs>
                    <HeaderIconButton />
                </Grid>
            </Grid>
        </header>
    )
}