```javascript
//Correct use of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("652652652")},{$inc:{field1:1}});
//Handle non-numeric fields
db.collection('myCollection').updateOne({"_id":ObjectId("652652652")},{$set: {field2: parseInt(field2, 10)+1}});
//Alternatively, handle during data input to prevent the error
```