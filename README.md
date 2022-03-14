* * * UPBRINGO ASSIGNMENT * * *
(switch on word wrap on in the notepad, to  clearly view it)

**STORE DATABASE MANAGEMENT API**

-> i had deployed the api on heroku.

    link : https://upbringo15-koushik.herokuapp.com/

    MySql cloud : CleverCloud

->This API is developed using NodeJs and MySql. Stores can be created whyich will get added to the database. Purchases from customers from a particular store will be stored by saving the transaction as an invoice in the transactions database.

-> In this API, functionality for selecting a particular shop by  name of shop, and selecting transactions of particular customer with given name are also provided.

-> MySql npm package is used for connecting to database

-- INSTALLATION --

-> npm install(installing dependencies)

-> npm start

--ROUTES--

-> POST - https://upbringo15-koushik.herokuapp.com/stores
   Creates table if it is not present and adds store to the stores table.

-> GET - https://upbringo15-koushik.herokuapp.com/stores
   Fetches all stores from the stores table.

-> POST - https://upbringo15-koushik.herokuapp.com/purchase
   Creates transaction table if not present and stores the transaction information in transaction table.
   
-> GET - https://upbringo15-koushik.herokuapp.com/stores/storename
   Fetches store by given storename.

-> GET - https://upbringo15-koushik.herokuapp.com/purchase/customername
   Fetches customer purchase data for the given customer name.
 
 
 -- POSTMAN --

 ![alt text](https://github.com/koushik-15/StoreManagement-Backend-API/blob/main/ss/create%20purchase.png)
 