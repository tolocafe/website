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
	backgroundColor: vars.color.background,
	borderBottom: `1px solid ${vars.color.border}`,
});

export const nav = style({
	display: "flex",
	alignItems: "center",
	gap: vars.space[4],
});

export const logo = style({
	fontSize: vars.fontSize.lg,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.foreground,
	textDecoration: "none",
	":hover": {
		color: vars.color.primary,
	},
});

export const localeNav = style({
	display: "flex",
	alignItems: "center",
});

export const localeItem = style({
	display: "flex",
	alignItems: "center",
});

export const localeLink = style({
	padding: `${vars.space[2]} ${vars.space[3]}`,
	fontSize: vars.fontSize.sm,
	fontWeight: vars.fontWeight.medium,
	color: vars.color.mutedForeground,
	textDecoration: "none",
	borderRadius: vars.radius.md,
	transition: "all 0.15s ease",
	":hover": {
		backgroundColor: vars.color.secondary,
		color: vars.color.foreground,
	},
});

export const localeLinkActive = style([
	localeLink,
	{
		backgroundColor: vars.color.primary,
		color: vars.color.primaryForeground,
		":hover": {
			backgroundColor: vars.color.primary,
			color: vars.color.primaryForeground,
		},
	},
]);

export const separator = style({
	width: "1px",
	height: "1rem",
	backgroundColor: vars.color.border,
});
