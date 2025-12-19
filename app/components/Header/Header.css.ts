import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const header = style({
	position: "sticky",
	top: 0,
	zIndex: 50,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${vars.space[3]} ${vars.space[6]}`,
	backgroundColor: vars.color.headerBg,
	borderBottom: "none",
});

export const nav = style({
	display: "flex",
	alignItems: "center",
	gap: vars.space[4],
});

export const logo = style({
	display: "flex",
	alignItems: "center",
	textDecoration: "none",
});

export const logoImg = style({
	height: "24px",
	width: "auto",
});

export const localeNav = style({
	display: "flex",
	alignItems: "center",
	gap: vars.space[2],
});

export const localeLink = style({
	padding: `${vars.space[2]} ${vars.space[3]}`,
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.medium,
	color: vars.color.headerTextMuted,
	textDecoration: "none",
	borderRadius: vars.radius.md,
	transition: "all 0.15s ease",
	":hover": {
		backgroundColor: vars.color.headerBorder,
		color: vars.color.headerText,
	},
});

export const localeLinkActive = style([
	localeLink,
	{
		backgroundColor: vars.color.background,
		color: vars.color.foreground,
		":hover": {
			backgroundColor: vars.color.background,
			color: vars.color.foreground,
		},
	},
]);

export const separator = style({
	width: "1px",
	height: "1rem",
	backgroundColor: vars.color.headerBorder,
});
