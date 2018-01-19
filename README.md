## Tulip ##

**Tulip** is a simple web application which includes and Express RESTful API server and a front end in AngularJS

The video tutorial that goes with this project can be found here

## Usage ##
Just clone or download and run **npm install** and then **node app** to start

##Notes##
The Genres Angular controller is blank on purpose. This is for you to try and come up with after watching the video. It may be added in the future

# Tulip




FAQs : 

Social to share Button : 

http://plnkr.co/edit/TQoIJ2?p=preview

NOTE  :#Always user header : Content-Type : application/json for all request form postman.

#Model :

User
```json
{
    "id": "id",
    "name": "name", 
    "address": "address",
    "city":"city",
    "state":"state",
    "country":"country",
    "starttime":"6 AM",
    "endtime":"6 PM",
    "website": "abc.com",
    "profession" : "Service Provider like catering",
    "interest" : "Wedding, Birthday Party,  Corporate Party",
    "email": ["email1", "email2"],
    "phone": ["phone1", "phone2"],
    "likes": "TOTAL_LIKES", 
    "follows":[{"name":"username1"},{"name":"username2"}],
    "socialmedia":[{"facebook":"facebook_page"},{"pinterest":"pinterest_images"}],
    "reviews": [
        { 
        "user": {"display_name": "AAAA" },
            "service": {
                "rating": {
                    "rating": "5"
                },
                "review": "Excellent"
            }
        },
        { 
        "user": {"display_name": "BBBB" },
            "service": {
                "rating": {
                    "rating": "4"
                },
                "review": "Good"
            }
        },
        { 
        "user": {"display_name": "CCCC" },
            "service": {
                "rating": {
                    "rating": "3"
                },
                "review": "Average"
            }
        }
       ]
     }
```


Review :
```json
{
    "user": {
        "display_name": "Simon"
    },
    "service": {
        "rating": {
            "rating": "5"
        },
        "review": "Excellent"
    }
}
```

