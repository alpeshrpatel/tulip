## search-master ##

**search-master** is a simple web application which includes and Express RESTful API server and a front end in AngularJS

The video tutorial that goes with this project can be found here

## Usage ##
Just clone or download and run **npm install** and then **node app** to start

##Notes##
The Genres Angular controller is blank on purpose. This is for you to try and come up with after watching the video. It may be added in the future

# search-master


Social to share Button : 

http://plnkr.co/edit/TQoIJ2?p=preview

School
```json
{
    "id": "id",
    "name": "name", 
    "address": "address",
    "city":"city",
    "state":"state",
    "country":"country",
    "website": "abc.com",
    "email": ["email1", "email2"],
    "phone": ["phone1", "phone2"],
    "likes": "TOTAL_LIKES", 
    "follows":[{"follower":"follower1"},{"follower":"follower2"}],
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

User : 
```json
{
        "user_id" : "ABCDBWN",
        "password" : "ABCDBWN",
        "date_of_join" : "15/10/2010",
        "education" : "B.C.A.",
        "profession" : "DEVELOPER",
        "interest" : "MUSIC",
        "community_name" : [
                "MODERN MUSIC",
                "CLASSICAL MUSIC",
                "WESTERN MUSIC"
        ],
        "community_moder_id" : [
                "MR. BBB",
                "MR. JJJ",
                "MR MMM"
        ],
        "community_members" : [
                500,
                200,
                1500
        ],
        "friends_id" : [
                "MMM123",
                "NNN123",
                "OOO123"
        ],
        "ban_friends_id" : [
                "BAN123",
                "BAN456",
                "BAN789"
        ]
}

```

School :
```json
{
    "__v": 0,
    "name": "DPS",
    "address": "Makarpura Road",
    "city": "Vadodara",
    "zipcode": "391440",
    "state": "Gujarat",
    "country": "India",
    "boys": 500,
    "girl": 400,
    "maleteacher": 10,
    "femaleteacher": 10,
    "type": "public",
    "daycare": true,
    "kg": true,
    "primary": true,
    "high": true,
    "website": "www.rajmahel.com",
    "starttime": 7,
    "endtime": 5,
    "_id": "59cff7fae972291ac02797f2",
    "create_date": "2017-09-30T20:00:58.454Z",
    "schoolimages": [
        "schoolimages-1506801658446.jpg",
        "schoolimages-1506801658447.jpg"
    ],
    "phone": [
        "22294",
        "24258"
    ],
    "email": [
        "school@msu.com"
    ],
    "established" : "1895"
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

