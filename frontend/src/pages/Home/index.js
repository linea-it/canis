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
              Minicurso
            </Typography>
            <Typography variant="h6" align="center" color="primary">
              (Edição Piloto)
            </Typography>

            <br />
            <Grid item xs={12}>
              <Typography variant="h5" align="center" color="secondary">
                Nova edição dos minicursos LIneA
                <br />
                <a
                  href="https://minicurso-ed2.linea.gov.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  minicurso-ed2.linea.gov.br
                </a>
              </Typography>
            </Grid>

            <br />
            <Typography variant="h4" align="center" color="primary">
              <strong>
                Introdução a ferramentas computacionais aplicadas à e-Astronomia
              </strong>
            </Typography>
            <br />
            <br />
            <Typography variant="h5" align="center" color="primary">
              Módulo I - LIneA Science Server
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Público alvo: estudantes de Pós-Graduação e Pós-Doutorandos
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Responsável: Dr. Adriano Pieres
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Inscrição: até 30/04/21
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Curso gratuito e online
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Total de vagas: 15
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
