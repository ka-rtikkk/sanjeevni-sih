import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    setShowOtp(true);
  };

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 100%)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
    }}>
      <Box component="nav" sx={{
        background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
        color: 'white',
        p: 2,
        fontWeight: 'bold',
        fontSize: 32,
        letterSpacing: 2,
        boxShadow: 3,
        textAlign: 'center',
        fontFamily: 'Poppins, Roboto, Arial, sans-serif',
      }}>
        Sanjeevni
      </Box>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={8} sx={{
          p: 5,
          minWidth: 360,
          borderRadius: 5,
          background: 'rgba(255,255,255,0.95)',
          boxShadow: '0 8px 32px 0 rgba(34,139,34,0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography variant="h4" sx={{ mb: 2, color: '#185a9d', fontWeight: 700, fontFamily: 'Poppins' }}>
            Welcome Back
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3, color: '#43cea2', fontWeight: 500, fontFamily: 'Poppins' }}>
            Sign in to continue
          </Typography>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={e => setPhone(e.target.value)}
            sx={{ mb: 2, borderRadius: 2, background: '#f4f6f8' }}
            InputProps={{ style: { borderRadius: 12 } }}
          />
          {showOtp && (
            <TextField
              label="OTP"
              variant="outlined"
              fullWidth
              value={otp}
              onChange={e => setOtp(e.target.value)}
              sx={{ mb: 2, borderRadius: 2, background: '#f4f6f8' }}
              InputProps={{ style: { borderRadius: 12 } }}
            />
          )}
          {!showOtp ? (
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
                background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
                color: 'white',
                fontWeight: 600,
                borderRadius: 3,
                mb: 2,
                py: 1.2,
                fontSize: 18,
                boxShadow: '0 4px 16px 0 rgba(34,139,34,0.10)',
                transition: 'all 0.2s',
                '&:hover': { background: 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)' },
              }}
              onClick={handleSendOtp}
            >
              Send OTP
            </Button>
          ) : (
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
                background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
                color: 'white',
                fontWeight: 600,
                borderRadius: 3,
                mb: 2,
                py: 1.2,
                fontSize: 18,
                boxShadow: '0 4px 16px 0 rgba(34,139,34,0.10)',
                transition: 'all 0.2s',
                '&:hover': { background: 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)' },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
          <Divider sx={{ my: 2, width: '100%' }}>or</Divider>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              color: '#185a9d',
              borderColor: '#43cea2',
              fontWeight: 600,
              borderRadius: 3,
              py: 1.2,
              fontSize: 18,
              transition: 'all 0.2s',
              '&:hover': { background: '#e0f7fa', borderColor: '#185a9d' },
            }}
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;
