// import React, { Component } from 'react'

// const HomeContext = React.createContext();

// export default class HomeProvider extends Component {
//     state={
//         homes: [],
//         sortedhomes: [],
//         featuredhomes: [],
//         loading: true,
//         type: 'all',
//         capacity: 1,
//         price: 0,
//         minPrice: 0,
//         maxPrice: 0,

//     };
//     componentDidMount(){
//         let homes = this.formatData(items);
//         let featuredhomes = homes.filter(home => home.featured === true);
//         let maxPrice = Math.max(...homes.map(item => item.price));
//         let maxSize = Math.max(...homes.map(item => item.size));
//         this.setState({
//             homes,
//             featuredhomes,
//             sortedhomes:homes,
//             loading: false,
//             price : maxPrice,
//             maxPrice,
//             maxSize
//         })
//     }
//     formatData(items){
//         let tempItems = items.map(item =>{
//         let id = item.sys.id;
//         let images = item.fields.images.map(image => image.fields.file.url);
//         let home = {...item.fields,images,id}
//         return home;    
//         });
//         return tempItems;
//     }
//     getHome = (slug) => {
//         let temHome = [...this.state.homes];
//         const home = temHome.find((home)=>home.slug === slug);
//         return home;
//     }
//     handleChange = event => {
//         const target = event.target;
//         const value = target.type ==='checkbox' ? target.checked:target.value;
//         const name = event.target.name;
//         this.setState(
//         {
//             [name]: value
//         },this.filterHomes)
//     }
//     filterHomes = () => {
//         let{
//             homes,type,capacity,price,minSize,maxSize
//         }= this.state
//         // for all the homes
//         let temHomes = [...homes];

//         //transform value
//         capacity = parseInt(capacity)
//         price = parseInt(price)

//         //filter by type
//         if(type !=='all'){
//             temHomes = temHomes.filter(home => home.type === type)
//         }
//         //filter by capacity
//         if(capacity !==1){
//             temHomes = temHomes.filter(home => home.capacity >= capacity)
//         }
//         //filter by price
//         temHomes = temHomes.filter(home => home.price <= price);
        
//         //change state
//         this.setState({
//             sortedHomes: temHomes
//         })
//     }

//     render() {
//         return (
//             <HomeContext.Provider value={{ ...this.state, getHome: this.getHome ,handleChange: this.handleChange }}>
//                 {this.props.children}
//             </HomeContext.Provider>
//         )
//     }
// }
// const HomeConsumer = HomeContext.Consumer;

// export function withHomeConsumer(Component){
//     return function ConsumerWrapper(props){
//         return <HomeConsumer>
//             {value => <Component {...props} context={value} />}
//         </HomeConsumer>
//     }
// }

// export{HomeProvider,HomeConsumer,HomeContext}