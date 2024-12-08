import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const OTPInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));

  const handleChange = (value, index) => {
    if (isNaN(value)) return; // Only allow numeric input

    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1); // Ensure only one digit is kept
    setOtp(updatedOtp);

    // Move to the next input field automatically
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    if (onChange) onChange(updatedOtp.join(''));
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {otp.map((digit, index) => (
        <Grid item key={index}>
          <TextField
            id={`otp-input-${index}`}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            variant="outlined"
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: 'center',
                fontSize: '20px',
                width: '40px',
                height: '40px',
              },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default OTPInput;
