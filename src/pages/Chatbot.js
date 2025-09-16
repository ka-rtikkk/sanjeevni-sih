import React, { useState, useRef, useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, Avatar, Paper, TextField, Button, Stack, Fade } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hello! Please enter your symptoms to predict the disease.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms: { symptom: input } })
      });
      if (!res.ok) throw new Error('Server error');
      const data = await res.json();
      setMessages(msgs => [...msgs, { from: 'bot', text: data.response }]);
    } catch (err) {
      setMessages(msgs => [...msgs, { from: 'bot', text: '❌ Sorry, could not connect to the server.' }]);
    } finally {
      setInput('');
      setLoading(false);
    }
  };

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
        minHeight: 420,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box sx={{
          mb: 2,
          maxHeight: 260,
          overflowY: 'auto',
          width: '100%',
          px: 1,
        }}>
          {messages.map((msg, i) => (
            <Fade in key={i} timeout={400}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: msg.from === 'bot' ? 'flex-start' : 'flex-end',
                  mb: 1.5,
                }}
              >
                <Box
                  sx={{
                    maxWidth: '80%',
                    px: 2,
                    py: 1.2,
                    borderRadius: 3,
                    background: msg.from === 'bot'
                      ? 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)'
                      : 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)',
                    color: 'white',
                    fontWeight: 500,
                    fontSize: 16,
                    boxShadow: '0 2px 8px 0 rgba(34,139,34,0.10)',
                    fontFamily: 'Poppins',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.text}
                </Box>
              </Box>
            </Fade>
          ))}
          <div ref={chatEndRef} />
        </Box>
        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Enter symptoms..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
            sx={{
              background: '#f4f6f8',
              borderRadius: 2,
              fontFamily: 'Poppins',
            }}
            InputProps={{ style: { borderRadius: 12 } }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
              background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
              color: 'white',
              fontWeight: 600,
              borderRadius: 3,
              px: 3,
              fontSize: 18,
              boxShadow: '0 4px 16px 0 rgba(34,139,34,0.10)',
              transition: 'all 0.2s',
              '&:hover': { background: 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)' },
            }}
            endIcon={<SendIcon />}
            onClick={sendMessage}
            disabled={loading}
          >
            Send
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Chatbot;
