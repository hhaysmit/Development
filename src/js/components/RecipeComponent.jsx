
var React = require('react');

var RecipeComponent = React.createClass({
  allergyMeal: function(event) {
      var currentList = this.state.initialItems;
      if(event.target.value !== "all"){
        currentList = currentList.filter(function(item){
          return item.Allergy[event.target.value].search(event.target.value) !== -1;
        });
      }
      if(this.state.meal === "dinner"){
        currentList = currentList.filter(function(item){
          return item.Meal.search("dinner") !== -1;
        });
      }
      if(this.state.meal === "dessert"){
        currentList = currentList.filter(function(item){
          return item.Meal.search("dessert") !== -1;
        });
      }
      if(this.state.meal === "app"){
        currentList = currentList.filter(function(item){
          return item.Meal.search("app") !== -1;
        });
      }
    this.setState({allergies: event.target.value});
    this.setState({items:currentList});
  },
  categorizeMeal: function(event) {
      var currentList = this.state.initialItems;
      if(event.target.value !== "all"){
        currentList = currentList.filter(function(item){
          return item.Meal.search(event.target.value) !== -1;
        });
      }
      if(this.state.allergies === "nuts"){
        currentList = currentList.filter(function(item){
          return item.Allergy.nuts.search("nuts") !== -1;
        });
      }
      if(this.state.allergies === "dairy"){
        currentList = currentList.filter(function(item){
          return item.Allergy.dairy.search("dairy") !== -1;
        });
      }
      if(this.state.allergies === "vegan"){
        currentList = currentList.filter(function(item){
          return item.Allergy.vegan.search("vegan") !== -1;
        });
      }
        if(this.state.allergies === "vegetarian"){
        currentList = currentList.filter(function(item){
          return item.Allergy.vegetarian.search("vegetarian") !== -1;
        });
    }
    this.setState({meal: event.target.value});
    this.setState({items:currentList});
  },
  filterList: function(event){
    var updatedList = this.state.items;
    updatedList = updatedList.filter(function(item){
      return item.Name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
    return {
      initialItems: [
        {Name: "Turkey", Description: "A recipe for perfectly brined turkey", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "none", dairy: "dairy"}},
        {Name: "Potatos", Description: "Creamy garlic and chive mashed potatos", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Brussel Sprouts", Description: "Roasted brussel sprouts with proscuitto", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "none", dairy: "dairy"}},
        {Name: "Beets", Description: "Golden beets mixed with walnuts and raisons", Meal: "dinner", Allergy: {nuts: "none", vegan: "none", vegetarian: "none", dairy: "dairy"}},
        {Name: "Pumpkin Pie", Description: "Delicious pumpkin pie recipe", Meal: "dessert", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Apple Pie", Description: "Cinnamon spiced apple pie", Meal: "dessert", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Pecan Pie", Description: "A perfect pecan pie with whipped cream", Meal: "dessert", Allergy: {nuts: "none", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Beans", Description: "Green beans tossed with almonds", Meal: "dinner", Allergy: {nuts: "none", vegan: "vegan", vegetarian: "vegan", dairy: "dairy"}},
        {Name: "Stuffing", Description: "Cornbread stuffing roasted with chesnutts", Meal: "dinner", Allergy: {nuts: "none", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Cauliflower", Description: "Parmesan and mozzerela cauliflower", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Rutabagas", Description: "Rutabaga mash with onions and shallots", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Cidar", Description: "Easy spiced apple cidar with cinnamon", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "vegan", vegetarian: "vegetarian", dairy: "dairy"}},
        {Name: "Cranberries", Description: "Tart cranberry sauce with orange zests", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "vegan", vegetarian: "vegetarian", dairy:"dairy"}},
        {Name: "Gravy", Description: "Rich gravy that anyone can make", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "none", dairy: "none"}},
        {Name: "Turnips", Description: "Roasted turnip fries lightly salted", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "vegan", vegetarian: "vegan", dairy: "dairy"}},
        {Name: "Fig Dip", Description: "Calryna fig sauce with goat cheese", Meal: "app", Allergy: {nuts: "none", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Crudités", Description: "An easy olive and pepper plate", Meal: "app", Allergy: {nuts: "nuts", vegan: "vegan", vegetarian: "vegetarian", dairy: "dairy"}},
        {Name: "Sweet potatos", Description: "Mashed sweet potatos with marshmellows", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Squash", Description: "Butternut squash with nutmeg and butter", Meal: "dinner", Allergy: {nuts: "nuts", vegan: "none", vegetarian: "vegetarian", dairy: "none"}},
        {Name: "Pickles", Description: "A guide to pickling any vegetables", Meal: "app", Allergy: {nuts: "nuts", vegan: "vegan", vegetarian: "vegetarian", dairy: "dairy"}}
        ],
      items: []
    }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems});
    this.setState({meal: "all"});
    this.setState({allergies: "all"});
  },
  render: function(){
    return (
      <div className="filter-list">
        <div className="searchBar">
          <div className="searchBox">
          <div className="searchContainer">
            <span className="searchSpan"><img className="magnifyingGlass" src="/dist/search.png"/></span>
            <input className="recipeSearch" type="text" placeholder="Search for a Recipe" onChange={this.filterList}/>
          </div>
          </div>
        </div>
        <div className="categoryBar">
          <div className="categoryBox">
            <select className="recipeMeal" value={this.state.meal} onChange={this.categorizeMeal}>
             <option value="all">All Meals</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="app">Appetizer</option>
            </select>
             <select className="recipeAllergy" value={this.state.allergies} onChange={this.allergyMeal}>
                <option value="all">No Dietary Restrictions</option>
                <option value="nuts">No Nuts</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="dairy">Dairy Free</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>
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
module.exports = RecipeComponent;