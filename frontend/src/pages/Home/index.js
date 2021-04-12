import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

function Home() {
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Início';

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              color="primary"
            >
              LIneA Minicurso
            </Typography>
            <br />
            <Typography variant="h4" align="center" color="primary">
              Introdução a ferramentas computacionais aplicadas à Astronomia
            </Typography>
            <br />
            <Typography variant="h5" align="center" color="primary">
              O LIneA abre as inscrições para o primeiro módulo do minicurso
              &ldquo;
              <strong>
                Introdução a ferramentas computacionais aplicadas à Astronomia
              </strong>
              &rdquo; a nível de doutorado e pós-doutorado, totalmente gratuito.
            </Typography>
            <br />
            <br />
            <Typography variant="h5" align="center" color="primary">
              Responsável: Dr. Adriano Pieres
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Período de inscrição: xx/04 até xx/05
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Total de vagas: 30
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Duração: 4 horas
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
