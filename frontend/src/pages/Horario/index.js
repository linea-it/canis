import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

function Horario() {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="primary"
            gutterBottom
          >
            Horário
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            04/05/21 | 9h às 11h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 1</strong>: Introdução e apresentação da plataforma,
            suas ferramentas e métodos de uso.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            11/05/21 | 9h às 11h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 2</strong>: Hands on - utilização das ferramentas
            através de atividades.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Horario;
