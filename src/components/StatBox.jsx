import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		//	Redid this. ProgressCircle and increase wasn't lining up for me. This did the trick.
		//Pretty much I just condensed it into two boxes, made the contining box a flex box.
		//Icon, title and subtitle in one, ProgressCircle and increase in the other.
		//added marginLeft:auto to the right most div to force it all the way to the right.
		//alignItems="center" on the parent div to put the elements in the middle of y axis.

		<Box width="100%" m="0 30px" display="flex" alignItems="center">
			<Box display="flex" justifyContent="space-between">
				<Box>
					{icon}
					<Typography
						variant="h4"
						fontWeight="bold"
						sx={{ color: colors.grey[100] }}
					>
						{title}
					</Typography>
					<Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
						{subtitle}
					</Typography>
				</Box>
			</Box>

			<Box
				display="flex"
				justifyContent="space-between"
				marginLeft="auto"
				zIndex="2"
			>
				<Box>
					<ProgressCircle progress={progress} />
					<Typography
						variant="h5"
						fontStyle="italic"
						sx={{ color: colors.greenAccent[600] }}
					>
						{increase}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default StatBox;
