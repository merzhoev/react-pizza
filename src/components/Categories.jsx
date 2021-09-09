import React from 'react';
import PropTypes from 'prop-types';

function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''} 
          onClick={() => onClickCategory(null)}>Все</li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''} 
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
        ))}
      </ul>
    </div>
  )
}

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
}

Categories.defaultProps = {
  activeCategory: null,
  items: []
}

export default Categories;


// class Categories extends  React.Component {  
//   state = {
//     activeItem: 0
//   }

//   onSelectItem = (i) => {
//     this.setState({
//       activeItem: i
//     })
//   }

//   render() {
//     const {items} = this.props;

//     return (
//       <div className="categories">
//         <ul>
//           {items.map((name, i) => (
//             <li
//               className={this.state.activeItem === i ? 'active' : ''}
//               onClick={() => this.onSelectItem(i)}
//               key={`${name}_${i}`}>{name}</li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }