import React from 'react';
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
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

export const InputSelect = ({
	label,
	type,
	children,
	labelWidth,
	variant,
	input,
	helperText,
	meta: { touched, invalid, error },
	...custom
}) => {
	const classes = useStyles();
	return (
		<div className="field">
			<div className="control">
				<FormControl fullWidth className={classes.margin} variant={variant}>
					<InputLabel htmlFor="outlined-adornment-amount" error={touched && invalid}>
						{label}
					</InputLabel>
					<ThemeProvider theme={theme}>
						<Select
							native
							{...input}
							inputProps={{
								name: input.name,
								id: 'color-native-simple'
							}}
							labelWidth={labelWidth}
						>
							{children}
						</Select>
					</ThemeProvider>
					{helperText &&
						<FormHelperText id="outlined-weight-helper-text">
							{helperText}
						</FormHelperText>
					}
					{touched &&
						error && (
							<FormHelperText eårror id="outlined-weight-helper-text">
								{error}
							</FormHelperText>
						)}
				</FormControl>
			</div>
		</div>
	);
};
