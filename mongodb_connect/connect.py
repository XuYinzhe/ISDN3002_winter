from os import curdir
from pymongo import MongoClient
import pymongo
from pprint import pprint

def get_database():
    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = "mongodb+srv://shaunxu:Xyz20010131@cluster0.llrsd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    client = MongoClient(CONNECTION_STRING)
    #print(client.list_database_names())

    # Create the database for our example (we will use the same database throughout the tutorial
    return client
    
# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":    
    
    # Get the database
    client=get_database()
    collection = client.AVATA_room
    #print(collection.collection.find())
    cursor=collection.room_info.find()
    i=0
    for item in cursor:
        pprint(item)
        i+=1
    print(i)
