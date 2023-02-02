
## Setup

1. Run 'npm install' on root folder (it will download node modules for Backend)

2. Hit cd .\frontend\ & run 'npm install' (it will download node modules for Frontend)

## Run

1. Backend Service 
Run 'npm run start-watch'
[http://localhost:5000](http://localhost:5000) opens up the Node server.

2. Frontend Service
Run 'cd .\frontend\' & then run 'npm start'
[http://localhost:3000](http://localhost:3000) opens up the React app.

3. Test Cases
Run 'npm run test' 

4. To check code coverage 
Run 'npm run test -- --coverage --watchAll=false'
It will create covergae folder, under lcov-report open index.html to check coverage

5. Linting
Run 'npm run lint'

## Packages used in project

1. testing-library/jest-dom
2. typescript
3. react-test-renderer
4. ES Lint

## Flow & logic

1. Mocked data.json file to get API response --> '/api/flights'
2. Used Node server to handle API
3. Used fetch inside custom hooks to get Data from API
4. Used Context API to store and Pass data to all components
5. Created Dashboard component which will hold Search Bar, Filter & Flgihts component to
Handle Data
6. Search Bar ---> It has from, to, depart & seat filters to fetch data.
7. Advabced Filter ---> 
i. Best is default filter which will consist all filter data
ii. Cheapest will render low price flight, logic -> Calculated average price of all filtered 
flgihts and render flgihts which has lower price than average price
iii. Fastes will render fasted flight, lofic -> Calculated average time of all filtered 
flgihts and render flgihts which has lower time than average time of flights
8. At the end rendered flgihts in group respected to services.
9. Have added 1.5 second delay in fecth to make fill of API is getting called in background

## Centralized Data Structure

1. Used Context to Store & Organized data at central level
2. Reason behind using React Context was, We'd only one API & One main component otherwise would have been gone for React Saga and React Redux
3. AppContext (app-context.tsx) is file where context has been created with provider.
4. Wrapped App component into context to pass data all over the application

## TypeScript

1. Used Typescript & type.ts includes types used all over application.

## Constant Module

1. It includes key constant which has been used in the application and API points with types.
2. Created constant values for Services, Cities & Advanced Filter

## Utils Module

1. Organised common code in utils file.

## Imporvement

1. Cetrallized store
i. If More API's then convert Context to Redux state & Import Saga

2. Data Handling
i. Currently Data is only present for date 12-02-203
ii. We can add more data to add more features

3. Pegenation
i. Once data grows we can add pregenation 

4. Code Segragation
i. UI Layout should be much organsied

5. Test Cases
i. Test Cases for Context, UseFetch, index

6. UI Experience

7. We can add Accessblity Identification for Screen reading tools



