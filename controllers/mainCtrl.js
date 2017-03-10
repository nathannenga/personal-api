var user = require('../user.js');

module.exports = {
getName: function(req, res){
  res.json(user.name)
},
getLocation: function(req, res){
  res.json(user.location)
},
getOccupations: function (req, res){
  res.json(user.occupations)
},
GetOccupationLatest: function(req, res){
  var latestOccupation = user.occupations[user.occupations.length-1];
  res.json(latestOccupation)
},
getHobbies: function(req, res){
  res.json(user.hobbies);
},
getHobbiesType: function(req, res){
  var hobbyType = user.hobbies.filter(function(hobby){
    return hobby.type === req.params.type;
  });
res.json(hobbyType);

},
getFamily : function(req, res){
  var relations = user.family.filter(function(member) {
    return member.relation === req.query.relation;
  })
  res.json(relations);
},
// getFamilyGender
// getRestaurants
// getRestaurantsName
putName:function(req,res){
  console.log(11111111, req.body)
  user.name = req.body.name;
  res.json(user.name);
}

}
