/* Get your instagram data, requesting it on your own app. 
Pick the connections.json
Get your following, followers objects */

let following = {"followingguy0": "2014-01-25T11:28:14", "followingguy1": "2019-01-24T12:47:21", "followingguy2": "2014-01-25T11:28:14", "followingguy3": "2019-01-24T12:47:21"};

const followers = {"followingguy0": "2014-01-25T11:28:14", "followingguy1": "2019-01-24T12:47:21", "followingguy2": "2014-01-25T11:28:14" }
 
//Get only the object\'s key (usernames)
 const followingArr = Object.keys(following);

const followersArr = Object.keys(followers);  

//building the diff function, to get the difference between two arrays
Array.prototype.diff = function (a) {
    return this.filter(function (i) {
        return a.indexOf(i) === -1;
    });
};

//get the users that I follow, but don't follow me back
const diff = followingArr.diff(followersArr); 

diff.forEach(f => console.log(f));
