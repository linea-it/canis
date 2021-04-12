/* eslint-disable no-nested-ternary */
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import EmailIcon from '@material-ui/icons/Email';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles';
import { postSubscription } from '../../services/api';

function Registro() {
  // Change dynamically the page title:
  document.title = 'LIneA Course | Registro';

  const classes = styles();

  const history = useHistory();
  const formRef = useRef();
  const recaptchaRef = useRef();

  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const [openFormFeedback, setOpenFormFeedback] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [submitEnabled, setSubmitEnabled] = useState(!recaptchaKey);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setOpenFormFeedback(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage({});
    setIsLoading(true);

    if (submitEnabled) {
      const name = formRef.current.name.value;
      const email = formRef.current.email.value;
      const institute = formRef.current.institute.value;
      const newsletter = formRef.current.newsletter.checked;

      postSubscription({ name, email, institute, newsletter })
        .then(() => {
          setOpenFormFeedback(true);
          // Reseting form:
          formRef.current.reset();

          // Forcing the reCAPTCHA to reset:
          recaptchaRef.current.reset();

          // Forcing the Newsletter checkbox to reset:
          formRef.current.newsletter.checked = false;

          setIsLoading(false);
          history.push('/registro/participantes/');
        })
        .catch((error) => {
          setErrorMessage(error.response.data);
        });
    }
  };

  const onRecaptchaChange = (humanKey) => {
    if (humanKey) {
      setSubmitEnabled(true);
    }
  };

  return (
    <div>
      <Container align="center">
        <Grid item xs={12}>
          <Grid item xs={11} md={6} className={classes.grid}>
            <Typography variant="h3" align="center" color="primary">
              Registro
            </Typography>
            <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
              <div className={classes.textFields}>
                <TextField
                  required
                  id="full_name"
                  type="text"
                  variant="outlined"
                  label="Nome Completo"
                  name="full_name"
                  placeholder="Nome Completo"
                  fullWidth
                  size="small"
                  error={'full_name' in errorMessage}
                  helperText={
                    'full_name' in errorMessage ? errorMessage.full_name[0] : ''
                  }
                />
              </div>

              <div className={classes.textFields}>
                <TextField
                  required
                  id="email"
                  type="email"
                  variant="outlined"
                  label="E-mail"
                  name="email"
                  fullWidth
                  size="small"
                  error={'email' in errorMessage}
                  helperText={
                    'email' in errorMessage ? errorMessage.email[0] : ''
                  }
                />
              </div>

              <div className={classes.textFields}>
                <TextField
                  required
                  id="institute"
                  type="text"
                  variant="outlined"
                  label="Instituição"
                  name="institute"
                  fullWidth
                  size="small"
                  error={'institute' in errorMessage}
                  helperText={
                    'institute' in errorMessage ? errorMessage.institute[0] : ''
                  }
                />
              </div>

              <div className={classes.textFields}>
                <TextField
                  required
                  id="occupation_area"
                  type="text"
                  variant="outlined"
                  label="Area de Atuação"
                  name="occupation_area"
                  fullWidth
                  size="small"
                  error={'occupation_area' in errorMessage}
                  helperText={
                    'occupation_area' in errorMessage
                      ? errorMessage.occupation_area[0]
                      : ''
                  }
                />
              </div>

              <FormControlLabel
                label="Gostaria de certificado?"
                labelPlacement="start"
                className={classes.checkboxLabel}
                control={<Checkbox name="newsletter" />}
              />

              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="flex-start"
              >
                <Grid item xs={12} md={10}>
                  {recaptchaKey ? (
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptchaKey}
                      onChange={onRecaptchaChange}
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disableElevation
                    disabled={!submitEnabled}
                  >
                    {isLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <EmailIcon fontSize="small" />
                    )}
                    &nbsp;Submit
                  </Button>
                </Grid>
                <br />
              </Grid>
            </form>
            <Grid item xs={12}>
              <br />
              <Typography variant="button" color="error">
                * required fields
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openFormFeedback}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          <Typography variant="body1">
            Registered with success! Check your e-mail for a confirmation
            message.
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Registro;
