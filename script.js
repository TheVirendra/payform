// Sample restaurant data (you can replace this with real data from an API)
const restaurants = [
  {
    id: 1,
    name: 'Aadhavan hotel',
    cuisine: 'Southindian',
    location: 'Shegaon',
    rating: 4
    image: 'restaurant1.jpg',
    description: 'This is Restaurant 1. Lorem ipsum dolor sit amet...',
  },{
    id: 2,
  name: 'One Bit hotel',
  cuisine: 'pizza',
  location: 'Shegaon',
  rating: 4
  image: 'restaurant1.jpg',
  description: 'This is Restaurant 1. Lorem ipsum dolor sit amet...',
},

  // Add more restaurant objects here...
];

document.addEventListener('DOMContentLoaded', function () {
  const restaurantListings = document.querySelectorAll('.restaurant');

  restaurantListings.forEach((restaurant) => {
    restaurant.addEventListener('click', () => {
      const restaurantId = restaurant.dataset.id;
      const selectedRestaurant = restaurants.find((r) => r.id === parseInt(restaurantId, 10));

      if (selectedRestaurant) {
        showRestaurantDetails(selectedRestaurant);
      }
    });
  });
});

function showRestaurantDetails(restaurant) {
  // Create a modal or detailed view to display restaurant details
  alert(
    `Restaurant: ${restaurant.name}\nCuisine: ${restaurant.cuisine}\nLocation: ${restaurant.location}\nRating: ${restaurant.rating}\nDescription: ${restaurant.description}`
  );
}
