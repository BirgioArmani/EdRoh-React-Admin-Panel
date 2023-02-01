import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const AccordionConstructor = (props) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Accordion
			sx={{
				mb: "15px",
			}}
			defaultExpanded
		>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography color={colors.greenAccent[500]} variant="h5">
					{props.head}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{props.body}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			<Header title="FAQ PAGE" subtitle="Frequently Asked Questions" />

			<AccordionConstructor
				head="An Important Question"
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						at maximus ligula, sed vehicula nulla."
			/>
			<AccordionConstructor
				head="Another Important Question"
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						at maximus ligula, sed vehicula nulla."
			/>
			<AccordionConstructor
				head="Your favorite Question"
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						at maximus ligula, sed vehicula nulla."
			/>
			<AccordionConstructor
				head="Random Question"
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						at maximus ligula, sed vehicula nulla."
			/>
			<AccordionConstructor
				head="Final Question"
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						at maximus ligula, sed vehicula nulla."
			/>
		</Box>
	);
};

export default FAQ;
