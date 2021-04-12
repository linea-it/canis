import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

function Ementa() {
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Ementa';

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
              Ementa
            </Typography>
            <br />
            <Typography variant="body1" align="justify" color="primary">
              O primeiro módulo do minicurso organizado proporcionado pelo LineA
              vai mostrar o funcionamento das principais ferramentas do LIneA
              Science Server (desportal2.cosmology.illinois.edu), uma plataforma
              criada para que o usuário visualize as imagens coadicionadas e
              tenha acesso aos catálogos obtidos depois de seis anos de
              observaçao pelo das releases públicas do Dark Energy Survey (DES).
            </Typography>
            <br />
            <Typography variant="body1" align="justify" color="primary">
              O minicurso vai ser dividido em duas aulas. Na primeira aula, onde
              em um primeiro momento será feita uma breve introduçãoabordado em
              linhas gerais doo levantamento fotométrico conduzindo ao longo de
              seis anos pelo projeto DES cobrindo de 5 mil graus quadrados no
              Hemisfério Sul. Posteriormente será feita uma demonstração do
              funcionamento das principais ferramentas da plataforma: Sky
              Viewer, Target Viewer, Tile Viewer e User Query. Estas são as
              ferramentas onde o usuário público poderá visualizar todaso as
              imagens do levantamento ou apenas uma região selecionada, fazer o
              upload de uma lista de objetos de interesse, analisar pequenas
              regiões do céu e submeter consultas ao banco de dados, além da
              possibilidade de sobrepor objetos disponíveis em outros catálogos
              públicos. As ferramentas estão integradas de forma que é possível
              submeter uma consulta ao banco de dados e posteriormente observar
              os objetos desta lista, por exemplo.
            </Typography>
            <br />
            <Typography variant="body1" align="justify" color="primary">
              Na Em uma segunda aula, o participante irpoderá utilizar as
              ferramentas diretamente,para podendo executar os exercícios
              propostos. Os participantes grande grupo serãoá divididoa em
              pequenos grupos grupos menores onde tutores poderão tirar
              solucionar dúvidas a respeito das ferramentas. Ao final da segunda
              aula, os resultados dos exercícios serão apresentados a todos os
              participantes. o grande grupo.
            </Typography>
            <br />
            <Typography variant="body1" align="justify" color="primary">
              A proposta do minicurso do LineA é vai na direção de estimular a
              exploração científica do acervo de dados dos projetos SDSS e DES
              atualmente mantidos pelo LIneA e futuramente do Legacy Survey of
              Space and Time (LSST).eaumentar o público que utiliza a
              plataforma, que possui um grande número de ferramentas avançadas
              muito úteis para a comunidade científica.
            </Typography>
            <br />
            <Typography variant="body1" align="justify" color="primary">
              O Science Server vem sendo utilizado e aperfeiçoado ao longo dos
              anos pela colaboração internaciona DESl, servindo de apoio para
              validação das imagens coadicionadas a partir das imagens de
              exposição única e também dos códigos para a extração das fontes a
              partir destas imagens. Assim, o LineA quer compartilhar esta
              plataforma científica avançada com a comunidade brasileira,
              servindo de apoio à pesquisa baseada Astronomia dos nos grandes
              levantamentos astronômicos.
            </Typography>
            <br />
            <Typography variant="body1" align="justify" color="primary">
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

export default Ementa;
