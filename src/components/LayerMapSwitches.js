import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  colorSwitchBase: {
    color: purple[300],
    '&$colorChecked': {
      color: purple[500],
      '& + $colorBar': {
        backgroundColor: purple[500],
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#52d869',
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none',
    },
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  iOSIcon: {
    width: 24,
    height: 24,
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
  },
});

/**
 * The control of the map layers.
 */
class LayerMapSwitches extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
          <FormControlLabel
            control={
              <Switch
                checked={this.props.ambassadors}
                onChange={this.props.onChange('ambassadorLayer')}
                value="ambassadors"
                classes={{
                  switchBase: classes.iOSSwitchBase,
                  bar: classes.iOSBar,
                  icon: classes.iOSIcon,
                  iconChecked: classes.iOSIconChecked,
                  checked: classes.iOSChecked,
                }}
              />
            }
            label="Ambassadors"
          />
          <FormControlLabel
            control={
              <Switch
                classes={{
                  switchBase: classes.iOSSwitchBase,
                  bar: classes.iOSBar,
                  icon: classes.iOSIcon,
                  iconChecked: classes.iOSIconChecked,
                  checked: classes.iOSChecked,
                }}
                disableRipple
                checked={this.props.merchants}
                onChange={this.props.onChange('merchantLayer')}
                value="merchants"
              />
            }
            label="Merchants"
          />
        </div>
      </FormGroup>
    );
  }
}

LayerMapSwitches.propTypes = {
  classes: PropTypes.object.isRequired,
  ambassadors: PropTypes.bool,
  merchants: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

LayerMapSwitches.defaultProps = {
  ambassadors: true,
  merchants: true
};

export default withStyles(styles)(LayerMapSwitches);
