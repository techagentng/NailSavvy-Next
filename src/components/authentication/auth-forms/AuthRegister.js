'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import { dispatch } from 'store';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { openSnackbar } from 'store/slices/snackbar';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| JWT - REGISTER ||=========================== //

const JWTRegister = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState();

  const { register } = useAuth();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('123456');
  }, []);

  return (
    <>
      <Grid container direction="column" justifyContent="left" spacing={2}>
        <Grid item xs={12} container alignItems="left" justifyContent="left">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign up with Email address</Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          telephone: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string().max(255).required('Full Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          telephone: Yup.string()
            .matches(/^[0-9]{10,15}$/, 'Telephone must be a valid number (10-15 digits)')
            .required('Telephone is required'),
          password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          try {
            await register(values.email, values.password, values.fullName, values.telephone);
            dispatch(
              openSnackbar({
                open: true,
                message: 'Your registration has been successfully completed.',
                variant: 'alert',
                alert: { color: 'success' },
                close: false
              })
            );
            setTimeout(() => {
              router.push('/login');
            }, 1500);
          } catch (err) {
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            {/* Full Name */}
            <FormControl fullWidth error={Boolean(touched.fullName && errors.fullName)} sx={{ mb: 2 }}>
              <TextField
                label="Full Name"
                name="fullName"
                value={values.fullName}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.fullName && errors.fullName}
              />
            </FormControl>

            {/* Email */}
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ mb: 2 }}>
              <TextField
                label="Email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.email && errors.email}
              />
            </FormControl>

            {/* Telephone */}
            <FormControl fullWidth error={Boolean(touched.telephone && errors.telephone)} sx={{ mb: 2 }}>
              <TextField
                label="Telephone"
                name="telephone"
                value={values.telephone}
                onBlur={handleBlur}
                onChange={handleChange}
                helperText={touched.telephone && errors.telephone}
              />
            </FormControl>

            {/* Password */}
            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ mb: 2 }}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password && errors.password && (
                <FormHelperText error>{errors.password}</FormHelperText>
              )}
            </FormControl>

            {/* Submit Button */}
            <Box sx={{ mt: 2 }}>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default JWTRegister;
