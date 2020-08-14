var db = require('./db');

module.exports ={

	  getById: function(id, callback){
		var sql = "select * from users where id="+id;
		db.getResults(sql, function(result){
      console.log('user module error')
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	  validate: function(user, callback){
		var sql = "select * from users where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	  getAllFood:function(callback){
		var sql = "select * from food";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	updateUser: function(user, callback){
    var sql = "update users set name='"+user.name+"', username='"+user.username+"', password='"+user.password+"', phone='"+user.phone+"', email='"+user.email+"' , address='"+user.address+"' where id='"+user.id+"'";
    db.execute(sql, function(status){
      if(status){
        callback(true);
      }else{
        callback(false);
      }
    });
  },

  takeaway:function(callback){
		var sql = "select * from takeaway";
		db.getResults(sql,function(results)
		{

			if(results.length > 0)
			{
				callback(results);
			}
			else
			{
				callback([]);
			}
		});
	},
	
	delete: function(id, callback){
		var sql = "delete from users where id="+id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}



}