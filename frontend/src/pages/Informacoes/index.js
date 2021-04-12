import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './styles';

function Informacoes() {
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Informações Adicionais';

  const classes = styles();
  return (
    <Container>
      <Grid item xs={12} className={classes.grid}>
        <Grid item xs={11} md={7} className={classes.grid}>
          <Typography variant="h5" color="primary" className={classes.title}>
            Rationale:
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.description}
          >
            This course will bring together representatives of some of the more
            important data centers, eScience institutes and IT companies to
            discuss current solutions and new technological trends as data
            volumes from modern experiments such as LSST, Euclid and SKA
            continue to grow. The course will take place remotely April 13-15,
            2021. Inquiries can be sent to{' '}
            <a href="mailto:course2021@linea.gov.br?subject=Course 2021">
              <strong>course2021@linea.gov.br</strong>
            </a>
            .
          </Typography>
          <br />
          <br />
          <Typography variant="h5" color="primary" className={classes.title}>
            Venue:
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.description}
          >
            The course will be entirely remote and there will be no registration
            fee. We ask those interested in participating to register{' '}
            <a href="/registration">
              <strong>here</strong>
            </a>
            . Participants will receive connection information on April 12.
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.description}
          >
            Due to the large number of participants the presentations will be
            broadcasted on youtube. A list of the links will be sent ahead of
            time.
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.description}
          >
            All talks will be recorded and will be available on the course’s
            site and announced on LIneA’s social media the following Monday.
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.description}
          >
            Certificates may be provided for registered participants. Please
            contact the{' '}
            <a href="mailto:course2021@linea.gov.br?subject=Course 2021 - Certificate">
              <strong>LOC</strong>
            </a>{' '}
            if you need one.
          </Typography>
          <br />
          <br />
          <Typography variant="h5" color="primary" className={classes.title}>
            Slack:
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.description}
          >
            We will use Slack to address your questions. To register for the
            course&apos;s workspace, please click{' '}
            <a
              href="https://join.slack.com/t/course2021grupo/shared_invite/zt-odwhahoh-1GkqK04VW7CN5UOqSvcR6w"
              target="blank"
            >
              <strong>here</strong>
            </a>{' '}
            and follow the instructions.
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            color="primary"
            className={classes.description}
          >
            The Slack workspace is organized into six main channels:
            #announcements, #day1, #day2, #day3, #discussions, and #helpdesk. To
            post your questions and doubts regarding the presentations, use the
            corresponding #day_ channel. To suggest topics for the round-table
            session, use the channel #discussions. Inquiries about the event can
            be posted at #helpdesk.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Informacoes;
