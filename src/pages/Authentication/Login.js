import PropTypes from 'prop-types'
import React, { useEffect } from "react"

import { Row, Col, Alert, Container } from "reactstrap"
import { api, url, str } from 'common/imports'

// Redux
import { connect, useDispatch } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// actions
import { loginUser2, apiError, socialLogin  ,tst} from "../../store/actions"

// import images
import logo from "../../assets/images/logo-sm-dark.png"

import { useSelector } from 'react-redux'

const Login = (props) => {
  const  dispatch = useDispatch()
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  // handleValidSubmit
  const handleValidSubmit = (event, user) => {
    dispatch({ type: 'LOGIN_USER' ,payload: { user :user , history:  props.history }});
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">{str.PUBLIC.WELCOME}</h5>
                    <p className="text-white-50 mb-0">{str.AUT.SIGN_IN_TO_CONTINUE}</p>
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="userName"
                          label={str.AUT.USER_NAME}
                          value="salar"
                          className="form-control"
                          placeholder="Enter email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label={str.AUT.PASS}
                          value="123"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          {str.AUT.REMEMBER_ME}
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          {str.AUT.LOG_IN}
                        </button>
                      </div>

                    </AvForm>

                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>نمیتوانید وارد سیستم شوید ؟ <Link to="/register"
                  className="fw-medium text-primary"> با واحد it تماس بگیرید </Link> </p>
                <p>طراح و برنامه نویس :  سالار طارمی
                        </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

// const mapStateToProps = state => {
//   const { error } = state.Login
//   return { error }
// }

// export default withRouter(
//   connect(mapStateToProps, { loginUser2, apiError, socialLogin,tst })(Login)
// )
export default Login

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser2: PropTypes.func,
  socialLogin: PropTypes.func
}