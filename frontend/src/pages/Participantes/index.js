import React from 'react';
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
} from '@material-ui/core';
import useStyles from './styles';

function Participantes() {
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Participantes';

  const classes = useStyles();

  const rows = [
    {
      name: 'Carlos Andrés Galarza',
      institute: 'Observatório Nacional',
    },
    {
      name: 'Carolina Queiroz',
      institute:
        'Departamento de Astronomia – Universidade Federal do Rio Grande do Sul',
    },
    {
      name: 'Everaldo Faustino',
      institute: 'Universidade de Pernambuco',
    },
    {
      name: 'Fredi Quispe',
      institute: 'Observatório Nacional',
    },
    {
      name: 'Gustavo Rossi',
      institute: 'Universidade Estadual Paulista',
    },
    {
      name: 'Icaro Ramos',
      institute: 'Cruzeiro do Sul',
    },
    {
      name: 'Katia Clerici',
      institute: 'Universidade Federal de Santa Catarina',
    },
    {
      name: 'Michele Coêlho',
      institute: 'Brasil Telecom',
    },
    {
      name: 'Vitor Bootz',
      institute: 'Universidade Federal do Rio Grande do Sul',
    },
    {
      name: 'Vitor Hugo Fugivala',
      institute:
        'Instituto de Astronomia, Geofísica e Ciências Atmosféricas – Universidade de São Paulo',
    },
    {
      name: 'Renan Alves de Oliveira',
      institute: 'Universidade Federal do Espírito Santo',
    },
  ];

  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <TableContainer component={Paper} style={{ marginTop: 20 }}>
            <Table>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell className={classes.tableHeaderCell}>
                    Nome
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell} align="right">
                    Instituição
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.institute}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Participantes;
