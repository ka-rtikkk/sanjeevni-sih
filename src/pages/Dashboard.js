import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Avatar, Slider, Button, Paper, Stack } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsIcon from '@mui/icons-material/Sms';

const languages = ['English', 'Hindi', 'Odia'];

const Dashboard = () => {
  const [lang, setLang] = useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 100%)',
      fontFamily: 'Poppins, Roboto, Arial, sans-serif',
    }}>
      <AppBar position="static" sx={{
        background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
        boxShadow: 3,
      }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 2, fontFamily: 'Poppins' }}>
            Sanjeevni
          </Typography>
          <Avatar sx={{ bgcolor: '#43cea2', color: '#185a9d', fontWeight: 700, fontFamily: 'Poppins' }}>U</Avatar>
        </Toolbar>
      </AppBar>
      <Paper elevation={8} sx={{
        mt: 5,
        mx: 'auto',
        p: 5,
        maxWidth: 520,
        borderRadius: 5,
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 8px 32px 0 rgba(34,139,34,0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#185a9d', fontWeight: 700, fontFamily: 'Poppins' }}>
          Choose Language
        </Typography>
        <Slider
          value={lang}
          min={0}
          max={2}
          step={1}
          marks={languages.map((l, i) => ({ value: i, label: l }))}
          onChange={(_, v) => setLang(v)}
          sx={{
            color: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
            mb: 4,
            width: '80%',
          }}
        />
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 2, width: '100%' }}>
          <Button
            variant="outlined"
            startIcon={<WhatsAppIcon />}
            sx={{
              color: '#43cea2',
              borderColor: '#43cea2',
              fontWeight: 600,
              borderRadius: 3,
              px: 3,
              fontSize: 16,
              transition: 'all 0.2s',
              '&:hover': { background: '#e0f7fa', borderColor: '#185a9d' },
            }}
            disabled
          >
            Chat in WhatsApp
          </Button>
          <Button
            variant="contained"
            startIcon={<ChatIcon />}
            sx={{
              bgcolor: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
              background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
              color: 'white',
              fontWeight: 600,
              borderRadius: 3,
              px: 3,
              fontSize: 16,
              boxShadow: '0 4px 16px 0 rgba(34,139,34,0.10)',
              transition: 'all 0.2s',
              '&:hover': { background: 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)' },
            }}
            onClick={() => navigate('/chat')}
          >
            Chat in Web
          </Button>
          <Button
            variant="outlined"
            startIcon={<SmsIcon />}
            sx={{
              color: '#185a9d',
              borderColor: '#185a9d',
              fontWeight: 600,
              borderRadius: 3,
              px: 3,
              fontSize: 16,
              transition: 'all 0.2s',
              '&:hover': { background: '#e0f7fa', borderColor: '#43cea2' },
            }}
            disabled
          >
            Chat in SMS
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Dashboard;
