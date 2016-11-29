var React = require('react');

var RecipeComponent = React.createClass({
  categorizeMeal: function(event) {
    var currentList = this.state.items;
    currentList = currentList.filter(function(item){
      return item.Meal.search(event.target.value) !== -1;
    });
    this.setState({items:currentList});
  },
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.Name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
    return {
      initialItems: [
        {Name: "Turkey", Description: "A recipe for perfectly brined turkey", Meal:"dinner"},
        {Name: "Potatos", Description: "Creamy garlic and chive mashed potatos", Meal:"dinner"},
        {Name: "Brussel Sprouts", Description: "Roasted brussel sprouts with proscuitto", Meal:"dinner"},
        {Name: "Beets", Description: "Golden beets mixed with walnuts and raisons", Meal:"dinner"},
        {Name: "Pumpkin Pie", Description: "Delicious pumpkin pie recipe", Meal:"dessert"},
        {Name: "Apple Pie", Description: "Cinnamon spiced apple pie", Meal:"dessert"},
        {Name: "Pecan Pie", Description: "A perfect pecan pie with whipped cream", Meal:"dessert"},
        {Name: "Beans", Description: "Green beans tossed with almonds", Meal:"dinner"},
        {Name: "Stuffing", Description: "Cornbread stuffing roasted with chesnutts", Meal:"dinner"},
        {Name: "Cauliflower", Description: "Parmesan and mozzerela cauliflower", Meal:"dinner"},
        {Name: "Rutabagas", Description: "Rutabaga mash with onions and shallots", Meal:"dinner"},
        {Name: "Cidar", Description: "Easy spiced apple cidar with cinnamon", Meal:"dinner"},
        {Name: "Cranberries", Description: "Tart cranberry sauce with orange zests", Meal:"dinner"},
        {Name: "Gravy", Description: "Rich gravy that anyone can make", Meal:"dinner"},
        {Name: "Turnips", Description: "Roasted turnip fries lightly salted", Meal:"dinner"},
        {Name: "Fig Dip", Description: "Calryna fig sauce with goat cheese", Meal:"app"},
        {Name: "Crudités", Description: "An easy olive and pepper plate", Meal:"app"},
        {Name: "Sweet potatos", Description: "Mashed sweet potatos with marshmellows", Meal:"dinner"},
        {Name: "Squash", Description: "Butternut squash with nutmeg and butter", Meal:"dinner"},
        {Name: "Pickles", Description: "A guide to pickling any vegetables", Meal:"app"}
        ],
      items: []
    }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
        <div className="searchBar">
          <input type="text" placeholder="Search" onChange={this.filterList}/>
          <select value="Food Type" onChange={this.categorizeMeal}>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="app">Appetizer</option>
          </select>
        </div>
        <List items={this.state.items}/>
        </div>
      );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul className="recipeList">
      {
        this.props.items.map(function(item) {
          return <li className="recipeItem" key={item.Name}>
          <h3 className="recipeName">{item.Name}</h3>
          <p className="recipeDescription">{item.Description}</p>
          </li>
        })
      }
      </ul>
      )
  }
});