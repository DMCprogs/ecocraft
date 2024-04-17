import React, { useState, useEffect, useContext, useRef } from 'react';

import axios from '../apis/admin-rest';

import { useCookies } from 'react-cookie';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  H4Title,
  LabelSC,
  DivBoxSC,
  DivBoxRowsSC,
  DivBoxColumnsSC,
  InputSC,
  DivBoxRowSC,
  InputFullWidthSC,
  ButtonSC,
  DivBoxTextSC,
  SpanQuSC,
  LinkSC,
  DivBoxFormSC,
  DivBoxBoxFormSC,
  DivBackgroundFormSC,
  SpanSC,
  DivRegSC,
  DivBackgroundPeopleSC,
  DivTextBoxSC,
  SpanFirstSC,
  SpanSecondSC,
  DivBoxFormSignInSC,
  DivBoxRowSISC,
  DivTextBoxSISC,
  CheckboxItemInput,
} from '../styled-components-css/styles.registration';
import { ButtonCustomSC } from '../styled-components-css/styles.custom-button';
import { signInSchema } from '../validations/validation.signin';
import { Formik, Form } from 'formik';
import TextField from '../components/TextField';
import { FlowerLoaderSc } from '../styled-components-css/styles.loader';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import useAxiosFunction from '../hooks/useAxiosFunction';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

const SignIn = (props) => {
  const { login, logout, loggedIn, setFormValues, authError } = useAuth();
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const toastId = useRef(null);
  let navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const check = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (response.length === 0) {
      console.log('REPEAT ERROR', error);
      console.log('response', response);

      if (error !== '') {
        if (error && error.message.includes('401')) {
          showToast('error', 'Invalid data');
        } else {
          showToast('error', error);
        }
      }
    } else {
      console.log('>>>>>>>>>', response.token);
      showToast('success', 'You have successfully logged in');
      setCookie('token', response.token);
      console.log('LOGGED IN', loggedIn);

      login();
      navigate('/');
    }
  }, [response, error]);
  {
    console.log('LOGGED IN', loggedIn);
    console.log('respone', response);

  }

  const showToast = (type, text) => {
    if (type === 'error') {
      toast.error(text ? text : error, {
        toastId: 'error',
      });
    } else if (type === 'success') {
      toast.success(text ? text : response, {
        toastId: 'success',
      });
    }
  };

  const startingValues = { email: '', password: '' };

  return (
    <DivRegSC>
      <DivBackgroundFormSC>
        <DivBoxBoxFormSC>
          <DivBoxFormSignInSC>
            <H4Title>Welcome to geoeco!</H4Title>

            <SpanSC>Enter your information to sign in</SpanSC>
            <Formik
              initialValues={startingValues}
              validationSchema={signInSchema}
              initialErrors={startingValues}
              onSubmit={(values) => {
                axiosFetch({
                  axiosInstance: axios,
                  method: 'POST',
                  url: `/api/v1/users/login`,
                  requestConfig: { ...values },
                });
              }}
            >
              {(formik) => (
                <Form>
                  <DivBoxRowsSC>
                    <DivBoxRowSC>
                      {/*<LabelSC htmlFor="email">Email</LabelSC>*/}
                      <TextField
                        label="email"
                        type="email"
                        name="email"
                        fullSize={true}
                        placeholder={'Email'}
                      />
                    </DivBoxRowSC>

                    <DivBoxRowSISC>
                      {/*<LabelSC htmlFor="pass">Password</LabelSC>*/}
                      <TextField
                        label="password"
                        name="password"
                        type="password"
                        fullSize={true}
                        placeholder={'Password'}
                      />
                    </DivBoxRowSISC>
                    <DivTextBoxSISC>
                      <CheckboxItemInput
                        type="checkbox"
                        name="rem"
                        value="rem"
                        checked={checked}
                        onClick={check}
                      />
                       <SpanFirstSC to="#" onClick={check}>Remember me</SpanFirstSC>
                      <SpanSecondSC to="/">Forgot Password?</SpanSecondSC>
                    </DivTextBoxSISC>
                    <DivBoxRowSC>
                      <ButtonCustomSC
                        disabled={!formik.dirty || !formik.isValid}
                        statusOpasity={!formik.dirty || !formik.isValid}
                        width={'100%'}
                        padding={'18px 32px'}
                        type="submit"
                      >
                        {!loading ? (
                          <span>
                            Sign in&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                          </span>
                        ) : (
                          <FlowerLoaderSc />
                        )}
                      </ButtonCustomSC>
                    </DivBoxRowSC>
                    <DivBoxRowSC>
                      <DivBoxTextSC>
                        <SpanQuSC>Don't have an account yet? </SpanQuSC>
                        <LinkSC to="/registration">Sign up</LinkSC>
                      </DivBoxTextSC>
                    </DivBoxRowSC>
                  </DivBoxRowsSC>
                </Form>
              )}
            </Formik>

            {/* <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Данные сохранились успешно
              </Alert>
            </Snackbar>
            <Snackbar
              open={openError}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Alert onClose={handleClose} severity="error">
                {error}
              </Alert>
            </Snackbar> */}
          </DivBoxFormSignInSC>
          <img src="/default-images/signin.svg" className="image4signin" />
        </DivBoxBoxFormSC>
      </DivBackgroundFormSC>
    </DivRegSC>
  );
};

export default SignIn;
