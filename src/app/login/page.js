'use client'
import CustomField from "@/components/CustomField";
import { postLogin } from "@/service/backFluxi";
import { Box, CircularProgress } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export default function Login() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    postLogin({ "username": user, "password": password })
      .then(({ data }) => {
        localStorage.setItem("user_id", data.data[0]._id)
        window.location.href = '/home';
      })
      .catch((error) => { console.error("Error al obtener los datos:", error) })
      .finally(() => { setLoading(false) })
  }

  return (
    <Box sx={{ backgroundColor: "#4445b1", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box
        sx={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 4,
          color: "#ffffff",
          fontSize: "20px"
        }}
      >
        <Typography
          width={"100%"}
          variant="h4"
          textAlign={"start"}>
          Ventas como por
        </Typography>
        <Typography
          width={"100%"}
          variant="h4"
          textAlign={"end"}>
          arte de mag <b style={{ color: "#8a9efd", marginLeft:'-10px' }}>IA</b>
        </Typography>
      </Box>

      <Box
        backgroundColor="#6060e9"
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 300,
          textAlign: "center",
          borderRadius: 2,
          border: "1px solid #8d9bff",
        }}
      >
        <Typography color="#fffffd" variant="h4" component="h1" gutterBottom>
          Fluxi
        </Typography>
        <Typography color="#fffffd" variant="h6" component="h2" gutterBottom>
          Empezamos ahora
        </Typography>
        <Typography color="#fffffd" variant="body1" gutterBottom>
          Inicie sesión
        </Typography>
        <CustomField text="Usuario" user={user} setUser={setUser} />
        <CustomField text="Contraseña" user={password} setUser={setPassword} />
        <Button
          onClick={handleLogin}
          variant="contained"
          sx={{
            width: "80%",
            backgroundColor: "#90abff",
            color: "#fffffd",
            marginTop: 2,
            boxShadow: "0 4px 6px rgba(144, 171, 255, 0.5), 0 1px 10px rgba(144, 171, 255, 0.3)",
            '&:hover': {
              boxShadow: "0 4px 10px rgba(144, 171, 255, 0.7), 0 1px 20px rgba(144, 171, 255, 0.4)",
            },
          }}
        >
          {!loading ? "Iniciar sesión" : <CircularProgress size={24} />}
        </Button>

      </Box>
    </Box >
  );
}
