import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  Search
} from '@material-ui/icons';

/**
 * This object is used for type checking the props of the component.
 */
const propTypes = {
	query: PropTypes.string.isRequired,
	columns: PropTypes.array.isRequired,
	onUpdateQuery: PropTypes.func.isRequired,
  onColumnChange: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 280,
  },
});

/**
 * @description	The Search page component of the table.
 * @constructor
 * @param {Object} props - The props that were defined by the caller of this component.
 */
class EnhancedSearch extends Component {

	render() {
		const {query, onUpdateQuery, onColumnChange} = this.props;
		const { classes } = this.props;

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<div className="search-books-input-wrapper" style={{ textAlign: 'left', marginLeft: 20}}>
						<TextField
							style={{ textAlign: 'left', width: 350}}
							id="outlined-adornment-weight"
							className={classNames(classes.margin, classes.textField)}
		          variant="outlined"
		          label="Search"
              placeholder="Enter search term"
		          value={query}
		          onChange={(event) => onUpdateQuery(event.target.value)}
		          InputProps={{
		            startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
		          }}
		        />
						<br />
            {this.props.showSearchColumns && this.props.columns.map(column => (
              <FormControlLabel
                key={column.name}
                control={
                  <Checkbox
                    checked={column.checked}
                    onChange={onColumnChange(column.name)}
                    color="primary"
                  />
                }
                label={column.name}
              />
            ))}
					</div>
				</div>
			</div>
		);
	};
}

// Type checking the props of the component
EnhancedSearch.propTypes = propTypes;

export default withStyles(styles)(EnhancedSearch);
