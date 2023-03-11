import React from 'react'

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }
    handleKey = (e)=> {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search , this.state.type)
        }
    }
    handleFilter = (e) => {
        this.setState( () => ({type: e.target.dataset.type}) , ()=> {
            this.props.searchMovies(this.state.search , this.state.type)
        })

    }
    render( ) {
        return <div className="row">
        <div className="col s12">
          <div className="input-field ">
            <input placeholder='search'
                type='search'
                id="email_inline"
                className="validate"
                value={this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                onKeyDown={this.handleKey}/>
            <button className='btn teal search-btn' onClick={() =>this.props.searchMovies(this.state.search , this.state.type) }>Search</button>
          </div>
        </div>
        <div className=''>
            <label>
                <input className="with-gap" name="type" type="radio" checked={this.state.type === 'all'} data-type='all' onChange={this.handleFilter}/>
                <span>All</span>
            </label>
            <label>
                <input className="with-gap" name="type" type="radio" checked={this.state.type === 'movie'} data-type='movie' onChange={this.handleFilter}/>
                <span>Movies only</span>
            </label>
            <label>
                <input className="with-gap" name="type" type="radio" checked={this.state.type === 'series'}  data-type='series' onChange={this.handleFilter}/>
                <span>Series only</span>
            </label>
        </div>
      </div>
    }
}
export {Search}
