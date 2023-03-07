import React from "react";
import "./InfoPages.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Text,
  Grid,
  GridItem,
  Checkbox,
  Spinner,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { addVoter, loginVoter } from "../API/Voter";
import Instructions from "../assets/Instructions_e-voting.pdf";
import { downloadFile } from "../utils";

export default function Info1() {
  const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabled] = useState(true);
  const [downloaded, setDownloaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChangeCheckbox = () => {
    if (checked) {
      setChecked(false);
      setDisabled(true);
    } else if (!checked && !downloaded) {
      setChecked(true);
      setDisabled(true);
    } else if (!checked && downloaded) {
      setChecked(true);
      setDisabled(false);
    }
  };

  const downloadInstructions = () => {
    downloadFile(Instructions, "General-Election-2023.pdf");
    setDownloaded(true);
    if (checked) {
      setDisabled(false);
    }
  };

  const validateProlificID = (value) => {
    document.querySelector("#submission-error").style.visibility = "hidden";
    let error;
    if (!value) {
      error = "This field is required";
    } else if (value.length !== 24) {
      error = "Your Prolific ID should be 24 characters long";
    }
    return error;
  };

  const submitForm = async (value) => {
    setIsSubmitting(true);
    document
      .querySelector("#submit-pid")
      .setAttribute("disabled", isSubmitting);
    addVoter(value.pid).then(
      (resolveSignUp) => {
        navigate("/voting");
      },
      (rejectSignUp) => {
        loginVoter(value.pid).then(
          (resolveLogIn) => {
            navigate("/voting");
          },
          (rejectLogIn) => {
            setIsSubmitting(false);
            document.querySelector("#submit-pid").removeAttribute("disabled");
            document.querySelector("#submission-error").style.visibility =
              "visible";
            console.log(`Could not save neww user: ${rejectLogIn}`);
          }
        );
      }
    );
  };

  return (
    <div className="container-info-pages">
      <Box className="inner-box-info padding-top-info-page">
        <Box>
          <div className="space-between">
            <h1 className="h1-info-pages">Before you start</h1>
          </div>
          <Formik initialValues={{ pid: "" }} onSubmit={submitForm}>
            {({ errors, touched }) => (
              <Form>
                <Grid className="info1-steps-grid">
                  <GridItem className="info1-steps-numbers">
                    <Text>1</Text>
                  </GridItem>
                  <GridItem className="info1-steps-griditem">
                    All candidates are fictional and for the purpose of this
                    study we ask you to vote for{" "}
                    <span className="bold-text red-text">Sarah Wilson.</span>
                    <Checkbox
                      className="check-box check-box-red"
                      isChecked={checked}
                      onChange={handleChangeCheckbox}
                    >
                      I understand and will vote for the candiate Sarah Wilson.
                    </Checkbox>
                  </GridItem>
                  <GridItem className="info1-steps-numbers">
                    <Text>2</Text>
                  </GridItem>
                  <GridItem className="info1-steps-griditem">
                    <Text className="bold-text">
                      Please download the instructions which you need to follow
                      to complete the General Election 2023.{" "}
                    </Text>
                    <Text className="text-margin-top">
                      In a real election you would get these instructions as a
                      physical or digital letter by the election authorities.
                    </Text>

                    <Button onClick={downloadInstructions} className="red-btn">
                      <span className="material-symbols-outlined medium-icon margin-right-icon">
                        download
                      </span>
                      Download
                    </Button>
                  </GridItem>
                  <GridItem className="info1-steps-numbers">
                    <Text>3</Text>
                  </GridItem>
                  <GridItem className="info1-steps-griditem">
                    <FormControl isInvalid={!!errors.pid && touched.pid}>
                      <FormLabel htmlFor="pid">
                        Please enter your Prolific ID{" "}
                      </FormLabel>
                      <Field
                        as={Input}
                        name="pid"
                        type="text"
                        className="input-prolificID"
                        placeholder="Enter your Prolific ID "
                        _placeholder={{ color: "#E7E7E7" }}
                        validate={validateProlificID}
                      />
                      <FormErrorMessage color={"var(--secondary-darkred)"}>
                        {errors.pid}
                      </FormErrorMessage>
                    </FormControl>
                  </GridItem>
                  <GridItem className="info1-steps-numbers"></GridItem>
                  <GridItem className="info1-steps-griditem">
                    <Text
                      id="submission-error"
                      color={"var(--secondary-darkred)"}
                      visibility={"hidden"}
                    >
                      Something went wrong, please try again later.{" "}
                    </Text>
                    <Button
                      id="submit-pid"
                      type="submit"
                      className="red-btn"
                      disabled={disabledButton}
                    >
                      {isSubmitting && <Spinner size="sm" mr={"1rem"} />} Start
                    </Button>
                  </GridItem>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </div>
  );
}
