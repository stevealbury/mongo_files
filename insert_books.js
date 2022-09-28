db.getSiblingDB("books").books.insertMany([
   { "_id" : 1765, "title" : "The Picnic Hamper", "author" : "Paddington", "copies" : 2 },
   { "_id" : 1753, "title" : "Comedy Greats", "author" : "Dantee", "copies" : 10 },
   { "_id" : 1645, "title" : "Eclairss 2", "author" : "Delia", "copies" : 12 },
   { "_id" : 1000, "title" : "The Journey", "author" : "Homer", "copies" : 100 },
   { "_id" : 1020, "title" : "Ililad and Ililass", "author" : "Homer Simpson", "copies" : 102 }
])

db.getSiblingDB("books").books.aggregate( [
    { $group : { _id : "$author", books: { $push: "$title" } } },
    { $out : "authors" }
] )
