```javascript
//Incorrect use of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("652652652")},{$inc:{field1:1,field2: "string"}});
```