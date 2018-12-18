import * as React from 'react';
import Rules from './Rules';
import './rules-page.scss';

export default class RulesPage extends React.Component {
  timeout = null;
  searchInput = React.createRef();

  state = {
    search: ''
  };

  onChange = () => {
    clearTimeout(this.timeout);

    const newValue = this.searchInput.current.value;

    if (newValue.length > 1) {
      this.timeout = setTimeout(() => {this.setState({ search: newValue })}, 300);
    } else {
      this.setState({search: ''});
    }
  }

  componentDidMount() {
    this.searchInput.current.focus();
  }

  clearSearch = () => {
    clearTimeout(this.timeout);

    this.searchInput.current.value = '';
    this.setState({ search: '' });

    this.searchInput.current.focus();
  }

  render() {
    const isSearching = this.searchInput.current && this.searchInput.current.value.length > 0;
    const buttonClass = isSearching ? 'btn-secondary' : 'btn-outline-secondary';

    return (
      <div>
        <div className='row RulesPageNav'>
          <div className="input-group mb-3">
            <input autoFocus={true} type='search' className='form-control RulesPageNav__search' placeholder='Smart Search (section titles and rule numbers)' onChange={this.onChange} ref={this.searchInput} />
            <div className="input-group-append">
              <button className={'btn ' + buttonClass} type="button" onClick={this.clearSearch}>Clear</button>
            </div>
          </div>
          
        </div>
        <div className='RulesPage'>
          <h2>Living Rules</h2>
          <Rules search={this.state.search} />
        </div>
      </div>
    );
  }
}