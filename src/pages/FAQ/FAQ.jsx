import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


import { accordians } from "./accordianData";

const FAQ = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const {
    outerBox,
    leftSide,
    accordionContainer,
    viewButton,
    buttonTypo,
    accordion,
    accordionSummary,
    innerBox,
  } = useMemo(
    () => ({
      outerBox: {
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        padding: "64px 100px",
        gap: "64px",
        width: "100%",
        height: "auto",
        [theme.breakpoints.down(800)]: {
          gap: theme.spacing(11),
          padding: theme.spacing(0),
        },
      },
      innerBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        [theme.breakpoints.down(1250)]: {
          height: "auto",
          gap: "43px",
          flexDirection: "column",
        },
      },
      leftSide: {
        width: "100%",
        height: "570px",
        gap: "43px",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        [theme.breakpoints.down(1250)]: {
          maxWidth: "500px",
          height: "525px",
        },
      },
      accordionContainer: {
        width: "100%",
        height: "479px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        [theme.breakpoints.down(1250)]: {
          height: "434px",
        },
      },
      viewButton: {
        width: "137px",
        height: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 22px",
        borderRadius: "4px",
        border: `1.5px solid ${theme.palette.primary.main}`,
        [theme.breakpoints.down(1250)]: {
          width: "137px",
          height: "48px",
        },
      },
      buttonTypo: {
        width: "104px",
        height: "24px",
        fontSize: "16px",
        fontWeight: "500",
        [theme.breakpoints.down(1250)]: {
          width: "102px",
        },
      },
      accordion: {
        width: "100%",
        gap: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        backgroundColor: `${theme.palette.background.default}`,
        border: "none !important",
        boxShadow: "none !important",
        [theme.breakpoints.down(1250)]: {
        },
      },
      accordionSummary: {
        width: "100%",
        fontSize: "24px",
        // height: "74px",
        display: "flex",
        padding: "0px 16px",
        [theme.breakpoints.down(1250)]: {
          height: "65px",
          padding: 0,
        },
      },
    }),
    [theme]
  );

  const buttonStyle = {
    fontWeight: "600",
  };

  const mobileHeadingTypo = {
    fontSize: "24px",
    fontWeight: "400",
  };


  const sty = {
    ".css-1w17wfq-MuiTypography-root": {
      fontSize: "24px"
    }
  }
  return (
    <>
      <Box sx={outerBox}>
        {isMobile ? (
          <Typography sx={buttonStyle} variant="body2">
            FAQ&apos;s
          </Typography>
        ) : (
          <Typography variant="h4">FAQ&apos;s</Typography>
        )}
        <Box sx={innerBox}>
          <Box sx={leftSide}>
            <Box sx={accordionContainer}>
              {accordians.map((item, index) => (
                <Accordion sx={accordion} key={index}>
                  <AccordionSummary
                    sx={accordionSummary}
                    expandIcon={<ChevronRightIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    {isMobile ? (
                      <Typography sx={mobileHeadingTypo}>
                        {item.title}
                      </Typography>
                    ) : (
                      <Typography sx={sty}>{item.title}</Typography>
                    )}
                  </AccordionSummary>
                  <AccordionDetails sx={sty}>
                    {isMobile ? (
                      <Typography sx={mobileHeadingTypo}>
                        {item.content}
                      </Typography>
                    ) : (
                      <Typography>{item.content}</Typography>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
            <Button sx={viewButton}>
              <Typography sx={buttonTypo}>VIEW MORE</Typography>
            </Button>
          </Box>
          </Box>
      </Box>
    </>
  );
};

export default FAQ;
