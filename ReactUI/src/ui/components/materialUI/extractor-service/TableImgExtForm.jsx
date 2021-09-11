import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
	card: {
		height: "100%",
	},
	input: {
		display: "none",
	},
	root: {
		width: 300,
	},
	title: {
		color: "white",
		fontSize: 12,
		backgroundColor: "#3a4651",
	},
	textarea:{
		width:"100%",
	}
}));

const TableImgExtForm = (props) => {
	const [t, i18n] = useTranslation("global");
	const classes = useStyles();
	const text = props.data.text ? props.data.text : ".";
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<CardHeader
						className={classes.title}
						title={t("extractor-service.image-text.table-result")}
						titleTypographyProps={{ variant: "h6" }}
					/>
					<CardContent>
						<Grid container spacing={6}>
							<Grid item xs>
								<TextareaAutosize
									className={classes.textarea}
									maxRows={4}
									aria-label="maximum height"
									placeholder="Maximum 4 rows"
									value={text}
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default TableImgExtForm;
