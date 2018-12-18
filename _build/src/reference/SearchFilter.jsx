import * as React from 'react';

const searchExpression = (text) => ({
  text: text,
  regex: new RegExp(text, 'gi')
});

const hasMatch = (component, searchExp) => {
  const heading = component.props.title || component.props.subheading;

  return {
    matchedNumber: component.props.number && component.props.number.startsWith(searchExp.text),
    matchedHeading: heading && searchExp.regex.test(heading)
  };
}

const searchChildren = (componentToSearch, searchExp) => {
  if (!componentToSearch.props.children) {
    return {
      matchedChildren: false,
      children: null
    };
  }

  var anyChildMatches = false;

  const newChildren = React.Children.map(componentToSearch.props.children, (child) => {
    const { matched, component } = searchForMatches(child, searchExp);

    anyChildMatches = anyChildMatches || matched;

    return component;
  });

  return {
    matchedChildren: anyChildMatches,
    children: newChildren
  };
}

const searchForMatches = (component, searchExp) => {
  if( typeof(component) == 'string') {
    return {
      matched: false,
      component: component
    };
  }

  const { matchedChildren, children } = searchChildren(component, searchExp);

  const { matchedNumber, matchedHeading } = hasMatch(component, searchExp);

  if ( !( matchedChildren || matchedNumber || matchedHeading )) {
    return {
      matched: false,
      component: component
    };
  }

  return {
    matched: true,
    component: React.cloneElement(component, {matchedNumber, matchedHeading}, children)
  };
}

const filterRuleSectionsBySearch = (rules, searchText) => {
  if (!searchText || searchText.length < 0) {
    return rules;
  }

  const searchExp = searchExpression(searchText);

  const newChildren = React.Children.map(rules, (childSection) => {
    const { matched, component } = searchForMatches(childSection, searchExp);

    return matched ? component : null;
  });

  return newChildren;
}

export default ({ search, children }) => (
  <div>
    {filterRuleSectionsBySearch(children, search)}
  </div>
)