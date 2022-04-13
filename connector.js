const mysqlx = require('@mysql/xdevapi');
let table1,table2,candidate;
let recommend = {
	getSchoollist(grade,subject)
{
	mysqlx.getSession({host: '127.0.0.1', port: 33060, user: 'root', password: 'F4Fm@xZUTMqw*q'})
		.then(session => {
			table1 = session.getSchema('db1').getTable('GradeRange')
			if(subject === 'EE')
			    table2 = session.getSchema('db1').getTable('HistorySchoolDataES')
			if (subject ==='CS')
				table2 = session.getSchema('db1').getTable('HistorySchoolDataCS')
			return table1.select('srange').where('grade = :grade').bind('grade', grade).execute()
		})
		.then(result => {
			let srange = result.fetchOne()
			return table2.select(['SchoolName']).where(':range - LSrange < 10 AND Syear = "2021" AND HSrange - :range < 30').bind('range', srange[0]).execute()
		})
		.then(result => {
			candidate = result.fetchAll()
		})
		.catch(error => {
				console.log(error)
			}
		)
	return candidate
},
    getOrderlist(){
		mysqlx.getSession({host: '127.0.0.1', port: 33060, user: 'root', password: 'F4Fm@xZUTMqw*q'})
			.then(session => {
				table1 = session.getSchema('db1').getTable('GradeRange')
				return table1.select('grade', 'srange').execute()
			})
			.then(result => {
				candidate = result.fetchAll()
			})
			.catch(error => {
					console.log(error)
				}
			)
		return candidate
	},
	getHistorySchool(number,subject){
		mysqlx.getSession({host: '127.0.0.1', port: 33060, user: 'root', password: 'F4Fm@xZUTMqw*q'})
			.then(session =>{
				if(subject === 'EE')
					table1 = session.getSchema('db1').getTable('HistorySchoolDataES')
				if (subject === 'CS')
					table1 = session.getSchema('db1').getTable('HistorySchoolDataCS')
				return table1.select('SchoolName','HSrange','LSrange','Syear').where('SchoolNum = :number').bind('number',number).execute()
				}
			)
			.then(result =>{
				candidate = result.fetchAll()
			})
			.catch(error =>{
				console.log(error)
			})
		return candidate
	}
}
module.exports = recommend
