const mysqlx = require('@mysql/xdevapi');
let mytable={};
let srange = process.argv[2]
mysqlx.getSession({host: '127.0.0.1', port: 33060, user: 'root', password: 'F4Fm@xZUTMqw*q'})
	.then(session => {
		mytable = session.getSchema('mysql').getTable('stu')
		return mytable.select('srange').execute()
	})
	.then(table =>{
		let result = Math.floor(table.fetchAll().toString())
		if(srange>=result)
			console.log(result)
	})
	.catch(error =>{
			console.log(error)
		}
	)
