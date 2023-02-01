//For change notes/learning moments see Sidebar

import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { absoluteAngleDegrees } from "@nivo/core";

const LinkTitle = ({ text }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Typography
			variant="h6"
			color={colors.grey[300]}
			sx={{ m: "15px 0 5px 20px" }}
		>
			{text}
		</Typography>
	);
};

const Item = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.grey[100] }}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState("Dashboard");
	const [sideBarWidth, setSidebarWidth] = useState("315px");

	//To fix the sidebar overflow issue, This took me a bit because I'm still new.
	//
	//	First I made the position fixed for .pro-sidebar. This set it to stay fixed on the left hand side of the page. But this caused a new problem.
	//Since the sidebar is fixed, the body overlaps the sidebar. So first I wrapped the sidebar in a relative container, and
	//set the width to "sideBarWidth", which uses the useState hook. Then I used a ternary operator to set the new state
	//of "sideBarWidth" at the same time as updating the onClick event for the navbar button.

	return (
		<Box width={sideBarWidth}>
			<Box
				sx={{
					"& .pro-sidebar": {
						position: "fixed",
					},
					"& .pro-sidebar-inner": {
						background: `${colors.primary[400]} !important`,
					},
					"& .pro-icon-wrapper": {
						background: "transparent !important",
					},
					"& .pro-inner-item": {
						padding: "5px 35px 5px 20px !important",
					},
					"& .pro-inner-item:hover": {
						color: "#868dfb !important",
					},
					"& .pro-menu-item.active": {
						color: "#6870fa!important",
					},
				}}
			>
				<ProSidebar collapsed={isCollapsed}>
					<Menu iconShape="square">
						{/* LOGO AND MENU ICON */}
						<MenuItem
							onClick={
								() =>
									setIsCollapsed(!isCollapsed) &
									(!isCollapsed ? undefined : setSidebarWidth("315px")) //change made to update sidebar
							}
							icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
							style={{
								margin: "10px 0 20px 0",
								color: colors.grey[100],
							}}
						>
							{!isCollapsed && (
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									ml="15px"
								>
									<Typography variant="h3" color={colors.grey[100]}>
										ΩPANEL
									</Typography>
									<IconButton
										onClick={
											() =>
												setIsCollapsed(!isCollapsed) &
												(!isCollapsed ? setSidebarWidth("75px") : undefined) //change made to update sidebar
										}
									>
										<MenuOutlinedIcon />
									</IconButton>
								</Box>
							)}
						</MenuItem>
						{/* USER */}
						{!isCollapsed && (
							<Box>
								<Box display="flex" justifyContent="center" alignItems="center">
									<img
										alt="profile-user"
										width="100px"
										height="100px"
										src={`../../assets/user.png`}
										style={{ cursor: "pointer", borderRadius: "50%" }}
									/>
								</Box>
								<Box textAlign="center">
									<Typography
										variant="h2"
										color={colors.grey[100]}
										fontWeight="bold"
										sx={{ m: "10px 0 0 0" }}
									>
										Birgio Armani
									</Typography>
									<Typography variant="h5" color={colors.greenAccent[500]}>
										VP Fancy Admin
									</Typography>
								</Box>
							</Box>
						)}
						{/* MENU ITMES */}
						<Box
							paddingTop="10px"
							paddingLeft={isCollapsed ? undefined : "10%"}
						>
							<Item
								title="Dashboard"
								to="/"
								icon={<HomeOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							{!isCollapsed && <LinkTitle text={"Data"} />}
							<Item
								title="Manage Team"
								to="/team"
								icon={<PeopleOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Contacts Information"
								to="/contacts"
								icon={<ContactsOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Invoice Balances"
								to="/invoices"
								icon={<ReceiptOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							{!isCollapsed && <LinkTitle text={"Pages"} />}

							<Item
								title="Profile Form"
								to="/form"
								icon={<PersonOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Calendar"
								to="/calendar"
								icon={<CalendarTodayOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="FAQ Page"
								to="/faq"
								icon={<HelpOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							{!isCollapsed && <LinkTitle text={"Charts"} />}

							<Item
								title="Bar Chart"
								to="/bar"
								icon={<BarChartOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Pie Chart"
								to="/pie"
								icon={<PieChartOutlineOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Line Chart"
								to="/line"
								icon={<TimelineOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
							<Item
								title="Geography Chart"
								to="/geography"
								icon={<MapOutlinedIcon />}
								selected={selected}
								setSelected={setSelected}
							/>
						</Box>
					</Menu>
				</ProSidebar>
			</Box>
		</Box>
	);
};

export default Sidebar;
