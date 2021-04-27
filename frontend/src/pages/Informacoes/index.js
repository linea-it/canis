import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';

function Informacoes() {
  const classes = useStyles();
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Informações Adicionais';

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
              gutterBottom
            >
              Informações Adicionais
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Com a recente liberação dos dados do <em>Dark Energy Survey</em>{' '}
              (DES DR2) e a entrada de novos projetos, como o{' '}
              <em>Large Synoptic Survey Telescope</em> (LSST), fica evidente a
              importância de aumentar o engajamento da comunidade no trabalho
              que vem sendo desenvolvido pelo LIneA com apoio do INCT do
              e-Universo na área de e-Astronomia. Sendo assim, nossa equipe vem
              planejando e desenvolvendo o minicurso básico &ldquo;
              <strong>
                Introdução a ferramentas computacionais aplicadas à e-Astronomia
              </strong>
              &rdquo;. O objetivo principal é preparar a comunidade para as
              novas ferramentas e serviços que em breve serão disponibilizadas
              pelo LIneA em preparação para a era do{' '}
              <a href="https://www.lsst.org" target="_blank" rel="noreferrer">
                LSST
              </a>
              .
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Nesse contexto apresentamos o módulo I:{' '}
              <em>LIneA Science Server</em>!
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              A abordagem de apresentação deste módulo visa demonstrar as
              ferramentas que estão disponíveis na plataforma do{' '}
              <em>LIneA Science Server</em> (<a href="/programa">programa</a>) e
              seu uso através de atividades a serem realizadas pelos
              participantes.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              O Dr. Adriano Pieres é responsável pela aplicação do módulo que
              está estruturado para ser apresentado em duas aulas, uma por
              semana, <a href="/horario">com carga horária total de 4 horas</a>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Nesta edição piloto, o público alvo destinado para o minicurso são
              para estudantes de pós-graduação e para pós-doutorandos, com um
              número limitado <strong>15 vagas</strong>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              O período para inscrição se encontra encerrado. Manifeste seu
              interesse em uma próxima edição <a href="/registro/">aqui</a>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              O minicurso é <strong>gratuito</strong> e <strong>online</strong>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Serão emitidos certificados àqueles que solicitaram no momento da{' '}
              <a href="/registro">inscrição</a>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Ao finalizar o módulo um questionário será aplicado a fim de
              termos um feedback dos participantes. Pretendemos com isso cada
              vez mais melhorar nossas práticas educacionais e de engajamento
              com a comunidade.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Contato: <a href="mailto:cde@linea.gov.br">cde@linea.gov.br</a>
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Informacoes;
