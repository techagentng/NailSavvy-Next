import { Box, Typography, styled, useTheme } from '@mui/material';

const CrossedText = styled(Typography)(({ theme }) => ({
  textDecoration: 'line-through',
  color: theme.palette.text.primary,
  fontWeight: 600, // Adjust to make the crossed text stand out
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem' // Adjust font size for smaller screens
  }
}));

const SimpleText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem' // Adjust font size for smaller screens
  }
}));

const TextSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack the text vertically on small screens
        alignItems: 'flex-start', // Align text to the left
        paddingX: { xs: 2, sm: 4 }, // Add padding to the left and right
        paddingY: 3,
        maxWidth: '100%'
      }}
    >
      {/* First heading with line-through effect */}
      <CrossedText variant="h4" sx={{ marginBottom: theme.spacing(2) }}>
        This heading is crossed out
      </CrossedText>
      {/* Second heading */}
      <SimpleText variant="h4">This is the second heading</SimpleText>
    </Box>
  );
};

export default TextSection;
