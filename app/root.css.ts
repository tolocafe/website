import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const errorContainer = style({
	paddingTop: vars.space[16],
	padding: vars.space[4],
	maxWidth: "1200px",
	margin: "0 auto",
});

export const errorStack = style({
	width: "100%",
	padding: vars.space[4],
	overflowX: "auto",
	backgroundColor: vars.color.muted,
	borderRadius: vars.radius.md,
	fontSize: vars.fontSize.sm,
	fontFamily: vars.font.mono,
});
