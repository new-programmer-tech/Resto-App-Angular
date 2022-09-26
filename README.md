# Resto-App-Angular

Its is a simple restaurant app in this app you can perform CURD operations , you can add new restaurant delete , update and read

## Topics Covered in this project:-

```
1. Component
2. Http 
3. Observable
4. CURD
4. Form
5. json
6. BootStrap
7. Service
8. Routing
9. Snapshot
```

> ## Routing Concept:-

- #### If you want to set your default url :-
when user will hit https://localhost:4200/
```
{ path: '', component: LoginComponent }

```

- #### If user will an url which is not defined :-
when user will hit https://localhost:4200/gibberish
```
{ path: '**', pathMatch: 'full', component: PagenotfoundComponent }

```
