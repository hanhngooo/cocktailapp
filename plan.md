# feature

- 1 page with all cocktail types
  - static route
  - request date from api
- 2nd page Click on 1 type ==> show images
  - dynamic route
  - requres data for 1 cocktail type

# data model

- Cocktail Catogories List
  - State: catogories [{},{},{}]
- Cocktail Images
  - State: specific cocktail [{}, {},{}]

# Processing

- Category List

fetch data (axios, async await, useEffect)
setCatogories (useState)
display catogories: map the array
make <Link>

- Specific Category

fetch data (axios, async await, useEffect)
setSpecificCategory (useState)
display images: interpolating JSX

# Execute plan

Define a route
Make a link so people can visit your page
Make a component (Categoris, SpecificCatefory)
Fetch our data
Display data
