import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Croissant",
    description: "Classic croissant with tasty jam",
    price: 73,
  },
  {
    id: "m2",
    name: "Classic cottage cheese pancakes",
    description: "served with yogurt and apricot jam",
    price: 125,
  },
  {
    id: "m3",
    name: "Coconut milk oatmeal",
    description: "with banana and almonds",
    price: 117,
  },
  {
    id: "m4",
    name: "Omlette with fried tomato",
    description: "Healthy...and green...",
    price: 95,
  },
  {
    id: "m5",
    name: "Espresso/Ristretto",
    description: "",
    price: 40,
  },
  {
    id: "m6",
    name: "Americano",
    description: "",
    price: 45,
  },
  {
    id: "m7",
    name: "Capuccino",
    description: "",
    price: 60,
  },
  {
    id: "m8",
    name: "Latte",
    description: "",
    price: 60,
  },
];

const AvailableMeals = (props) => {
  const menuList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
