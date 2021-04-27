import React, {
  // useRef,
  useState,
} from 'react';
import {
  Grid,
  Container,
  Typography,
  // TextField,
  // Button,
  Snackbar,
  // FormControlLabel,
  // Checkbox,
  // CircularProgress,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
// import EmailIcon from '@material-ui/icons/Email';
// import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles';
// import { postSubscription } from '../../services/api';

function Registro() {
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Registro';

  const classes = styles();
  // const formRef = useRef();
  // const recaptchaRef = useRef();

  // const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const [openFormFeedback, setOpenFormFeedback] = useState(false);
  // const [errorMessage, setErrorMessage] = useState({});
  // const [submitEnabled, setSubmitEnabled] = useState(!recaptchaKey);
  // const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setOpenFormFeedback(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setErrorMessage({});
  //   setIsLoading(true);

  //   if (submitEnabled) {
  //     const name = formRef.current.name.value;
  //     const email = formRef.current.email.value;
  //     const institute = formRef.current.institute.value;
  //     const education = formRef.current.education.value;
  //     const position = formRef.current.position.value;
  //     const occupation = formRef.current.occupation.value;
  //     const certificate = formRef.current.certificate.checked;

  //     postSubscription({
  //       name,
  //       email,
  //       institute,
  //       education,
  //       position,
  //       occupation,
  //       certificate,
  //     })
  //       .then(() => {
  //         setOpenFormFeedback(true);
  //         // Reseting form:
  //         formRef.current.reset();

  //         // Forcing the reCAPTCHA to reset:
  //         recaptchaRef.current.reset();

  //         // Forcing the Newsletter checkbox to reset:
  //         formRef.current.certificate.checked = false;

  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error.response.data);
  //       });
  //   }
  // };

  // const onRecaptchaChange = (humanKey) => {
  //   if (humanKey) {
  //     setSubmitEnabled(true);
  //   }
  // };

  return (
    <div>
      <Container align="center">
        <Grid item xs={12}>
          <Grid item xs={11} md={6} className={classes.grid}>
            <Typography variant="h3" align="center" color="primary">
              Registro
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              color="error"
              gutterBottom
            >
              (As 15 vagas já foram preenchidas. Acompanhe nossas redes sociais
              para participar das próximas edições)
            </Typography>

            <br />
            {/* <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
              <div className={classes.textFields}>
                <TextField
                  required
                  id="name"
                  type="text"
                  variant="outlined"
                  label="Nome completo"
                  name="name"
                  fullWidth
                  size="small"
                  error={'name' in errorMessage}
                  helperText={
                    'name' in errorMessage ? errorMessage.name[0] : ''
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
                  id="education"
                  type="text"
                  variant="outlined"
                  label="Formação"
                  placeholder="2º Ano do Doutorado"
                  name="education"
                  fullWidth
                  size="small"
                  error={'education' in errorMessage}
                  helperText={
                    'education' in errorMessage ? errorMessage.education[0] : ''
                  }
                />
              </div>

              <div className={classes.textFields}>
                <TextField
                  required
                  id="position"
                  type="text"
                  variant="outlined"
                  label="Posição atual"
                  placeholder="Mestrando"
                  name="position"
                  fullWidth
                  size="small"
                  error={'position' in errorMessage}
                  helperText={
                    'position' in errorMessage ? errorMessage.position[0] : ''
                  }
                />
              </div>

              <div className={classes.textFields}>
                <TextField
                  required
                  id="occupation"
                  type="text"
                  variant="outlined"
                  label="Área de atuação"
                  name="occupation"
                  fullWidth
                  size="small"
                  error={'occupation' in errorMessage}
                  helperText={
                    'occupation' in errorMessage
                      ? errorMessage.occupation[0]
                      : ''
                  }
                />
              </div>

              <FormControlLabel
                label="Gostaria de certificado?"
                labelPlacement="start"
                className={classes.checkboxLabel}
                control={<Checkbox name="certificate" />}
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
                    &nbsp;Registrar
                  </Button>
                </Grid>
                <br />
              </Grid>
            </form>
            <Grid item xs={12}>
              <br />
              <Typography variant="button" color="error">
                * campos obrigatórios
              </Typography>
            </Grid> */}
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
          <AlertTitle>Sucesso</AlertTitle>
          <Typography variant="body1">Registrado com sucesso!</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Registro;
