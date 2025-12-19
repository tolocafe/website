import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const footer = style({
	backgroundColor: vars.color.secondary,
	borderTop: `1px solid ${vars.color.border}`,
	padding: `${vars.space[12]} ${vars.space[6]}`,
	marginTop: "auto",
});

export const container = style({
	maxWidth: "1200px",
	margin: "0 auto",
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
	gap: vars.space[8],
});

export const section = style({
	display: "flex",
	flexDirection: "column",
	gap: vars.space[3],
});

export const sectionTitle = style({
	fontSize: vars.fontSize.lg,
	fontWeight: vars.fontWeight.semibold,
	color: vars.color.foreground,
	marginBottom: vars.space[2],
});

export const link = style({
	fontSize: vars.fontSize.base,
	color: vars.color.mutedForeground,
	textDecoration: "none",
	transition: "color 0.15s ease",
	":hover": {
		color: vars.color.primary,
	},
});

export const copyright = style({
	marginTop: vars.space[8],
	paddingTop: vars.space[6],
	borderTop: `1px solid ${vars.color.border}`,
	textAlign: "center",
	fontSize: vars.fontSize.sm,
	color: vars.color.mutedForeground,
});

export const brand = style({
	fontSize: vars.fontSize["2xl"],
	fontWeight: vars.fontWeight.bold,
	color: vars.color.foreground,
	marginBottom: vars.space[2],
});

export const tagline = style({
	fontSize: vars.fontSize.sm,
	color: vars.color.mutedForeground,
	lineHeight: vars.lineHeight.relaxed,
});
