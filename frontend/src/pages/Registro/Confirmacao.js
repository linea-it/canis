import React from 'react';
import { Grid, Container, Typography, Link } from '@material-ui/core';

import styles from './styles';

function Confirmacao() {
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Registro - Sucesso';

  const classes = styles();

  return (
    <Container>
      <Grid item xs={12}>
        <div className={classes.registrationSuccess}>
          <Typography
            variant="h2"
            color="success"
            gutterBottom
            className={classes.success}
          >
            Sucesso!
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            paragraph
            className={classes.success}
          >
            Obrigado por manifestar seu interesse no módulo I - LIneA Science
            Server.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            paragraph
            className={classes.success}
          >
            Assim que a próxima edição estiver disponível, entraremos em
            contato!
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            paragraph
            className={classes.success}
          >
            Contato: <a href="mailto:cde@linea.gov.br">cde@linea.gov.br</a>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {' '}
            <Link color="inherit" className={classes.returnPage} href="/">
              Voltar para o início
            </Link>
          </Typography>
        </div>
      </Grid>
    </Container>
  );
}

export default Confirmacao;
