import React from 'react';
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	label: {
		fontSize: '14'
	},
	withoutLabel: {
		marginTop: theme.spacing(3)
	},
	textField: {
		width: '25ch'
	}
}));

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00d1b2'
		}
	}
});

export const InputField = ({
	label,
	type,
	startAdornment,
	labelWidth,
	input,
	helperText,
	meta: { touched, invalid, error },
	...custom
}) => {
	const classes = useStyles();
	return (
		<div className="field">
			<div className="control">
				<FormControl fullWidth className={classes.margin} variant="outlined">
					<InputLabel htmlFor="outlined-adornment-amount" error={touched && invalid}>
						{label}
					</InputLabel>
					<ThemeProvider theme={theme}>
						<OutlinedInput
							className={classes.label}
							type={type}
							color="primary"
							error={touched && invalid}
							helperText={touched && error}
							id="outlined-adornment-amount"
							startAdornment={
								startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>
							}
							labelWidth={labelWidth}
							{...input}
						/>
					</ThemeProvider>
					{helperText &&
						<FormHelperText id="outlined-weight-helper-text">
							{helperText}
						</FormHelperText>
					}
					{touched &&
						error && (
							<FormHelperText error id="outlined-weight-helper-text">
								{error}
							</FormHelperText>
						)}
				</FormControl>
			</div>
		</div>
	);
};
