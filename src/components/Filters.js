import React from 'react';
import FilterLinkWrapper from '../containers/FilterLinkWrapper';
import { VISIBILITY_FILTERS } from '../constants';

export default class Filters extends React.Component {
  render() {
    return (
      <div className="filter-list">
        Show: 
        <FilterLinkWrapper filter={VISIBILITY_FILTERS.SHOW_ALL}>
          <span>All</span>
        </FilterLinkWrapper>
        |
        <FilterLinkWrapper filter={VISIBILITY_FILTERS.SHOW_ACTIVE}>
          <span>Active</span>
        </FilterLinkWrapper>
        |
        <FilterLinkWrapper filter={VISIBILITY_FILTERS.SHOW_COMPLETED}>
          <span>Completed</span>
        </FilterLinkWrapper>
      </div>
    );

  }
}