const mysqlx = require('@mysql/xdevapi');
let table1,table2
mysqlx.getSession({host: '127.0.0.1', port: 33060, user: 'root', password: 'F4Fm@xZUTMqw*q'})
	.then(session => {
		table1 = session.getSchema('db1').getTable('GradeRange')
		return table1.select('grade', 'srange').execute()
	})
	.then(result => {
		candidate = result.fetchAll()
		console.log(candidate)
	})
	.catch(error => {
			console.log(error)
		}
	)
