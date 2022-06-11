import { Checkbox, FormControlLabel } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
    root: {
      '&$checked': {
        color: '#000',
      },
    },
    checked: {},
    wrap: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 0,
    },
    label: {
      fontSize: '.8rem',
      fontFamily: `'Raleway', sans-serif`,
    },
  });

function CheckboxProton({cuisine,changeChecked}) {
    const classes = useStyles()
    const {checked,lable,id} = cuisine
   
  return (
    <div>
        <FormControlLabel
        classes={{
            label:classes.label,
            root:classes.wrap
        }}
        control = {
            <Checkbox classes ={{
                checked: classes.checked,
                root:classes.root
            }}
            size = "small"
            checked={checked}
            onChange={()=>changeChecked(id)}
            />
        }
        label={lable}
        />
    </div>
  )
}

export default CheckboxProton