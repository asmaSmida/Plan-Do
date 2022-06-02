import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import MovingText from 'react-moving-text';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  colorText: {
    color: '#00A8A8',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#E7E7E0',
    fontSize: '4.5rem',
  },
  title1: {
    color: '#E7E7E0',
    fontSize: '5rem',
  },
  goDown: {
    color: '#00A8A8',
    fontSize: '4rem',
  },
  texting: {
    display: 'flex'
  }
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">

      <Collapse
        in={checked}
        {...(checked ? { timeout: 300 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            <p className={classes.title1}> Plan & Do </p>
            <div className={classes.texting}>
              <MovingText
                type="typewriter" 
                timing="easy"
                dataText={[
                  'Plan it',
                  'Do it',
                ]} />  &nbsp;the &nbsp;right &nbsp;<span className={classes.colorText}>Way.</span></div>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
