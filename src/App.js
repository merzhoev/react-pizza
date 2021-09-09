import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  )
}

export default App;

// class App extends React.Component {
//   async componentDidMount() {
//     try {
//       const { data } = await axios.get('http://localhost:3000/db.json')
//       this.props.setPizzas(data.pizzas)
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route exact path="/">
//             <Home items={this.props.items} />
//           </Route>
//           <Route path="/cart" component={Cart} />
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   items: state.pizzas.items
// })

// const mapDispatchToProps = {
//   setPizzas
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);