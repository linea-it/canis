import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './styles';

function Programa() {
  const classes = styles();
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Programa';

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
              Programa
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              O primeiro módulo do minicurso organizado pelo LineA vai mostrar
              as funcionalidades do{' '}
              <a
                href="scienceserver.linea.gov.br"
                target="_blank"
                rel="noreferrer"
              >
                LIneA Science Server
              </a>
              , na plataforma criada para que o usuário visualize as imagens s e
              tenha acesso aos catálogos obtidos depois de seis anos de
              observação pelo Dark Energy Survey (DES) que fazem parte do
              release público DR2.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              O minicurso vai ser dividido em duas aulas. Na primeira aula, será
              feita uma breve introdução do levantamento fotométrico conduzido
              ao longo de seis anos pelo projeto DES cobrindo de 5 mil graus
              quadrados no Hemisfério Sul em 5 bands (grizY). Posteriormente
              será feita uma demonstração do funcionamento das principais
              ferramentas da plataforma: Sky Viewer, Target Viewer, Tile Viewer
              e User Query. Estas são as ferramentas onde o usuário poderá
              visualizar todas as imagens do levantamento ou apenas uma região
              selecionada, sobrepor o catálogo extraído a partir destas imagens,
              fazer o upload de uma lista de objetos de interesse, analisar
              pequenas regiões do céu e submeter consultas ao banco de dados,
              além da possibilidade de sobrepor objetos disponíveis em outros
              catálogos públicos. As ferramentas estão integradas de forma que é
              possível submeter uma consulta ao banco de dados e posteriormente
              observar os objetos desta lista, por exemplo.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              Na segunda aula, o participante irá utilizar as ferramentas
              disponíveis para realizar os exercícios propostos. A turma será
              dividida em grupos menores onde tutores poderão tirar dúvidas a
              respeito das ferramentas. Ao final da segunda aula, os resultados
              dos exercícios serão apresentados a todos os participantes.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              A proposta do minicurso do LineA é estimular a exploração
              científica do acervo de dados dos projetos SDSS e DES atualmente
              mantidos pelo LIneA e futuramente do Legacy Survey of Space and
              Time (LSST).
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Programa;
