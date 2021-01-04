import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./accordion.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CategoryAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="AccordionDivision">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Electronics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul class="listCategoriesHeroSection">
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Desktop</a>
            </li>
            <li>
              <a href="#">Laptop</a>
            </li>
            <li>
              <a href="#">Power Bank</a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccordionDivision">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Fashion & Beauty</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul class="listCategoriesHeroSection">
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Desktop</a>
            </li>
            <li>
              <a href="#">Laptop</a>
            </li>
            <li>
              <a href="#">Power Bank</a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccordionDivision">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accessories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul class="listCategoriesHeroSection">
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Desktop</a>
            </li>
            <li>
              <a href="#">Laptop</a>
            </li>
            <li>
              <a href="#">Power Bank</a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="AccordionDivision">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul class="listCategoriesHeroSection">
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Desktop</a>
            </li>
            <li>
              <a href="#">Laptop</a>
            </li>
            <li>
              <a href="#">Power Bank</a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
