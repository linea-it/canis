import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

function Programacao() {
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
            Programação
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            xx/05 | 9h às 11h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 1</strong>: Introdução e apresentação da plataforma e
            suas ferramentas
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Apresentação da plataforma, suas ferramentas e métodos de uso.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            xx/05 | 9h às 11h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 2</strong>: Hands on
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Utilização das ferramentas através de atividades.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Programacao;
