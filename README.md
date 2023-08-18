### Live Link: https://example.com

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/64de4fe5ebc8daced5a718ab (Single GET) Include an id that is saved in your database
- api/v1/users/64de4fe5ebc8daced5a718ab (PATCH)
- api/v1/users/64de4fe5ebc8daced5a718ab (DELETE) Include an id that is saved in your database

#### Cows

- api/v1/cows (POST)
- api/v1/cows (GET)
- api/v1/cows/64dde7f48d6550c3f9a35759 (Single GET) Include an id that is saved in your database
- api/v1/cows/64dde7f48d6550c3f9a35759 (PATCH)
- api/v1/cows/64dde7f48d6550c3f9a35759 (DELETE) Include an id that is saved in your database

### Pagination and Filtering routes of Cows

- api/v1/cows?pag=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?minPrice=20000&maxPrice=70000
- api/v1/cows?location=Chattogram
- api/v1/cows?searchTerm=Dh

#### Orders

- api/v1/orders (POST)
- api/v1/orders (GET)
- api/v1/orders/64df4ceb8efa8df4cd67aecf (get single order)
# digital-cow-hut-backend
# digital-cow-hut-backend
