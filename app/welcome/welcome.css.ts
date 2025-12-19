import { style } from "@vanilla-extract/css";
import { vars } from "~/styles/tokens.css";

/**
 * Welcome component styles using vanilla-extract
 *
 * This demonstrates how to create component-scoped styles
 * with type-safe design tokens.
 */

export const main = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	paddingTop: vars.space[16],
	paddingBottom: vars.space[4],
});

export const container = style({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: vars.space[16],
	minHeight: 0,
});

export const header = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: vars.space[8],
});

export const logoContainer = style({
	width: "500px",
	maxWidth: "100vw",
	padding: vars.space[4],
});

export const logo = style({
	display: "block",
	width: "100%",
});

export const logoLight = style([
	logo,
	{
		"@media": {
			"(prefers-color-scheme: dark)": {
				display: "none",
			},
		},
	},
]);

export const logoDark = style([
	logo,
	{
		display: "none",
		"@media": {
			"(prefers-color-scheme: dark)": {
				display: "block",
			},
		},
	},
]);

export const content = style({
	maxWidth: "300px",
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: vars.space[6],
	padding: `0 ${vars.space[4]}`,
});

export const nav = style({
	borderRadius: vars.radius["3xl"],
	border: `1px solid ${vars.color.border}`,
	padding: vars.space[6],
	display: "flex",
	flexDirection: "column",
	gap: vars.space[4],
});

export const navTitle = style({
	lineHeight: vars.lineHeight.relaxed,
	color: vars.color.mutedForeground,
	textAlign: "center",
});

export const resourceList = style({
	listStyle: "none",
	margin: 0,
	padding: 0,
});

export const resourceItem = style({
	margin: 0,
});

export const resourceLink = style({
	display: "flex",
	alignItems: "center",
	gap: vars.space[3],
	alignSelf: "stretch",
	padding: vars.space[3],
	lineHeight: vars.lineHeight.normal,
	color: vars.color.primary,
	":hover": {
		textDecoration: "underline",
	},
});

export const resourceIcon = style({
	stroke: vars.color.mutedForeground,
	transition: "stroke 0.15s ease",
	selectors: {
		[`${resourceLink}:hover &`]: {
			stroke: vars.color.primary,
		},
	},
});

export const message = style({
	alignSelf: "stretch",
	padding: vars.space[3],
	lineHeight: vars.lineHeight.normal,
});
